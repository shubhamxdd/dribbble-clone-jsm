import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import AuthProvider from "./AuthProvider";
import MobileNav from "./MobileNav";
import { getCurrentUser } from "@/lib/session";

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
            {/* user image aane ke baad make image ka nav  */}
            {session.user.image && (
              <Image
                src={session.user.image}
                alt={`${session.user.name}'s image`}
                width={40}
                height={40}
                className="rounded-full"
              />
            )}
            <div className="max-xl:flex hidden">
              <Link href="/create-project">Share Your Work</Link>
            </div>
          </>
        ) : (
          <AuthProvider />
        )}
        {/* mobile nav */}
        <MobileNav />
      </div>
    </nav>
  );
};

export default Header;
