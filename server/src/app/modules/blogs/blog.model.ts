import { model, Schema } from 'mongoose';
import { IBlog } from './blog.interface';

const blogSchema = new Schema<IBlog>(
  {
    image: { type: String, trim: true, required: [true, 'Image is Required'] },
    title: { type: String, trim: true, required: [true, 'Title is Required'] },
    description: {
      type: String,
      trim: true,
      required: [true, 'Description is Required'],
    },
  },
  {
    // it automatic add two field 1.updatedAt 2.createdAt
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        // Exclude the __v field
        delete ret.__v;
      },
    },
  },
);

const Blog = model<IBlog>('Blog', blogSchema);
export default Blog;
