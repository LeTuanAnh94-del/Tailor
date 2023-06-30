import { useEffect, useState } from "react";
import { getInfoUser } from "@/apis/auth.api";
import Header from "@/components/header/Header";

export default function Home() {
  const [userData, setUserData] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    setAccessToken(token);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (typeof localStorage !== "undefined") {
          const res = await getInfoUser(accessToken);

          setUserData(res?.data);
        }
      } catch (error) {
        console.log("error:", error);
      }
    };

    if (accessToken) {
      fetchData();
    }
  }, [accessToken]);

  return (
    <div>
      <Header />
      {userData?.role === "CLIENT" ? <p>Show order</p> : null}
      {userData?.role === "TAILOR" ? <p>Show create order</p> : null}
    </div>
  );
}
