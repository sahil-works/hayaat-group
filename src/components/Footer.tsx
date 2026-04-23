import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/assets/images/logo.png";
import SocialIcons from "../../public/assets/images/socialIcons.png";
import facebook from "../../public/assets/images/socail/1.svg";
import instagram from "../../public/assets/images/socail/2.svg";
import youtube from "../../public/assets/images/socail/3.svg";
import linkedin from "../../public/assets/images/socail/4.svg";

const navLinks = ["Who are we", "What we do", "Investments", "News"];

export default function Footer() {
  return (
    <footer className="bg-[#7E6952] text-white pb-[50px] lg:pb-[100px]">
      <div className="container custompl  border-[#A58F77] border-l-[1.8px] ">
        <div className="pt-[40px] sm:pt-[80px] lg:pt-[130px] pl-0 md:pl-[50px] sm:pb-[40px] lg:pb-[60px] lg:pl-[70px]">
          <div className=" grid grid-cols-1  sm:grid-cols-2 md:grid-cols-[.5fr,1fr] xl:grid-cols-2 gap-[30px] sm:gap-0  xl:gap-[50px]">
            <div className="item">
              <div className="logo">
                <div className="image">
                  <Link href="/" className="inline-block">
                    <Image
                      src={Logo}
                      alt="Logo image"
                      width={132}
                      height={130}
                      className="h-20 sm:h-[130px] w-20 sm:w-[132px] xl:w-[171px] xl:h-[168px]"
                    />
                  </Link>
                  {/* <ul className="mt-[30px] md:mt-[60px] flex items-center">
                    <li className="pr-[22px]">
                      <Link href="#">
                        <Image
                          src={facebook}
                          alt="facebook icon"
                          width={41}
                          height={41}
                        />
                      </Link>
                    </li>
                    <li className="pr-[22px]">
                      <Link href="#">
                        <Image
                          src={instagram}
                          alt="facebook icon"
                          width={41}
                          height={41}
                        />
                      </Link>
                    </li>
                    <li className="pr-[22px]">
                      <Link href="#">
                        <Image
                          src={youtube}
                          alt="facebook icon"
                          width={41}
                          height={41}
                        />
                      </Link>
                    </li>
                    <li className="">
                      <Link href="#">
                        <Image
                          src={linkedin}
                          alt="facebook icon"
                          width={41}
                          height={41}
                        />
                      </Link>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>
            {/* <div className="item grid grid-cols-1 md:grid-cols-2"> */}
            <div className="item flex flex-col md:flex-row md:justify-end">
              {/* <div className="">
                <h4 className="text-white text-[28px] mb-[10px]">Site Map</h4>
                <ul>
                  <li className="mb-[3px]">
                    <Link
                      href="/"
                      className="text-white text-[16px] mb-[7px] Inter font-light"
                    >
                      Who are we
                    </Link>
                  </li>
                  <li className="mb-[3px]">
                    <Link
                      href="/"
                      className="text-white text-[16px] mb-[7px] Inter font-light"
                    >
                      What we do
                    </Link>
                  </li>
                  <li className="mb-[3px]">
                    <Link
                      href="/"
                      className="text-white text-[16px] mb-[7px] Inter font-light"
                    >
                      Investments
                    </Link>
                  </li>
                  <li className="mb-[3px]">
                    <Link
                      href="/"
                      className="text-white text-[16px] mb-[7px] Inter font-light"
                    >
                      News
                    </Link>
                  </li>
                </ul>
              </div> */}

              <div className="">
                <h4 className="text-white text-[28px] mb-[10px] xl:mb-0">
                  Head Office
                </h4>
                {/* <p className="text-white text-[16px] xl:text-[28px] mb-[7px] Inter leading-[2] font-light">
                  Office 3207, HDS Tower,
                  <br /> Cluster F, JLT <br />
                  PO Box 390544
                  <br />
                  Dubai, United Arab Emirates
                </p> */}

                <p className="text-white text-[16px] xl:text-[28px] font-light">
                  Office 3207, HDS Tower,
                </p>
                <p className="text-white text-[16px] xl:text-[28px] font-light">
                  Cluster F, JLT
                </p>
                <p className="text-white text-[16px] xl:text-[28px] font-light">
                  PO Box 390544
                </p>
                <p className="text-white text-[16px] xl:text-[28px] font-light">
                  Dubai, United Arab Emirates
                </p>

                <ul>
                  <li className="mb-[5px] mt-[26px]">
                    <Link
                      href="tel:+971 4 513 4951"
                      className="text-white text-[16px] xl:text-[28px] mb-[7px] Inter font-light"
                    >
                      Tel: +971 4 513 4951
                    </Link>
                  </li>
                  <li className="mb-[5px]">
                    <Link
                      href="tel:+971 4 513 4936"
                      className="text-white text-[16px] mb-[7px]  xl:text-[28px] Inter font-light"
                    >
                      Fax: +971 4 513 4936
                    </Link>
                  </li>
                  <li className="mb-[5px]">
                    <Link
                      href="mailto:info@hayaatgroup.com"
                      className="text-white text-[16px] xl:text-[28px] mb-[7px] Inter font-light"
                    >
                      E-mail: info@hayaatgroup.com
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
