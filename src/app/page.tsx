import Navbar from "@/components/Navbar";
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Steps from '@/components/Steps';
import Services from '@/components/Services';
import Options from '@/components/Options';
import Brands from '@/components/Brands';
import Choose from "@/components/Choose";
import Bars from "@/components/Bars";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Products />
      <Steps />
      <Services />
      <Options />
      <Choose />
      <Bars />
      <Brands />
    </main>
  );
}
