"use client";
import Image from "next/image";
import { MdDelete } from "react-icons/md";
import AdminBlogDetails from "./AdminBlogDetails";
import EditBlogDetails from "./EditBlogDetails";
import { TBlog } from "@/types/globalTypes";

const AdminBlogCard = ({ blog }: { blog: Record<string, unknown> }) => {
  const handleDelete = (id: string) => {
    console.log(id);
  };
  return (
    <div className="p-4 border rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-xl relative">
      {/* Image with admin controls */}
      <div className="w-full h-52 overflow-hidden rounded-lg relative">
        <Image
          src={blog?.image as string}
          alt={blog?.title as string}
          width={400}
          height={250}
          className="w-full h-full object-cover hover:scale-[1.1] transition-transform duration-300"
        />

        {/* Show edit & delete buttons if admin */}

        <div className="absolute top-2 right-2 flex gap-2">
          <span className="bg-blue-500 text-white px-3 py-1 rounded-md shadow-md hover:bg-blue-700">
            {/* <FaRegEdit /> */}
            <EditBlogDetails blog={blog}/>
          </span>
          <span
            onClick={() => handleDelete(blog?._id as string)}
            className="bg-red-500 text-white px-3 py-1 rounded-md shadow-md hover:bg-red-700"
          >
            <MdDelete />
          </span>
        </div>
      </div>

      {/* Blog details */}
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {blog?.title as string}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
          {blog?.description as string}
        </p>
        <div className="mt-4">
          <AdminBlogDetails blog={blog as TBlog}/>
        </div>
      </div>
    </div>
  );
};

export default AdminBlogCard;

// dialouge box
