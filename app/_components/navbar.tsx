"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between border-b border-solid px-8 py-4">
      <div className="flex items-center gap-10">
        <Image src="/logo.svg" width={173} height={39} alt="Finance AI" />
        <Link
          href="/"
          className={`hover:text-primary ${pathname === "/" ? "font-bold text-primary" : ""}`}
        >
          Dashboard
        </Link>
        <Link
          href="/transactions"
          className={
            pathname === "/transactions" ? "font-bold text-primary" : ""
          }
        >
          Transactions
        </Link>
        <Link
          href="/subscriptions"
          className={`hover:text-primary ${pathname === "/subscriptions" ? "font-bold text-primary" : ""}`}
        >
          Subscriptions
        </Link>
      </div>

      <UserButton showName />
    </nav>
  );
};

export default NavBar;
