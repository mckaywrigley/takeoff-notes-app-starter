"use client";

import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { List, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <List className="h-6 w-6" />
          <div className="text-xl font-bold">Notes App</div>
        </div>

        <nav className="hidden md:flex space-x-4">
          <Link
            href="/"
            className="hover:underline"
          >
            Home
          </Link>

          <SignedIn>
            <Link
              href="/notes"
              className="hover:underline"
            >
              Notes
            </Link>
          </SignedIn>
        </nav>

        <div className="flex items-center space-x-4">
          <SignedOut>
            <SignInButton />
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-primary-foreground text-primary p-4">
          <div className="space-y-2">
            <div>
              <Link
                href="/"
                className="block hover:underline"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </div>

            <SignedIn>
              <div>
                <Link
                  href="/notes"
                  className="block hover:underline"
                  onClick={toggleMenu}
                >
                  Notes
                </Link>
              </div>
            </SignedIn>
          </div>
        </nav>
      )}
    </header>
  );
}
