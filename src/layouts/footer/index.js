import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Text, Grid } from "@nextui-org/react";

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
              className="text-white font-semibold block pb-2 "
              href="https://maps.app.goo.gl/msGRsYuy9Rm5w7Pn6"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex items-center">
                <img
                  src="/assets/icons/swissflag.avif"
                  alt="location"
                  width={20}
                  height={20}
                />
                <br></br> &nbsp; Rue du Port-Franc 22
                <br></br> &nbsp; 1003 Lausanne, Suisse
              </div>
            </a>

            <a
              href="mailto:info@inovaud-sa.com"
              className="text-white  font-semibold block pb-2 "
            >
              &nbsp; &nbsp; &nbsp; &nbsp; info@inovaud-sa.com
            </a>
          </Grid>

          <Grid className="w-full lg:w-8/12 px-12 mt-12">
            <Grid className="flex flex-wrap items-top mb-6">
              <Grid className="w-full lg:w-4/12 px-4 ml-auto">
                <Text
                  span
                  className="block uppercase text-blueGray-200  font-semibold mb-2"
                >
                  QUI SOMMES-NOUS?
                </Text>
                <br></br>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-white hover:text-blueGray-300 font-semibold block pb-2 "
                      href="#"
                    >
                      <Link href="/">Acceuil</Link>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white hover:text-blueGray-300 font-semibold block pb-2 "
                    >
                      <Link href="/services">Services</Link>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white hover:text-blueGray-300 font-semibold block pb-2 "
                    >
                      <Link href="/carriere">Carrière</Link>
                    </a>
                  </li>
                </ul>
              </Grid>
              <Grid className="w-full lg:w-4/12 px-4 ml-auto">
                <Text
                  span
                  className="block uppercase text-white  font-semibold mb-2"
                >
                  NOS SERVICES
                </Text>
                <br></br>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-white hover:text-blueGray-300 font-semibold block pb-2 "
                      href="#"
                    >
                      <Link href="/services/developpement-web">
                        Développement Web
                      </Link>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white hover:text-blueGray-300 font-semibold block pb-2 "
                    >
                      <Link href="/services/developpement-mobile">
                        Développement Mobile
                      </Link>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white hover:text-blueGray-300 font-semibold block pb-2 "
                    >
                      <Link href="/services/intelligence-artificielle">
                        Intelligence Artificielle
                      </Link>
                    </a>
                  </li>
                </ul>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid className="flex flex-wrap items-center md:justify-between justify-center ">
          <Grid className="w-full md:w-4/12 px-4 mx-auto text-center">
            <Grid className="py-12">
              <Text b>
                Copyright © {new Date().getFullYear()} INOVAUD Inc.{" "}
              </Text>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
};
