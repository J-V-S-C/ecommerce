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
      <header className="fixed top-0 w-full bg-card text-card-foreground shadow-md z-50">
        <div className="flex flex-wrap items-center justify-between px-4 py-3 gap-4">
          <div className="flex items-center gap-3 min-w-[120px]">
            <CustomDrawer />
            <Link
              href="/"
              className="text-xl md:text-2xl font-bold text-foreground tracking-tight"
            >
              REVAULT
            </Link>
          </div>

          <div className="flex flex-col items-center flex-1 w-full md:w-auto gap-2">
            <div className="w-full flex justify-center">
              <input
                type="text"
                placeholder="Search..."
                aria-label="Search products"
                className="max-w-md md:w-full px-4 py-2 rounded-md bg-input text-foreground placeholder-muted-foreground border border-border focus:outline-none focus:ring-2 focus:ring-ring text-sm sm:text-base"
              />
            </div>

            <div className="hidden md:flex  flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm md:text-base font-medium text-muted-foreground">
              <Link
                href="/best-sellers"
                className="hover:text-primary transition"
              >
                Best Sellers
              </Link>
              <span>|</span>
              <Link href="/top-rated" className="hover:text-primary transition">
                Top Rated
              </Link>
              <span>|</span>
              <Link href="/offers" className="hover:text-primary transition">
                Offers
              </Link>
              <span>|</span>
              <Link href="/for-you" className="hover:text-primary transition">
                For You
              </Link>
            </div>
            <div className="md:hidden relative flex justify-center w-full">
              <Collapsible>
                <CollapsibleTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition cursor-pointer">
                  Categories
                  <ChevronDown size={16} />
                </CollapsibleTrigger>
                <CollapsibleContent className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50 w-[90vw] max-w-sm">
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

          <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm md:text-base text-muted-foreground whitespace-nowrap">
            <Link
              href="/sell"
              className="hover:text-primary transition cursor-pointer"
              aria-label="Sell your item"
            >
              <span className="hidden sm:inline">Sell Here</span>
              <span className="inline sm:hidden">Sell</span>
            </Link>
            <Link
              href="/revault-ai"
              className="hover:text-primary transition cursor-pointer"
              aria-label="Revault AI"
            >
              Revault AI
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
