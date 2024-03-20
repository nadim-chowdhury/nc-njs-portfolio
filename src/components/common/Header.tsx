import Link from "next/link";
import Logo from "./Logo";
import ModeToggle from "./ModeToggle";
import { navlinks } from "@/lib/navlinks";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b p-4">
      <Link href="/">
        <Logo
          width={64}
          height={64}
          className="w-11 h-11 object-contain transition-all duration-700 hover:rotate-180 cursor-pointer"
        />
      </Link>

      <nav className="flex items-center gap-4 text-lg">
        {navlinks.map((item) => (
          <Link key={item.id} href={item.path} className="nav-link">
            {item.name}
          </Link>
        ))}
      </nav>

      <ModeToggle />
    </header>
  );
}
