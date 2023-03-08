import { Inter } from '@next/font/google';

// Note: The subsets need to use single quotes because the font loader values must be explicitly written literal.
// eslint-disable-next-line @typescript-eslint/quotes
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="container mx-auto text-center px-20 w-6/12">
        <h3 className="text-3xl font-bold mb-4">Welcome to</h3>
        <h1 className="text-6xl font-bold">AnalyticsRadar</h1>
        <p className="text-lg mt-6">
          AnalyticsRadar is an Twitter Analytics tool to help content creators
          to monitor and analyze their Twitter account&apos;s performance, so
          that they can optimize their content strategy and increase engagement
          with their followers.
        </p>
      </div>
    </div>
  );
}
