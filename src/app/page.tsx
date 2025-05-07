import Hero from '@/components/Hero';
import Awards from "@/components/Awards";
import Products from '@/components/Products';
import Steps from '@/components/Steps';
import Services from '@/components/Services';
import Options from '@/components/Options';
import Choose from "@/components/Choose";
import Reviews from "@/components/Reviews";
import Bars from "@/components/Bars";
import Brands from '@/components/Brands';
import FAQ from '@/components/FAQ';

export default function Home() {
  return (
    <main>
      <Hero />
      <Awards />
      <Products />
      <Steps />
      <Services />
      <Options />
      <Choose />
      <Reviews />
      <Bars />
      <Brands />
      <FAQ />
    </main>
  );
}
