import AdminBlog from "@/components/admin/blog/AdminBlog";
import { TUserSession } from "@/types/session.user.type";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import React from "react";

const AllAdminBlogPage = async() => {
   const session = await getServerSession(authOptions);
  const res = await fetch(`${'http://localhost:5000/api'}/blog`, {
    next: { tags: ["blogs"] },
  });
  const data = await res.json();
  // console.log("Data: ", data);
  const blogs = data?.data;
  // console.log("Blogss: ", blogs);
  return (
    <div>

      <AdminBlog blogs={blogs} session={session as TUserSession}/>
    </div>
  );
};

export default AllAdminBlogPage;
