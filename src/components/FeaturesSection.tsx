"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FeaturesSection() {
  return (
    <section className="dark-section py-16">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Unreal Engine features</h2>
        </div>

        {/* Power that can keep up section */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-32">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
              Power that can keep up with the wildest imaginations.
            </h3>
            <p className="text-white/80 mb-8 leading-relaxed">
              Define rule-breaking physics, create lifelike characters, or animate the movement of a single blade of grass—and render it all at the speed you can dream it. We originally designed Unreal Engine to give us the creative freedom we always wanted as developers. Today, our goal is to push the boundaries of innovation with every release so that only you, not your tools, get to decide the limits of what's possible.
            </p>
            <Link href="#" className="ue-button">
              See all features
            </Link>
          </div>
          <div className="relative order-1 md:order-2 h-[400px]">
            <Image
              src="https://ext.same-assets.com/2555890890/3304969262.webp"
              alt="Cyberpunk Street environment by Yehor Perepelytsia"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Ships fully loaded section */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div className="relative h-[400px]">
            <Image
              src="https://ext.same-assets.com/2555890890/2219750251.webp"
              alt="Hellblade 2 screenshot"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
              Ships fully loaded for everyone.
            </h3>
            <p className="text-white/80 mb-8 leading-relaxed">
              Develop games. Produce or animate films. Visualize spaces or products. Create next-generation interfaces. Or build immersive experiences we haven't even thought of yet. No matter what style, industry, screen size, or project you have in mind, Unreal Engine comes standard with everything you need to help you make it real.
            </p>
          </div>
        </div>

        {/* Uses grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            { title: "Games", image: "https://ext.same-assets.com/2555890890/2219750251.webp" },
            { title: "Indie games", image: "https://ext.same-assets.com/2555890890/3014039601.webp" },
            { title: "Mobile games", image: "https://ext.same-assets.com/2555890890/1489743609.webp" },
            { title: "Switching to Unreal Engine", image: "https://ext.same-assets.com/2555890890/3392106873.webp" },
            { title: "Unreal Editor for Fortnite", image: "https://ext.same-assets.com/2555890890/728669289.webp" },
            { title: "Film & TV", image: "https://ext.same-assets.com/2555890890/4246995071.webp" },
            { title: "Broadcast & live events", image: "https://ext.same-assets.com/2555890890/1340995073.webp" },
            { title: "Animation", image: "https://ext.same-assets.com/2555890890/2834310819.webp" },
          ].map((item, index) => (
            <Link href="#" key={index} className="group">
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <div>
                    <h4 className="text-white font-medium text-sm md:text-base">{item.title}</h4>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-6">
          <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
            Show more
          </Button>
        </div>
      </div>
    </section>
  );
}
