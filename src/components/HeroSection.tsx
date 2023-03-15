import Image from 'next/image';
import React from 'react';
import heroImg from '@/public/dashboard.jpg';
import heroShape from '@/public/sectionbg.png';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div>
      <div className="bgImage sm:h-screen h-auto overflow-hidden w-full">
        <div className="sm:pt-40 pt-20">
          <div className="container mx-auto pt-5 text-center w-11/12 sm:w-6/12">
            <h1 className="sm:text-5xl text-3xl capitalize leading-snug">
              Monitor and analyze your Twitter account&apos;s performance
            </h1>
            <p className="text-lg sm:my-6 my-4">
              As a social media manager, You want to use a Twitter analytics web
              app to monitor and analyze your Twitter account&apos;s
              performance, so that You can optimize your content strategy and
              increase engagement with my followers.
            </p>
            <Link
              href="https://ctt.ac/eRsE5"
              target="_blank"
              className="inline-block mt-4 items-center rounded-lg sm:px-10 sm:py-4 py-3 px-10 text-md leading-6 text-gray-100 shadow-md ring-1 bg-gray-900 ring-gray-900/10 hover:ring-gray-900/20"
            >
              Get Started
            </Link>
          </div>
          <div className="container mx-auto text-center sm:py-10 py-4 sm:w-8/12 w-10/12">
            <Image
              src={heroImg}
              className="w-full z-10"
              alt="dashboardPreview"
              width={1000}
              height={900}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
