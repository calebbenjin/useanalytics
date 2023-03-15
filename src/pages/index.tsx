import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import { Inter } from '@next/font/google';

// Note: The subsets need to use single quotes because the font loader values must be explicitly written literal.
// eslint-disable-next-line @typescript-eslint/quotes
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
    </>
  );
}
