import { Header } from "../../components/Header";
import dynamic from "next/dynamic";


const ChartDataFromAPI = dynamic(
    () => import("../../components/ChartDataFromAPI"),
    {
      ssr: false,
    }
  );




const Consumption = () => {

    return (
    <main>
        <Header />
        <ChartDataFromAPI />
    </main>
    );

      
}


export default Consumption