import AllProject from "@/components/project/AllProject";
import { TProject } from "@/types/globalTypes";

const ProjectPage = async() => {
   const res = await fetch(`${'process.env.NEXT_PUBLIC_BASE_URL'}/project`, {
          next: { revalidate: 30 },
        });
        const data = await res.json();
        const projects = data?.data;
  return (
    <div>
      <AllProject projects={projects as TProject[]}/>
    </div>
  );
};

export default ProjectPage;
