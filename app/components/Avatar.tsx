import { User } from "@prisma/client";
import Image from "next/image";
import React from "react";
import useActiveList from "../hooks/useActiveList";

interface AvatarProps {
  user?: User;
}
const Avatar: React.FC<AvatarProps> = ({ user }) => {
  const { members } = useActiveList();
  const isActive = members.indexOf(user?.email!) !== -1;

  return (
    <div className="relative">
      <div
        className="
         relative
         inline-block
         rounded-full
         overflow-hidden
         h-9
         w-9
         md:h-11
         md:w-11
        "
      >
        <Image
          alt="Avatar"
          src={user?.image || "/images/placeholder.jpg"}
          fill
        />
      </div>
      {isActive && (
        <span
          className="
        absolute
        top-0
        right-0
        w-2
        h-2
        bg-green-500
        block
        ring-white
        ring-2
        rounded-full
        md:h-3
        md:w-3
       "
        ></span>
      )}
    </div>
  );
};

export default Avatar;
