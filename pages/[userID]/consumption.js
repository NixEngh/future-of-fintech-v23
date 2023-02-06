import NavBar from "../../components/NavBar";
import dynamic from "next/dynamic";
import { useUser } from "@auth0/nextjs-auth0/client";

const ChartDataFromAPI = dynamic(
  () => import("../../components/ChartDataFromAPI"),
  {
    ssr: false,
  }
);

const Consumption = () => {
  const { user, error, isLoading } = useUser();


  return (
      <main>
        
        {user && (
        <>
        <NavBar />
        <h1>Consumption for { user.name}</h1>
        <ChartDataFromAPI />
        </>
        )}
      </main>

  );
};

export default Consumption;
