import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Text, Grid } from "@nextui-org/react";
import {
  BsFacebook,
  BsYoutube,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsMedium,
  BsPinterest,
} from "react-icons/bs";

import { FaTiktok } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer
      className=" pt-8 pb-6"
      style={{
        bottom: "0",
        left: 0,
        position: "relative",
      }}
    >
      <Grid className="container mx-auto ">
        <Grid className="flex flex-wrap lg:text-left">
          <Grid className="lg:w-2/12 px-6 mb-6 ">
            <Link href="/">
              <Image
                width={150}
                height={150}
                src="/assets/logo/logo_inovaud.svg"
                alt="Logo Inovaud"
                objectFit="contain"
              />
            </Link>
            <br></br>
            <a
              className="text-blueGray-600 0 font-semibold block pb-2 text-sm"
              href="#"
            >
              Inovaud, Rue du Port-Franc 22, 1003 Lausanne
            </a>
            <a
              href="tel:+21699702374"
              className="text-blueGray-600  font-semibold block pb-2 text-sm"
            >
              + 41 79 192 42 59
            </a>
            <a
              href="#"
              className="text-blueGray-600  font-semibold block pb-2 text-sm"
            >
              Info@inovaud.ch
            </a>
          </Grid>

          <Grid className="w-full lg:w-8/12 px-12 mt-12">
            <Grid className="flex flex-wrap items-top mb-6">
              <Grid className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  QUI SOMMES-NOUS?
                </span>
                <br></br>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-300 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      <Link href="/discover">Acceuil</Link>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-blueGray-600 hover:text-blueGray-300 font-semibold block pb-2 text-sm"
                    >
                      <Link href="/meal-planner"> Services</Link>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-blueGray-600 hover:text-blueGray-300 font-semibold block pb-2 text-sm"
                    >
                      <Link href="/blogs">Notre Blog</Link>
                    </a>
                  </li>
                </ul>
              </Grid>
              <Grid className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  NOS SERVICES
                </span>
                <br></br>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-300 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      <Link href="/discover">Développement Web</Link>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-blueGray-600 hover:text-blueGray-300 font-semibold block pb-2 text-sm"
                    >
                      <Link href="/meal-planner"> Développement Mobile</Link>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-blueGray-600 hover:text-blueGray-300 font-semibold block pb-2 text-sm"
                    >
                      <Link href="/blogs">Intelligence Artificielle</Link>
                    </a>
                  </li>
                </ul>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid className="flex flex-wrap items-center md:justify-between justify-center ">
          <Grid className="w-full md:w-4/12 px-4 mx-auto text-center">
            <Grid className="text-sm text-blueGray-500 font-semibold py-12">
              Copyright © {new Date().getFullYear()} INOVAUD Inc.{" "}
              <a
                href="https://www.linkedin.com/in/anis-khalef-11660a231/"
                className="text-blueGray-500 hover:text-blueGray-300"
                target="_blank"
                rel="noreferrer"
              >
                by Anis
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
};
