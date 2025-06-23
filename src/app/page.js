import Banner from "@/components/Banner";
import CTA from "@/components/CTA";
import Featured from "@/components/Featured";
import Forms from "@/components/Forms";
import RecentAdded from "@/components/RecentAdded";
import Reviews from "@/components/Reviews";

export default function HomePage() {
  return (
    <section className="container mx-auto">
      <Banner />
      <Forms />
      <Featured />
      <RecentAdded />
      <Reviews />
      <CTA />
    </section>
  );
}
