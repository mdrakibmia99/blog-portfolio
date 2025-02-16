import AdminProject from "@/components/admin/project/AdminProject";
import { TProject } from "@/types/globalTypes";
import { TUserSession } from "@/types/session.user.type";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

const AdminProjectPage = async() => {
  const session = await getServerSession(authOptions);
    const res = await fetch(`${'process.env.NEXT_PUBLIC_BASE_URL'}/project`, {
      next: { tags: ["projects"] },
    });
    const data = await res.json();
    // console.log("Data: ", data);
    const projects = data?.data;
  return (
    <div>
      <AdminProject projects={projects as TProject[]} session={session as TUserSession}/>
    </div>
  );
};

export default AdminProjectPage;
