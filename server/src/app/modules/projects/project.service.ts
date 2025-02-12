import { IProject } from "./project.interface";
import Project from "./project.model";


const createProject = async (payload: IProject): Promise<IProject> => {
  const result = await Project.create(payload);
  return result;
};
const getSingleProject = async (blogId: string) => {
  const result = await Project.findById( blogId );
  return result;
};
const getAllProject = async () => {
  const result = await Project.find();
  return result;
};

const deleteProject = async (id: string) => {
  const result = await Project.findByIdAndDelete(id);
  return result;
};

const updateProject = async (id: string, data: Partial<IProject>) => {
  const result = await Project.findByIdAndUpdate(id, data, { new: true });
  return result;
};

export const projectService = {
  createProject,
  getSingleProject,
  getAllProject,
  deleteProject,
  updateProject,
};
