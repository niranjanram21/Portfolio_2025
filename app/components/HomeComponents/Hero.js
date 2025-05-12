"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative h-[98vh] w-full">
      <Image src="/images/bg5.jpg" alt="Hero image" fill className="object-cover" />

      {/* Scrollable content with hidden scrollbar */}
      <div className="relative z-10 h-full overflow-y-auto bg-black/20 text-white p-6 hide-scrollbar">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Scrollable Section</h1>
          {[...Array(10)].map((_, i) => (
            <p key={i}>Some scrollable content line {i + 1}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
