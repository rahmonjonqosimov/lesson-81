import Link from "next/link";
import React from "react";
import logo from "@/assets/images/logo.svg";
import Image from "next/image";

const Navbar = () => {
  const link = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 3,
      title: "About Us",
      url: "/about",
    },
    {
      id: 4,
      title: "Register",
      url: "/account",
    },
  ];
  const navItems = link?.map((item) => (
    <li key={item.id}>
      <Link href={item.url}>{item.title}</Link>
    </li>
  ));
  return (
    <section className="header">
      <div className="container">
        <div className="navbar">
          <Link href={"/"}>
            <Image alt="Logo" src={logo} width={140} height={28} />
          </Link>
          <ul>
            {navItems}
            <li>
              <button>Login</button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
