import Navbar from "@/components/navbar";
import Image from "next/image";
import HomePage from "./home/page";
import Partners from "@/components/partnerslogo";
import ContentHome from "./contenthome/page";

import Footer from "@/components/footer";

import { div } from "framer-motion/client";

export default function Home() {
  return (
    <div>
      <HomePage />
      <Partners />
      <ContentHome />
    </div>
  );
}
