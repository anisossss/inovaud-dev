import { Grid, Link, Navbar, Text } from "@nextui-org/react";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useMediaQuery } from "@react-hook/media-query";

export const Nav = () => {
  const isXlScreen = useMediaQuery("(min-width: 1433px)");
  const isBeyondXl = useMediaQuery("(max-width: 1435px)");

  function ActiveLink({ href, children }) {
    const router = useRouter();
    const isActive = router.pathname === href; // Compare exact routes

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
      title: "Acceuil",
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
      href: "/contact",
      title: "Contact",
    },
  ];

  return (
    <Navbar
      maxWidth="xl"
      css={{
        "& .nextui-navbar-container": {
          position: "fixed",
          top: 0,
          justifyContent: "space-between",
          padding: 5,
          paddingLeft: "8em",
          paddingRight: "8em",
        },
        "& .nav-link": {
          position: "relative",
          textDecoration: "none",
        },

        "& .nav-link::after": {
          content: "''",
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "0.2em",
          backgroundColor: "#3c8a2e",
          opacity: 0,
          transition: "opacity 300ms, transform 300ms",
        },

        "& .nav-link.active-link::after": {
          opacity: 1,
          transform: "translateY(2px)",
        },

        "& .nav-link:hover::after, & .nav-link:focus::after": {
          opacity: 1,
          transform: "translateY(2px)",
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
            width={180}
            height={150}
            src="/assets/logo/logo_inovaud.svg"
            alt="logo"
            objectFit="contain"
          />
        </Link>
      </Navbar.Brand>
      <Navbar.Content hideIn={isXlScreen && isBeyondXl ? "xl" : "md"}>
        <ActiveLink href="/">
          <Text span>Acceuil</Text>
        </ActiveLink>
        <ActiveLink href="/services">
          <Text span>Services</Text>
        </ActiveLink>
        <ActiveLink href="/carriere">
          {" "}
          <Text span>Carrière</Text>
        </ActiveLink>
        <ActiveLink href="/contact">
          <button className="main-button">
            <Text span>Contact</Text>
          </button>
        </ActiveLink>
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
