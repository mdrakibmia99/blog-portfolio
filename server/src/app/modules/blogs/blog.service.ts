import { IBlog } from './blog.interface';
import Blog from './blog.model';

const createBlog = async (payload: IBlog): Promise<IBlog> => {
  const result = await Blog.create(payload);
  return result;
};
const getSingleBlog = async (blogId: string) => {
  const result = await Blog.findById({ blogId });
  return result;
};
const getAllBlog = async () => {
  const result = await Blog.find();
  return result;
};

const deleteBlog = async (id: string) => {
  const result = await Blog.findByIdAndDelete(id);
  return result;
};

const updateBlog = async (id: string, data: Partial<IBlog>) => {
  const result = await Blog.findByIdAndUpdate(id, data, { new: true });
  return result;
};

export const blogService = {
  createBlog,
  getSingleBlog,
  getAllBlog,
  deleteBlog,
  updateBlog,
};
