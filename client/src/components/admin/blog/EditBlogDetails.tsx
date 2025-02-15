/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
  import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
  import { Input } from "@/components/ui/input";
  import { Textarea } from "@/components/ui/textarea";
  import { Button } from "@/components/ui/button";
  import { useForm } from "react-hook-form";
  import { useEffect, useState } from "react";
  import { toast } from "sonner";
  import { FaEdit } from "react-icons/fa";
  import Image from "next/image";
  import { z } from "zod";
  import { zodResolver } from "@hookform/resolvers/zod";
  
  const formSchema = z.object({
    image: z.string().min(1, "Image is required."),
    title: z.string().min(1, "Title is required."),
    description: z.string().min(1, "Description is required."),
    author: z.string().min(1, "Author is required."),
    date: z.string().min(1, "Date is required."),
    userEmail: z.string().email("Invalid email format"),
  });
  
  const EditBlogDetails = ({ blog }: { blog: any }) => {
    const [open, setOpen] = useState(false);
    const [image, setImage] = useState<File | null>(null);
    
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
  
    useEffect(() => {
      form.reset({
        image: blog?.image || "",
        title: blog?.title || "",
        description: blog?.description || "",
        author: blog?.author || "",
        date: blog?.date || "",
        userEmail: blog?.userEmail || "",
      });
    }, [blog, form]);
  
    const handleImageChange = (file: File) => {
      setImage(file);
    };
  
    const onSubmit = async (data: any) => {
      const toastId = toast.loading("Updating blog...");
      try {
        let imageUrl = data.image;
        if (image) {
          const formData = new FormData();
          formData.append("file", image);
          formData.append("upload_preset", "blogImages");
          
          const response = await fetch("https://api.cloudinary.com/v1_1/dlyvk0pgr/image/upload", {
            method: "POST",
            body: formData,
          });
          const result = await response.json();
          if (!result.secure_url) throw new Error("Image upload failed");
          imageUrl = result.secure_url;
        }
        
        const updatedBlog = { ...data, image: imageUrl };
        console.log("Updated Blog Data:", updatedBlog);
        
        toast.success("Blog updated successfully!", { id: toastId });
        setOpen(false);
      } catch (error) {
        toast.error("Failed to update blog.", { id: toastId });
      }
    };
  
    return (
      <div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <button onClick={() => setOpen(true)}>
              <FaEdit className="text-black cursor-pointer hover:scale-110 w-5 h-5" />
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogTitle>Edit Blog</DialogTitle>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                {blog.image && (
                  <Image src={blog.image} alt={blog.title} width={300} height={200} className="rounded-lg" />
                )}
  
                <FormField
                  control={form.control}
                  name="image"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Image</FormLabel>
                      <FormControl>
                        <Input type="file" accept="image/*" onChange={(e) => handleImageChange(e.target.files?.[0]!)} />
                      </FormControl>
                    </FormItem>
                  )}
                />
  
                <FormField name="title" control={form.control} render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl><Input {...field} /></FormControl>
                  </FormItem>
                )} />
  
                <FormField name="description" control={form.control} render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl><Textarea {...field} /></FormControl>
                  </FormItem>
                )} />
  
                <FormField name="author" control={form.control} render={({ field }) => (
                  <FormItem>
                    <FormLabel>Author</FormLabel>
                    <FormControl><Input {...field} /></FormControl>
                  </FormItem>
                )} />
  
                <FormField name="date" control={form.control} render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date</FormLabel>
                    <FormControl><Input type="date" {...field} /></FormControl>
                  </FormItem>
                )} />
  
                <FormField name="userEmail" control={form.control} render={({ field }) => (
                  <FormItem>
                    <FormLabel>User Email</FormLabel>
                    <FormControl><Input {...field} /></FormControl>
                  </FormItem>
                )} />
  
                <Button type="submit" className="w-full">Update Blog</Button>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>
    );
  };
  
  export default EditBlogDetails;
  