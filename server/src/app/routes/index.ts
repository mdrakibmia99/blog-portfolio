import { Router } from "express";
import blogRoutes from "../modules/blogs/blog.route";
import projectRoutes from "../modules/projects/project.route";



const router= Router()
const moduleRoutes=[
    {
        path:"/blog",
        route:blogRoutes
    },
    {
        path:"/project",
        route:projectRoutes
    },

   

]

moduleRoutes.forEach(route=>router.use(route.path,route.route))

export default router;