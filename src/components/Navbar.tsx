import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { FiTwitter } from 'react-icons/fi';
import Logo from './Logo';

const navigation = [
  { name: `Home`, href: `/` },
  { name: `About`, href: `/` },
  { name: `Events`, href: `/` },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="px-6 pt-6 lg:px-8 w-full z-10 fixed top-0">
      <div>
        <nav
          className="flex h-9 items-center justify-between"
          aria-label="Global"
        >
          <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
            <Link href="/">
              <Logo />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-900 hover:text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
            <Link
              href="https://ctt.ac/eRsE5"
              target="_blank"
              className="inline-block flex z-10 items-center rounded-lg px-6 py-1.5 text-md leading-6 text-gray-900"
            >
              Login
            </Link>
            <Link
              href="https://ctt.ac/eRsE5"
              target="_blank"
              className="inline-block flex z-10 items-center rounded-lg px-6 py-2 text-md leading-6 text-gray-100 shadow-sm ring-1 bg-gray-900 ring-gray-900/10 hover:ring-gray-900/20"
            >
              Sign up
            </Link>
          </div>
        </nav>
        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
            <div className="flex h-9 items-center justify-between">
              <Link href="#/">
                <Logo />
              </Link>
              <div className="flex">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="https://ctt.ac/eRsE5"
                    target="_blank"
                    className="inline-block flex z-10 items-center rounded-lg pb-6 text-md leading-6 text-gray-900"
                  >
                    Login
                  </Link>
                  <Link
                    href="https://ctt.ac/eRsE5"
                    target="_blank"
                    className="inline-block flex z-10 items-center rounded-lg px-6 py-4 text-md leading-6 text-gray-100 shadow-sm ring-1 bg-gray-900 ring-gray-900/10 hover:ring-gray-900/20"
                  >
                    Sign up
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
    </div>
  );
};

export default Navbar;
