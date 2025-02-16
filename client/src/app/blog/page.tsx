import AllBlog from "@/components/blog/AllBlog";
import { TBlog } from "@/types/globalTypes";

const BlogPage = async() => {
  const res = await fetch(`${'http://localhost:5000/api'}/blog`, {
    next: { revalidate: 30 },
  });
  const data = await res.json();
  const blogs = data?.data;
  return (
    <div>
      <AllBlog  blogs={blogs as TBlog[]}/>
    </div>
  );
};

export default BlogPage;
