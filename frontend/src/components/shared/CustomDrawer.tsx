'use client';

import Link from 'next/link';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import CustomSwitch from '@/components/shared/CustomSwitch';

export const CustomDrawer = () => {
  return (
    <Drawer direction="left">
      <DrawerTrigger
        className="hover:text-primary transition text-muted-foreground cursor-pointer"
        aria-label="Open menu"
      >
        <Menu size={24} />
      </DrawerTrigger>

      <DrawerContent className="bg-sidebar border-r w-64 shadow-lg">
        <DrawerHeader>
          <div className="flex justify-between items-center">
            <DrawerTitle className="text-lg font-bold tracking-wide">
              REVAULT
            </DrawerTitle>
            <DrawerClose className="hover:text-destructive cursor-pointer transition">
              <X size={20} />
            </DrawerClose>
          </div>
          <DrawerDescription className="text-xs text-muted-foreground mt-1">
            Explore as opções abaixo
          </DrawerDescription>
        </DrawerHeader>
        <hr />
        <br />
        <div className="flex flex-col gap-1 px-4 py-2 md:hidden">
          <Link
            href="/register-product"
            className="rounded-md  text-foreground hover:bg-border px-3 py-2 text-sm font-medium transition-colors"
          >
            🛒 Sell Here
          </Link>
          <Link
            href="/revault-ai"
            className="rounded-md text-foreground hover:bg-border px-3 py-2 text-sm font-medium transition-colors"
          >
            🤖 Revault AI
          </Link>
        </div>

        <DrawerFooter className="mt-auto mb-4">
          <div className="flex justify-center">
            <CustomSwitch />
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
