import ProjectDetails from '@/components/project/ProjectDetails';
import { IParamsProps, TProject } from '@/types/globalTypes';
import React from 'react';

const DynamicProjectDetailsPage = async({params}:IParamsProps) => {
    const { id } = await params;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/project/${id}`, {
        next: { tags: ["projects"] },
      });
      const data = await res.json();
      const project = data?.data;
    return (
        <div>
            <ProjectDetails project={project as TProject}/>
        </div>
    );
};

export default DynamicProjectDetailsPage;