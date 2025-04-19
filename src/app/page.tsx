import NewArrival from "@/components/NewArrival";

import Hero from "@/components/Hero";
import Header from "@/components/shared/Header";
import Category from "@/components/Category";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <>
      {/* <Header/> */}
      <Hero/>
      <Category/>
      <NewArrival/>
      {/* <Footer/> */}
    </>
  );
}
