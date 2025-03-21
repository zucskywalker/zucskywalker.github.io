"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Search, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { name: "Overview", href: "#", hasDropdown: true },
  { name: "Uses", href: "#", hasDropdown: true },
  { name: "More", href: "#", hasDropdown: true },
];

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-2 bg-black/90 backdrop-blur-sm border-b border-white/10">
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center">
          <div className="w-8 h-8 relative">
            <Image
              src="https://ext.same-assets.com/2555890890/3564037596.svg"
              alt="Epic Games"
              fill
              className="object-contain"
            />
          </div>
        </Link>

        <Link href="/" className="flex items-center">
          <div className="w-40 h-10 relative">
            <Image
              src="https://ext.same-assets.com/2555890890/174158608.svg"
              alt="Unreal Engine"
              fill
              className="object-contain"
            />
          </div>
        </Link>

        <nav className="hidden lg:flex items-center ml-6">
          <ul className="flex space-x-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.hasDropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="text-white/80 hover:text-white flex items-center gap-1"
                      >
                        {link.name}
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-zinc-900 border-zinc-800">
                      <DropdownMenuItem className="text-white/80 hover:text-white hover:bg-zinc-800">
                        Submenu Item 1
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-white/80 hover:text-white hover:bg-zinc-800">
                        Submenu Item 2
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white px-3 py-2"
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-2">
        <div className="hidden sm:flex relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
          <input
            type="text"
            placeholder="Search"
            className="bg-zinc-800/50 border border-white/10 rounded-full pl-10 pr-4 py-1.5 text-sm text-white placeholder:text-white/50 w-40 lg:w-56 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <Button variant="ghost" className="text-white/80 p-2">
          <Globe className="h-5 w-5" />
        </Button>

        <Button variant="ghost" className="text-white/80 hover:text-white">
          Sign in
        </Button>

        <Button className="bg-blue-600 text-white hover:bg-blue-500">
          Download
        </Button>
      </div>
    </header>
  );
}
