import { Grid, Link, Navbar } from "@nextui-org/react";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useMediaQuery } from "@react-hook/media-query";

export const Nav = () => {
  const isXlScreen = useMediaQuery("(min-width: 1433px)");
  const isBeyondXl = useMediaQuery("(max-width: 1435px)");

  function ActiveLink({ href, children }) {
    const router = useRouter();
    const isActive = router.pathname.startsWith(href);

    return (
      <Navbar.Link
        className={isActive ? "nav-link active-link" : "nav-link"}
        href={href}
      >
        {children}
      </Navbar.Link>
    );
  }
  const collapseItems = [
    {
      href: "/",
      title: "Aceeuil",
    },
    {
      href: "/serives",
      title: "Services",
    },
    {
      href: "/carriere",
      title: "Carrière",
    },
    {
      href: "/contact-us",
      title: "Contactez-Nous",
    },
  ];

  return (
    <Navbar
      maxWidth="xl"
      css={{
        "& .nextui-navbar-container": {
          position: "fixed",
          top: 0,
          justifyContent: "space-evenly",
          padding: 5,
        },
      }}
    >
      <Navbar.Brand>
        <Navbar.Toggle
          aria-label="toggle navigation"
          showIn={isXlScreen && isBeyondXl ? "xl" : "md"}
        />
        <Link href="/">
          <Image
            width={150}
            height={100}
            src="/assets/logo/logo_inovaud.svg"
            alt="logo"
            objectFit="contain"
          />
        </Link>
      </Navbar.Brand>
      <Navbar.Content hideIn={isXlScreen && isBeyondXl ? "xl" : "md"}>
        <ActiveLink href="/discover">Aceeuil</ActiveLink>
        <ActiveLink href="/recipes/generate">Services</ActiveLink>
        <ActiveLink href="/recipes/generate">Carrière</ActiveLink>
        <button className="main-button gradient">Contactez-Nous</button>
      </Navbar.Content>

      <Navbar.Collapse css={{ position: "fixed" }}>
        {collapseItems.map(({ title, href }) => (
          <Navbar.CollapseItem key={title}>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href={href}
            >
              {title}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};
