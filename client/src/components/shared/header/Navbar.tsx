"use client";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Link from "next/link";

import { ProfileDropdown } from "./ProfileDropdown";
import { ModeToggle } from "@/components/ModeToggle";

const menuList = [
  { id: 1, name: "HOME", link: "/" },
  { id: 2, name: "PROJECTS", link: "/projects" },
  { id: 3, name: "BLOGS", link: "/blog" },
  { id: 5, name: "CONTACT", link: "/contact" },
];

const Navbar = () => {
  const isUser = true;

  return (
    <section className="py-4 bg-black sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-0">
        {/* Left Side - Logo */}
        <div className="flex items-center">
          <p className="text-white">Rakib</p>
        </div>
        <div className="flex gap-3 items-center">
        {/* Middle - Navigation Links */}
        <nav className="hidden lg:flex items-end gap-6">
          <ul className="flex gap-6 text-white font-bold">
            {menuList.map((item) => (
              <li className="relative group" key={item.id}>
                <Link href={item.link}>
                  <span
                    className={`cursor-pointer hover:text-red-500 transition-all duration-300 ${
                      item.link === location.pathname ? "text-red-500" : ""
                    }`}
                  >
                    {item.name}
                  </span>
                </Link>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Side - Cart & Login/Profile */}
        <div className="hidden lg:flex items-center gap-5">
          
          {/* Profile/Login Button */}
          {isUser ? (
            <ProfileDropdown />
          ) : (
            <>
              <Link href="/login">
                <Button
                  variant="outline"
                  className="text-primary-red font-semibold text-lg hover:shadow-md h-10"
                >
                  Log in
                </Button>
              </Link>
              <ModeToggle />
            </>
          )}
          <ModeToggle/>
        </div>
        </div>

        {/* Mobile Navbar - Drawer */}
        <div className=" lg:hidden flex gap-3">
          <Sheet>
            <div className="flex  gap-3 items-center">
              {isUser ? (<>
                <ProfileDropdown />
                <ModeToggle/>
              </>
              ) : (
                <>
                  <Link href="/login">
                    <Button
                      variant="outline"
                      className="text-primary-red font-semibold"
                    >
                      Log in
                    </Button>
                  </Link>
                  <ModeToggle />
                </>
              )}
            </div>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto">
              <SheetHeader>
                <SheetTitle>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-semibold">ROYAL KNIGHT</span>
                  </div>
                </SheetTitle>
              </SheetHeader>

              {/* Mobile Menu List */}
              <div className="mb-6 mt-6 flex flex-col gap-4">
                <ul className="flex flex-col font-semibold gap-6">
                  {menuList.map((item) => (
                    <li className="relative group" key={item?.id}>
                      <Link href={item.link}>
                        <span
                          className={`cursor-pointer hover:text-primary-red transition-all duration-300 ${
                            item.link === location.pathname
                              ? "text-primary-red"
                              : ""
                          }`}
                        >
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
