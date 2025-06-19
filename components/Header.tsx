"use client";
import Link from "next/link";
import { useState,  useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { ModeToggle } from "./ModeToggler";
import Nav from "./Nav";

import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="py-8 xl:py-12">
      <div className="container px-4 mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Mxo<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Contact Me</Button>
          </Link>
          <ModeToggle />
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
    

<AnimatePresence>
  {isOpen && (
    <motion.div
      ref={menuRef}
      className="md:hidden shadow-md px-4 py-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
    >
      <div className="flex flex-col gap-4">
        <Nav />
        <Link href="/contact" onClick={() => setIsOpen(false)}>
          <Button className="w-full">Contact Me</Button>
        </Link>
        <div className="self-start">
          <ModeToggle />
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence></header>
  );
};

export default Header;