// import BlogDetails from '@/components/blog/BlogDetails';
import BlogDetails from '@/components/blog/BlogDetails';
import React from 'react';
interface IProps {
    params: Promise<{
      id: string;
    }>;
  }
const DynamicBlogDetailsPage = async({params}:IProps) => {
    const { id } = await params;
    const res = await fetch(`${'process.env.NEXT_PUBLIC_BASE_URL'}/blog/${id}`, {
        next: { tags: ["blogs"] },
      });
      const data = await res.json();
      const blog = data?.data;
    return (
        <div>
           <BlogDetails blog={blog}/>

        </div>
    );
};

export default DynamicBlogDetailsPage;