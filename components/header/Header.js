import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import { useState } from "react";

import Logo from "@/public/images/LogoTailor.png";
import { IconMenu } from "@/constant/icon";
import Menu from "./Menu/Menu";

export default function Header() {
  const router = useRouter();

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [selectedLang, setSelectedLang] = useState("en");

  const { t } = useTranslation();

  const handleLogout = () => {
    localStorage.removeItem("token");

    router.push("/login");
  };

  const changeLang = (e) => {
    const languageValue = e.target.value;

    setSelectedLang(languageValue);

    i18n.changeLanguage(languageValue);
  };

  const handleClick = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <nav className="bg-black">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Image
          src={Logo}
          className="flex items-center mr-3 h-9"
          alt="Logo"
          width={200}
        />
        <button
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <IconMenu onClick={handleClick} />
        </button>
        {isOpenMenu && (
          <Menu
            t={t}
            changeLang={changeLang}
            handleLogout={handleLogout}
            selectedLang={selectedLang}
          />
        )}
        <div className="hidden w-full md:block md:w-auto">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <Link
                href={"/tailor"}
                className="block py-2 pl-3 pr-4 text-primary rounded  md:hover:bg-transparent md:border-0 md:hover:text-primary_hover md:p-0"
              >
                {t("create-info")}
              </Link>
            </li>
            <li>
              <Link
                href={"/list"}
                className="block py-2 pl-3 pr-4 text-primary rounded  md:hover:bg-transparent md:border-0 md:hover:text-primary_hover md:p-0"
              >
                {t("list-order")}
              </Link>
            </li>
            <li>
              <select
                value={selectedLang}
                onChange={changeLang}
                className="flex items-center w-full py-2 pl-3 pr-4 text-primary bg-transparent md:border-0 md:hover:text-primary_hover md:p-0 md:w-auto"
              >
                <option value="en" className="block px-4 py-2  ">
                  {t("english")}
                </option>
                <option value="vi" className="block px-4 py-2  ">
                  {t("vietnamese")}
                </option>
              </select>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="block py-2 pl-3 pr-4 text-primary rounded  md:hover:bg-transparent md:border-0 md:hover:text-primary_hover md:p-0"
              >
                {t("logout")}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
