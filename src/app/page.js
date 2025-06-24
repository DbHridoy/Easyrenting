"use client";
import Banner from "@/components/Banner";
import CTA from "@/components/CTA";
import Featured from "@/components/Featured";
import Forms from "@/components/Forms";
import LoadingSpinner from "@/components/LoadingSpinner";
import RecentAdded from "@/components/RecentAdded";
import Reviews from "@/components/Reviews";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 700); // delay render by 700ms
    return () => clearTimeout(timer);
  }, []);

  if (!showContent) {
    return <LoadingSpinner />; // show spinner during delay
  }
  return (
    <>
      <Banner />
      <div className="overflow-x-hidden px-4 sm:px-6 lg:px-8">
        <section className="max-w-7xl mx-auto">
          <Forms />
          <Featured />
          <RecentAdded />
          <Reviews />
        </section>
      </div>
      <CTA />
    </>
  );
}
