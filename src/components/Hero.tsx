"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative w-full h-[95vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://ext.same-assets.com/2555890890/3554471391.webp"
          alt="Unreal Engine Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="block">We make the engine.</span>
          <span className="block">You make it Unreal.</span>
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">
          Unreal Engine is built by developers, for developers, with fair terms for all.
          Because everyone with an idea deserves to use the world's most open, advanced
          real-time creation tool to bring it to life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#" className="ue-button">
            Get Unreal
          </Link>
          <Link href="#" className="ue-button-outline">
            Learn about licensing
          </Link>
        </div>
      </div>
    </section>
  );
}
