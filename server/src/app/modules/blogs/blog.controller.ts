import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import { bikeService } from "../bikes/bike.service";
import { blogService } from "./blog.service";

const createBlog = catchAsync(async (req, res) => {
    await bikeService.createBike(req.body);
    res.status(StatusCodes.OK).json({
      success: true,
      message: 'Blog create successfully',
      statusCode: StatusCodes.OK,
    });
  });
  const getSingleBlog = catchAsync(async (req, res) => {
    const blogId=req.params.blogId;
    const result=await blogService.getSingleBlog(blogId);
    res.status(StatusCodes.OK).json({
      success: true,
      message: 'Blog retrieve successfully',
      statusCode: StatusCodes.OK,
      data:result
    });
  });
  const getallBlog = catchAsync(async (req, res) => {
    const result=await blogService.getAllBlog();
    res.status(StatusCodes.OK).json({
      success: true,
      message: 'all blog get successfully',
      statusCode: StatusCodes.OK,
      data:result
    });
  });
  const updateBlog = catchAsync(async (req, res) => {
    const blogId=req.params.blogId;
    const data= req.body;
    const result=await blogService.updateBlog(blogId,data);
    res.status(StatusCodes.OK).json({
      success: true,
      message: 'update blog  successfully',
      statusCode: StatusCodes.OK,
      data:result
    });
  });
  const deleteBlog = catchAsync(async (req, res) => {
    const blogId=req.params.blogId;
    const result=await blogService.deleteBlog(blogId);
    res.status(StatusCodes.OK).json({
      success: true,
      message: 'Blog delete  successfully',
      statusCode: StatusCodes.OK,
      data:result
    });
  });

  export const blogController={
    createBlog,
    getSingleBlog,
    getallBlog,
    updateBlog,
    deleteBlog
  }