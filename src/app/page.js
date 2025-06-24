import Banner from "@/components/Banner";
import CTA from "@/components/CTA";
import Featured from "@/components/Featured";
import Forms from "@/components/Forms";
import RecentAdded from "@/components/RecentAdded";
import Reviews from "@/components/Reviews";

export default function HomePage() {
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
