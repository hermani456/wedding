import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/app/components/ui/sheet";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";

export default function Component() {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 bg-uno">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="grid gap-2 py-6">
            <SheetClose asChild>
              <Link
                href="#home"
                className="flex w-full items-center py-2 text-lg font-semibold"
                prefetch={false}
              >
                Home
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href="#rsvp"
                className="flex w-full items-center py-2 text-lg font-semibold"
                prefetch={false}
              >
                RSVP
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href="#gallery"
                className="flex w-full items-center py-2 text-lg font-semibold"
                prefetch={false}
              >
                Gallery
              </Link>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
      {/* <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
        <MountainIcon className="h-6 w-6" />
        <span className="sr-only">Acme Inc</span>
      </Link> */}
      <nav className="mx-auto hidden lg:flex gap-6">
        <Link
          href="#home"
          className="text-white flex justify-center items-center hover:text-dos text-xl transition-colors"
          prefetch={false}
        >
          Home
        </Link>
        <Link
          href="#rsvp"
          className="text-white flex justify-center items-center hover:text-dos text-xl transition-colors"
          prefetch={false}
        >
          RSVP
        </Link>
        {/* <div className="flex-grow w-96"></div> */}
        <Link
          href="#gallery"
          className="text-white flex justify-center items-center hover:text-dos text-xl transition-colors"
          prefetch={false}
        >
          Gallery
        </Link>
      </nav>
    </header>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
