"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Twitter, Facebook, Twitch, Instagram, Youtube, Rss } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  Games: [
    { name: "Fortnite", href: "#" },
    { name: "Fall Guys", href: "#" },
    { name: "Rocket League", href: "#" },
    { name: "Unreal Tournament", href: "#" },
    { name: "Infinity Blade", href: "#" },
    { name: "Shadow Complex", href: "#" },
    { name: "Robo Recall", href: "#" },
  ],
  Marketplaces: [
    { name: "Epic Games Store", href: "#" },
    { name: "Fab", href: "#" },
    { name: "Sketchfab", href: "#" },
    { name: "ArtStation", href: "#" },
    { name: "Store Refund Policy", href: "#" },
    { name: "Store EULA", href: "#" },
  ],
  Tools: [
    { name: "Unreal Engine", href: "#" },
    { name: "UEFN", href: "#" },
    { name: "MetaHuman", href: "#" },
    { name: "Twinmotion", href: "#" },
    { name: "Megascans", href: "#" },
    { name: "RealityScan", href: "#" },
    { name: "Rad Game Tools", href: "#" },
  ],
  "Online Services": [
    { name: "Epic Online Services", href: "#" },
    { name: "Kids Web Services", href: "#" },
    { name: "Services Agreement", href: "#" },
    { name: "Acceptable Use Policy", href: "#" },
    { name: "Trust Statement", href: "#" },
    { name: "Subprocessor List", href: "#" },
  ],
  Company: [
    { name: "About", href: "#" },
    { name: "Newsroom", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Students", href: "#" },
    { name: "UX Research", href: "#" },
  ],
  Resources: [
    { name: "Dev Community", href: "#" },
    { name: "MegaGrants", href: "#" },
    { name: "Support-A-Creator", href: "#" },
    { name: "Creator Agreement", href: "#" },
    { name: "Distribute on Epic Games", href: "#" },
    { name: "Unreal Engine Branding Guidelines", href: "#" },
    { name: "Fan Art Policy", href: "#" },
    { name: "Community Rules", href: "#" },
    { name: "EU Digital Services Act Inquiries", href: "#" },
    { name: "Epic Direct Support", href: "#" },
  ],
};

const socialLinks = [
  { icon: <Twitter className="h-5 w-5" />, href: "#" },
  { icon: <Facebook className="h-5 w-5" />, href: "#" },
  { icon: <Twitch className="h-5 w-5" />, href: "#" },
  { icon: <Instagram className="h-5 w-5" />, href: "#" },
  { icon: <Youtube className="h-5 w-5" />, href: "#" },
  { icon: <Rss className="h-5 w-5" />, href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 mb-10">
          <div className="w-full md:w-auto md:min-w-48">
            <Link href="/" className="flex items-center mb-6">
              <div className="w-40 h-10 relative">
                <Image
                  src="https://ext.same-assets.com/2555890890/174158608.svg"
                  alt="Unreal Engine"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <div className="flex space-x-3">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 flex-grow">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="font-semibold text-white mb-4">{category}</h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/60 hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator className="bg-zinc-800 my-8" />

        <div className="text-sm text-zinc-500">
          <p>© 2023, Epic Games, Inc. All rights reserved. Unreal and its logo are Epic's trademarks or registered trademarks in the US and elsewhere.</p>
          <div className="mt-4 flex flex-wrap gap-4">
            <Link href="#" className="text-zinc-500 hover:text-white">
              Terms of Service
            </Link>
            <Link href="#" className="text-zinc-500 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="text-zinc-500 hover:text-white">
              Store Refund Policy
            </Link>
            <Link href="#" className="text-zinc-500 hover:text-white">
              Account Security
            </Link>
            <Link href="#" className="text-zinc-500 hover:text-white">
              Cookies
            </Link>
          </div>
        </div>

        <div className="mt-8 text-right">
          <button
            className="text-zinc-500 hover:text-white text-sm flex items-center gap-1 ml-auto"
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          >
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
