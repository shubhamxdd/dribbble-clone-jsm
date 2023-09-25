"use client";

import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const MobileNav = () => {
  const [show, setShow] = useState(false);
  const onClick = () => setShow(!show);
  return (
    <div>
      {/* mobile nav */}
      <div onClick={onClick} className="max-xl:flex hidden">
        {show ? (
          <Image
            src="/nav_cross.svg"
            alt="hamburger cross icon"
            width={30}
            height={30}
          />
        ) : (
          <Image
            src="/hamburger.svg"
            alt="hamburger icon"
            width={30}
            height={30}
          />
        )}
        <div>
          {show && (
            <div className="bg-slate-100 px-3 pr-8 py-2 rounded-xl absolute right-0 mt-[55px] mr-7">
              <ul>
                {NavLinks.map((link) => {
                  return (
                    <li className="mr-1 mb-1" key={link.key}>
                      <Link
                        className="font-montserrat leading-normal text-lg text-slate-600 hover:text-slate-900 active:text-slate-900"
                        href={link.href}
                        key={link.key}
                      >
                        {link.text}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
