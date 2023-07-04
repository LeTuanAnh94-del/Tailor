import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Menu({ changeLang, handleLogout, selectedLang }) {
  const { t } = useTranslation();

  return (
    <div className=" w-full">
      <ul className="w-[96%] mr-3 z-10 absolute font-medium flex flex-col p-4 mt-4 border rounded-lg bg-red-950 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
        <li>
          <Link
            href="#"
            className="block py-2 pl-3 pr-4 text-white rounded hover:bg-primary_hover"
            aria-current="page"
          >
            {t("create-info")}
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="block py-2 pl-3 pr-4 text-white rounded hover:bg-primary_hover md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
          >
            {t("list-order")}
          </Link>
        </li>
        <li>
          <select
            value={selectedLang}
            onChange={changeLang}
            className="border-none flex items-center w-full py-2 pl-2 text-white rounded bg-transparent hover:bg-primary_hover"
          >
            <option
              value="en"
              className="block px-4 py-2 text-primary bg-white"
            >
              {t("english")}
            </option>
            <option
              value="vi"
              className="block px-4 py-2 text-primary bg-white "
            >
              {t("vietnamese")}
            </option>
          </select>
        </li>
        <li>
          <button
            onClick={handleLogout}
            className="w-full flex justify-start py-2 pl-3 pr-4 text-white rounded hover:bg-primary_hover"
          >
            {t("logout")}
          </button>
        </li>
      </ul>
    </div>
  );
}
