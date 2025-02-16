import AllBlog from "@/components/blog/AllBlog";
import { TBlog } from "@/types/globalTypes";

const BlogPage = async() => {
  const res = await fetch(`${process.env.BASE_URL}/blog`, {
    next: { revalidate: 30 },
  });
  const data = await res.json();
  // console.log("Data: ", data);
  const blogs = data?.data;
  //   console.log("Blog: ", blogs);
  return (
    <div>
      <AllBlog  blogs={blogs as TBlog[]}/>
    </div>
  );
};

export default BlogPage;
