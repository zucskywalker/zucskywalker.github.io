"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "Unreal Engine 5.5 is now available",
    description: "Find out what's new and download the update today.",
    image: "https://ext.same-assets.com/2555890890/4278231376.webp",
    tag: "News",
    link: "#",
  },
  {
    id: 2,
    title: "Fab, Epic's new unified content marketplace, launches today!",
    description: "Today, Epic launches Fab, a one-stop destination where you can discover, buy, sell, and share digital assets.",
    image: "https://ext.same-assets.com/2555890890/4220409532.webp",
    tag: "News",
    link: "#",
  },
  {
    id: 3,
    title: "Catch up on the big news from Unreal Fest Seattle 2024",
    description: "Dive into Epic Games announcements from Unreal Fest Seattle 2024.",
    image: "https://ext.same-assets.com/2555890890/793827874.webp",
    tag: "News",
    link: "#",
  },
];

export function NewsSection() {
  return (
    <section className="dark-section py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-bold text-white">Unreal Engine news</h2>
          <Link
            href="#"
            className="text-white/70 hover:text-white flex items-center gap-1 text-sm"
          >
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <Link href={item.link} key={item.id} className="group">
              <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 transition-all duration-300 hover:border-zinc-700 h-full flex flex-col">
                <div className="relative aspect-video">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-3">
                    <span className="text-blue-400 text-sm">{item.tag}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/70 mb-5 flex-grow">
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
