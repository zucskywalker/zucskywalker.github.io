"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function InstallationGuide() {
  return (
    <section className="bg-zinc-950 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">
            How to install Unreal Engine
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
              <div className="text-zinc-400 mb-3 text-sm">STEP 1</div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Download the launcher
              </h3>
              <p className="text-white/70 mb-6 text-sm">
                Before you can install and run Unreal Editor, you'll need to download and install the Epic Games launcher.
              </p>
              <Link
                href="#"
                className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1 text-sm font-medium"
              >
                Download Launcher
              </Link>
            </div>

            <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
              <div className="text-zinc-400 mb-3 text-sm">STEP 2</div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Install Epic Games launcher
              </h3>
              <p className="text-white/70 mb-6 text-sm">
                Once downloaded and installed, open the launcher and create or log in to your Epic Games account.
              </p>
              <Link
                href="#"
                className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1 text-sm font-medium"
              >
                Get support
              </Link>
            </div>

            <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
              <div className="text-zinc-400 mb-3 text-sm">STEP 3</div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Install Unreal Engine
              </h3>
              <p className="text-white/70 mb-6 text-sm">
                Once logged in, navigate to the Unreal Engine tab and click the Install button to download the most recent version.
              </p>
              <Link
                href="#"
                className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1 text-sm font-medium"
              >
                Watch how to install <ArrowRight className="h-3 w-3 ml-1" />
              </Link>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800 mb-10">
            <h3 className="text-lg font-semibold text-white mb-4">
              Looking for Unreal Editor for Fortnite?
            </h3>
            <p className="text-white/70 mb-6">
              Get up and running in Unreal Editor for Fortnite from the Epic Games launcher.
            </p>
            <Link
              href="#"
              className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1 text-sm font-medium"
            >
              Download UEFN
            </Link>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">
            How to get started in Unreal Engine
          </h2>
          <p className="text-white/80 mb-10">
            New to real-time 3D? Making the switch from another engine? Wherever you're coming from, we've got onboarding, tutorials, samples, documentation, and more to help you get started.
          </p>

          <div className="mb-10">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Tutorials</h3>
              <Link
                href="#"
                className="text-white/70 hover:text-white flex items-center gap-1 text-sm"
              >
                Go to library <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Your first Hour in Unreal Engine 5.2",
                  image: "https://ext.same-assets.com/2555890890/4004625375.webp",
                  author: "Epic Online Learning",
                  time: "2yr ago",
                  description: "We'll look at the launcher, editor creating a basic level including lighting and level layout.",
                },
                {
                  title: "Your First Game in Unreal Engine 5",
                  image: "https://ext.same-assets.com/2555890890/2883160148.webp",
                  author: "Andi",
                  time: "3yr ago",
                  description: "Practical in-editor demo showcasing UE5's rapid game creation from scratch.",
                },
                {
                  title: "BeginPlay",
                  image: "https://ext.same-assets.com/2555890890/4275796011.webp",
                  author: "Epic Online Learning",
                  time: "3yr ago",
                  description: "A developer focused overview of Unreal Engine's features and tools.",
                },
              ].map((item, index) => (
                <Link href="#" key={index} className="group">
                  <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 h-full hover:border-zinc-700 transition-all duration-300">
                    <div className="relative aspect-video">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <h4 className="text-white font-medium text-lg mb-2 group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </h4>
                      <div className="text-zinc-500 text-sm mb-3">
                        {item.author} · {item.time}
                      </div>
                      <p className="text-white/70 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
