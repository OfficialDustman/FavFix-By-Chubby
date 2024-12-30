// app/components/Navbar.tsx

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact-booking" },
  ];

  return (
    <nav className="bg-[#1F3C88] text-[#F8F9FA] px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">FavFix by Chubby</Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`${
                  pathname === item.href ? "text-[#FFD166]" : "hover:text-[#FFD166]"
                } font-medium`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
