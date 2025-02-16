import MessageCard from "@/components/message/MessageCard";
type TMessage={
  name: string;
  subject: string;
  userEmail: string;
  message: string;
}
const AdminMessagePage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/message`, {
    next: { tags: ["message"] },
  });
  const data = await res.json();
  // console.log("Data: ", data);
  const messageData = data?.data;
  return (
    <div>
      <h3 className="text-3xl text-center my-5">ALL Message</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {messageData?.map((data:TMessage, index:number) => (
          <MessageCard key={index} messageData={data} />
        ))}
      </div>
    </div>
  );
};

export default AdminMessagePage;
