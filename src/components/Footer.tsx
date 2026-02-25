import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/assets/images/logo.png";
import SocialIcons from "../../public/assets/images/socialIcons.png";

const navLinks = ["Who are we", "What we do", "Investments", "News"];

export default function Footer() {
  return (
    <footer className="bg-[#7E6952] text-white pt-[130px] pb-[140px]">
      <div className="container">
        <div className="grid grid-cols-2 gap-[50px]">
          <div className="item">
            <div className="logo">
               <div className="image">
                <Link href="/" className="inline-block">
                  <Image src={Logo} alt="Logo image" width={132} height={130} />
                </Link>
                <Image src={SocialIcons} alt="Logo image" width={132} height={130}  className="mt-[60px]"/>
            </div>
            </div>
          </div>
          <div className="item grid grid-cols-2">
            <div className="">
              <h4 className="text-white text-[28px] mb-[10px]">Site Map</h4>
              <ul>
                <li>
                  <Link href="/about" className="text-white text-[14px] mb-[7px] Inter">Who are we</Link>
                </li>
                <li>
                  <Link href="/what-we-do" className="text-white text-[14px] mb-[7px] Inter">What we do</Link>
                </li>
                <li>
                  <Link href="/investments" className="text-white text-[14px] mb-[7px] Inter">Investments</Link>
                </li>
                <li>
                  <Link href="news" className="text-white text-[14px] mb-[7px] Inter">News</Link>
                </li>
              </ul>
            </div>

            <div className="">
              <h4 className="text-white text-[28px] mb-[10px]">Head Office</h4>
              <p className="text-white text-[14px] mb-[7px] Inter">Office 3207, HDS Tower,<br /> Cluster F, JLT <br />PO Box 390544<br />
              Dubai, United Arab Emirates</p>
              <ul>
                <li>
                  <Link href="tel:+971 4 513 4951" className="text-white text-[14px] mb-[7px] Inter">Tel: +971 4 513 4951</Link>
                </li>
                <li>
                  <Link href="tel:+971 4 513 4936" className="text-white text-[14px] mb-[7px] Inter">Fax: +971 4 513 4936</Link>
                </li>
                <li>
                  <Link href="mailto:info@hayaatgroup.com" className="text-white text-[14px] mb-[7px] Inter">E-mail: info@hayaatgroup.com</Link>
                </li>               
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
