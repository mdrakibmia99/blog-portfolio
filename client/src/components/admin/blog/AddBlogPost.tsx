/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "sonner";
import Image from "next/image";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TUserSession } from "@/types/session.user.type";

const formSchema = z.object({
  image: z.string().optional(),
  title: z.string().min(1, "Title is required."),
  description: z.string().min(1, "Description is required."),
  author: z.string().min(1, "Author is required."),
  date: z.string().min(1, "Date is required."),
  userEmail: z.string().email("Invalid email format"),
});

const AddBlogPost = ({session}:{session:TUserSession}) => {
  console.log(session?.user?.email,"user")
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      image: "",
      title: "",
      description: "",
      author: "",
      date: "",
      userEmail: "",
    },
  });


  const handleImageChange = (file: File) => {
    setImage(file);
    setImagePreview(URL.createObjectURL(file)); // Create a preview URL
  };

  const onSubmit = async (data: any) => {
    const toastId = toast.loading("Adding Blog Post...");

    try {
      if (!image) {
        return toast.error("Please select an image first!", { id: toastId });
      }

      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "blogImages");

      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dlyvk0pgr/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();
      const imageUrl = result.secure_url;

      const blogData = {
        ...data,
        image: imageUrl,
      };

      // Proceed to save the blog post with the uploaded image
      // const res = await addBlog(blogData);
      // if (res?.data) {
      //   toast.success("Blog post added successfully!", { id: toastId });
      //   reset();
      //   setOpen(false);
      // } else if (res?.error) {
      //   toast.error("Failed to add blog post. Please try again.", { id: toastId });
      // }

    } catch (error) {
      toast.error("Failed to add blog post. Please try again.", { id: toastId });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <span
          onClick={() => setOpen(true)}
          className="bg-primary-black text-white py-2 px-3 hover:shadow-md rounded cursor-pointer"
        >
          Add Blog Post
        </span>
      </DialogTrigger>
      <DialogContent className="px-2">
        <DialogTitle className="sr-only">Add Blog Post</DialogTitle>
        <div className=" max-h-[70vh] overflow-auto">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 max-w-md mx-auto w-full"
            >
              {/* Show the existing image or the selected image preview */}
              {imagePreview ? (
                <Image
                  src={imagePreview}
                  alt="Preview Image"
                  width={100}
                  height={100}
                  className="rounded-lg"
                />
              ) : null}

              <FormField
                control={form.control}
                name="image"
                render={({ fieldState: { error } }) => (
                  <FormItem>
                    <FormLabel>Blog Image</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            handleImageChange(file);
                          }
                        }}
                      />
                    </FormControl>
                    {error && <p className="text-red-500">{error.message}</p>}
                  </FormItem>
                )}
              />

              <FormField
                name="title"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                name="description"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                name="author"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Author</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                name="date"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                name="userEmail"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>User Email</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Add Blog Post
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddBlogPost;
