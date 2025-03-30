'use client';

import Link from 'next/link';
import { CustomDrawer } from '../shared/CustomDrawer';
import DarkModeProvider from '../shared/DarkModeProvider';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';

export default function Header() {
  return (
    <>
      <DarkModeProvider />
      <header className="fixed top-0 w-full bg-card text-card-foreground shadow-md z-50 h-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 px-4 py-3">
          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
            <CustomDrawer />
            <Link
              href="/"
              className="text-xl md:text-2xl font-bold text-foreground tracking-tight"
            >
              REVAULT
            </Link>
            <div className="flex md:hidden ml-auto">
              <Collapsible>
                <CollapsibleTrigger className="group flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition cursor-pointer">
                  Categories
                  <ChevronDown
                    size={16}
                    className="transition-transform duration-200 group-data-[state=open]:rotate-180"
                  />
                </CollapsibleTrigger>

                <CollapsibleContent className="absolute top-full left-0 mt-[-0.5em] z-50 w-[90vw] max-w-sm overflow-hidden animate-in fade-in slide-in-from-top duration-200 ease-out">
                  <div className="px-4 py-3 bg-background rounded-md border border-border shadow-md flex flex-wrap justify-center gap-2 text-xs font-medium text-muted-foreground">
                    <Link
                      href="/best-sellers"
                      className="hover:text-primary transition"
                    >
                      Best Sellers
                    </Link>
                    <span>|</span>
                    <Link
                      href="/top-rated"
                      className="hover:text-primary transition"
                    >
                      Top Rated
                    </Link>
                    <span>|</span>
                    <Link
                      href="/offers"
                      className="hover:text-primary transition"
                    >
                      Offers
                    </Link>
                    <span>|</span>
                    <Link
                      href="/for-you"
                      className="hover:text-primary transition"
                    >
                      For You
                    </Link>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>

          <div className="w-full md:max-w-md flex justify-center">
            <input
              type="text"
              placeholder="Search..."
              aria-label="Search products"
              className="w-full px-4 py-2 rounded-md bg-input text-foreground placeholder-muted-foreground border border-border focus:outline-none focus:ring-2 focus:ring-ring text-sm sm:text-base"
            />
          </div>

          <div className="hidden md:flex justify-end items-center gap-3 text-sm whitespace-nowrap w-full md:w-auto">
            <Collapsible>
              <CollapsibleTrigger className="group flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition cursor-pointer">
                Categories
                <ChevronDown
                  size={16}
                  className="transition-transform duration-200 group-data-[state=open]:rotate-180"
                />
              </CollapsibleTrigger>

              <CollapsibleContent className="absolute top-full right-4 mt-[-1em] z-50 w-[90vw] max-w-sm overflow-hidden animate-in fade-in slide-in-from-top duration-200 ease-out">
                <div className="px-4 py-3 bg-background rounded-md border border-border shadow-md flex flex-wrap justify-center gap-2 text-xs font-medium text-muted-foreground">
                  <Link
                    href="/best-sellers"
                    className="hover:text-primary transition"
                  >
                    Best Sellers
                  </Link>
                  <span>|</span>
                  <Link
                    href="/top-rated"
                    className="hover:text-primary transition"
                  >
                    Top Rated
                  </Link>
                  <span>|</span>
                  <Link
                    href="/offers"
                    className="hover:text-primary transition"
                  >
                    Offers
                  </Link>
                  <span>|</span>
                  <Link
                    href="/for-you"
                    className="hover:text-primary transition"
                  >
                    For You
                  </Link>
                </div>
              </CollapsibleContent>
            </Collapsible>

            <Link
              href="/register-product"
              className="hover:text-primary transition"
              aria-label="Sell your item"
            >
              <span className="group flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition cursor-pointer">
                Sell Here
              </span>
            </Link>

            <Link
              href="/revault-ai"
              className="hover:text-primary transition"
              aria-label="Revault AI"
            >
              <span className="group flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition cursor-pointer">
                Revault AI
              </span>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
