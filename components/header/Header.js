import Image from "next/image";
import { useRouter } from "next/router";

import Logo from "@/public/images/LogoTailor.png";
import ButtonBase from "../buttonBase/ButtonBase";

export default function Header() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");

    router.push("/login");
  };
  return (
    <header>
      <nav className="bg-black border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="https://flowbite.com" className="flex items-center">
            <Image
              src={Logo}
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
              width={200}
            />
          </a>
          <div className="flex items-center lg:order-2">
            <ButtonBase onClick={handleLogout}>Log out</ButtonBase>
          </div>
        </div>
      </nav>
    </header>
  );
}
