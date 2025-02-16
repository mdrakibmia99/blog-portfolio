import AdminBlog from "@/components/admin/blog/AdminBlog";
import React from "react";

const AllAdminBlogPage = async() => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog`, {
    next: { tags: ["blogs"] },
  });
  const data = await res.json();
  // console.log("Data: ", data);
  const blogs = data?.data;
  // console.log("Blogss: ", blogs);
  return (
    <div>

      <AdminBlog blogs={blogs}/>
    </div>
  );
};

export default AllAdminBlogPage;
