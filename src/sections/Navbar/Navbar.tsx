import Link from "next/link";
import Logo from "@/components/logo";
function Navbar() {
  return (
    <header className="container flex items-center justify-between h-16">
      <Link href="/">
        <Logo />
      </Link>
    </header>
  );
}

export default Navbar;
