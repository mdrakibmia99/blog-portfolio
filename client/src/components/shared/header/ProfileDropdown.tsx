import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ProfileDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="cursor-pointer">
          <AvatarImage
            src={"https://github.com/shadcn.png"}
            alt="profile image"
          />
          <AvatarFallback>Profile</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-5 w-56  mr-20">
        <DropdownMenuItem className="flex flex-col items-center"></DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={"/dashboard"} className="w-full">
            <Button
              variant={"outline"}
              className="w-full hover:text-primary-red"
            >
              Dashboard
            </Button>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Button
            variant={"outline"}
            className="w-full bg-primary-red text-white hover:bg-red-700 hover:text-white"
          >
            Log Out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
