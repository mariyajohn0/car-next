import Header from "../components/Header/Header";
import Booking from "../components/Booking/Booking";
import SummerPromotion from "../components/SummerPromotion/SummerPromotion";
import Popular from "../components/Popular/Popular";
import Subscribe from "../components/Subscribe/Subscribe";

export default function Home() {
  return (
    <>
      <Header />
      <Booking />
      <SummerPromotion />
      <Popular />
      <Subscribe/>
    </>
  );
}
