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
    <>
      <Drawer direction="left">
        <DrawerTrigger
          className="hover:text-primary transition text-muted-foreground cursor-pointer"
          aria-label="Open menu"
        >
          <Menu size={20} />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <div className="flex flex-row justify-between items-center">
              <DrawerTitle>REVAULT</DrawerTitle>

              <DrawerClose className="cursor-pointer">{<X />}</DrawerClose>
            </div>
            <DrawerDescription>Select one of the categories </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <div className="flex justify-center">
              <CustomSwitch />
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
