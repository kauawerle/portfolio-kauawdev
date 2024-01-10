import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

import { navigationProps } from "@/interfaces/navigationProps";

import avatar from '@/images/avatar.svg';
import Image from "next/image";


export default function NavigationComponent({
  navigation,
}: {
  navigation: navigationProps[];
}) {
  return (
    <Disclosure as="nav" className="w-full max-w-none bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto w-full max-w-none lg:max-w-7xl px-6 lg:px-8">
            <div className="flex h-16 items-center justify-center">
              <div className="flex w-full justify-center items-center">
                <div className="flex-shrink-0">
                  <Image
                    className="h-8 w-auto"
                    src={avatar}
                    alt="Your Company"
                  />
                </div>
                <div className="flex sm:ml-6 ">
                  {navigation.map((nav) => (
                    <div
                      key={nav.name}
                      className="flex invisible lg:visible flex-row"
                    >
                      <a
                        href={nav.href}
                        className={clsx(
                          nav.isActivate ? "bg-gray-900" : "bg-gray-800",
                          "rounded-md mx-2 text-lg bg-gray-800 px-3 py-2 font-medium text-white"
                        )}
                      >
                        {nav.name}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              <div className="-mr-2 flex sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              {navigation.map((nav) => (
                <Disclosure.Button
                  as="a"
                  key={nav.name}
                  href={nav.href}
                  className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
                >
                  {nav.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className="border-t border-gray-700 pb-3 pt-4">
              <div className="flex items-center text-left px-5">
                <div className="ml-3">
                  <div className="text-base font-medium text-white">
                    Kauã Werle
                  </div>
                  <div className="text-sm font-medium text-gray-400">
                    kauawerle@hotmail.com
                  </div>
                </div>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
