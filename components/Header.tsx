import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const session = {};
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
        {session ? (
          <>
            UserImage
            <Link href="/create-project">Share Your Work</Link>
          </>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
};

export default Header;
