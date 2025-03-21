"use client";
import Image from "next/image";

import { Input } from "./ui/input";
import { ChevronDown, SearchIcon } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { GenreList } from "./GenreList";

export const Header = () => {
  const [search, setSearch] = useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <div className="px-6 py-4">
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image src={"/logo.png"} alt="logo" width={92} height={20} />
        </Link>

        <div className="flex items-center gap-2">
          <Popover>
            <PopoverTrigger className="flex items-center gap-1" asChild>
              <Button variant="outline">
                <ChevronDown size={16} />
                <span>Genres</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <GenreList />
            </PopoverContent>
          </Popover>

          <div className="flex items-center gap-1 border border-gray-800 bg-input/30 rounded-md  px-2">
            <SearchIcon size={16} />
            <Input
              placeholder="Search"
              onChange={onChange}
              className="border-0 !bg-transparent p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
