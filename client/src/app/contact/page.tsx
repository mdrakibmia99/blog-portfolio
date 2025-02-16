import Contact from "@/components/contact/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact | Rakib",
    description: "This is the contact page of Rakib",
  };
const ContactPage = () => {
    return (
        <div>
            <Contact/>
        </div>
    );
};

export default ContactPage;