"use client"
import MouseCircle from "./components/MouseCircle";
import Navbar from "./components/Navbar";
import HomePage from "./homepage/HomePage";


export default function Home() {
  return (
    <>
     <main>
      <Navbar/>
      <MouseCircle/>
      <HomePage/>
    </main>
    </>
  );
}
