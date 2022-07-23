import Head from "next/head";
import Image from "next/image";
import { Grid1 } from "../components/grid/Grid1";
import { ParallaxGrid } from "../components/grid/ParallaxGrid";
import { Meta } from "../components/Meta";
import { Navbar } from "../components/Navbar";
import { SideNav } from "../components/SideNav";


export default function Home() {
  return (
    <>
      <Meta />
      <Navbar />
      <SideNav />
      <ParallaxGrid/>
    </>
  );
}
