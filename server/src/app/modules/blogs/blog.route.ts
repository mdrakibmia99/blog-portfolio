import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { blogValidation } from "./blog.validation";
import { blogController } from "./blog.controller";

const blogRoutes = Router();
blogRoutes.post('/',validateRequest(blogValidation.blogValidationSchema),blogController.createBlog)
blogRoutes.patch('/',validateRequest(blogValidation.blogUpdateValidationSchema),blogController.updateBlog)
blogRoutes.get('/',blogController.getSingleBlog)
blogRoutes.get('/:id',blogController.getallBlog)
blogRoutes.delete('/:',blogController.deleteBlog)


export default blogRoutes;