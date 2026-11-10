import { Atelier } from "@/components/home/Atelier";
import { Contact } from "@/components/home/Contact";
import { Facts } from "@/components/home/Facts";
import { Faq } from "@/components/home/Faq";
import { Hero } from "@/components/home/Hero";
import { Journey } from "@/components/home/Journey";
import { Proof } from "@/components/home/Proof";
import { Services } from "@/components/home/Services";
import { JsonLd } from "@/components/JsonLd";

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Hero />
      <Facts />
      <Proof />
      <Journey />
      <Services />
      <Atelier />
      <Faq />
      <Contact />
    </>
  );
}
