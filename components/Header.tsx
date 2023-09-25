import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import AuthProvider from "./AuthProvider";
import MobileNav from "./MobileNav";
import { getCurrentUser } from "@/lib/session";
import ProfileMenu from "./ProfileMenu";

const Header = async () => {
  const session = await getCurrentUser();
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={115} height={43} />
        </Link>
        <ul className="xl:flex hidden text-sm gap-7 ">
          {NavLinks.map((link) => {
            return (
              <li key={link.key}>
                <Link href={link.href}>{link.text}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flexCenter gap-4">
        {session?.user ? (
          <>
            <ProfileMenu session={session} />
            <div className="max-xl:flex hidden">
              <Link href="/create-project">Share Your Work</Link>
            </div>
          </>
        ) : (
          <AuthProvider />
        )}
        {/* mobile nav */}
        {/* TODO */}
        <MobileNav session={session} />
      </div>
    </nav>
  );
};

export default Header;
