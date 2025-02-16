/* eslint-disable @typescript-eslint/no-unused-vars */

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
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import CustomInputField from "@/components/custom-input/CustomInputField";

const formSchema = z.object({
  image: z.string().min(1, "Image is required."),
  title: z.string().min(1, "Title is required."),
  description: z.string().min(1, "Description is required."),
  author: z.string().min(1, "Author is required."),
  date: z.string().min(1, "Date is required."),
  userEmail: z.string().email("Invalid email format."),
});

const AddBlogPost = () => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState<File | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
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

  const { reset } = form;

  const handleImageChange = (file: File) => {
    setImage(file);
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Adding Blog Post...");

    try {
      if (!image)
        return toast.error("Please select an image first!", { id: toastId });

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
       console.log(blogData,"blog add data")
      // const res = await addBlog(blogData);
      // if (res?.data) {
      //   toast.success("Blog post added successfully!", { id: toastId });
      //   reset();
      //   setOpen(false);
      // } else if (res?.error) {
      //   toast.error("Failed to add blog post. Please try again.", { id: toastId });
      // }
    } catch (error) {
      toast.error("Failed to add blog post. Please try again.", {
        id: toastId,
      });
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
            <CustomInputField
              name="title"
              label="Title"
              placeholder="Enter Blog Title"
              type="text"
              control={form.control}
            />

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
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter description" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <CustomInputField
              name="author"
              label="Author"
              placeholder="Author Name"
              type="text"
              control={form.control}
            />
            <CustomInputField
              name="date"
              label="Date"
              placeholder="YYYY-MM-DD"
              type="text"
              control={form.control}
            />
            <CustomInputField
              name="userEmail"
              label="User Email"
              placeholder="Enter your email"
              type="email"
              control={form.control}
            />

            <Button
              type="submit"
              className="w-full bg-primary-black hover:shadow-md rounded"
            >
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
