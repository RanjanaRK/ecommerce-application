"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, ShoppingCart, User, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          <span className="text-primary">SanzzyShop</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6 font-medium">
          <li>
            <Link href="/products" className="hover:text-primary">
              Products
            </Link>
          </li>
          <li>
            <Link href="/categories" className="hover:text-primary">
              Categories
            </Link>
          </li>
          <li>
            <Link href="/offers" className="hover:text-primary">
              Offers
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-primary">
              Contact
            </Link>
          </li>
        </ul>

        {/* Search Bar */}
        <div className="hidden md:flex w-72">
          <Input type="text" placeholder="Search products..." />
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/cart">
            <Button variant="outline" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </Link>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/orders">Orders</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/wishlist">Wishlist</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-red-500">
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t bg-white p-4 space-y-4">
          <Input placeholder="Search products..." />

          <ul className="flex flex-col gap-3 text-lg">
            <li>
              <Link href="/products" className="hover:text-primary">
                Products
              </Link>
            </li>
            <li>
              <Link href="/categories" className="hover:text-primary">
                Categories
              </Link>
            </li>
            <li>
              <Link href="/offers" className="hover:text-primary">
                Offers
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-4 pt-2">
            <Link href="/cart">
              <Button variant="outline" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </Link>

            <Button variant="outline" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
