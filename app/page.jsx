"use client";

import Contents from "@/widgets/contents/Contents";
import MainSwiper from "@/widgets/swiper/MainSwiper";
import "swiper/css";
import "swiper/css/navigation";

export default function Home() {
  return (
    <main>
      <MainSwiper />
      <Contents />
    </main>
  );
}
