import Header from "@/components/Header/Header";
import Booking from "@/components/Booking/Booking";
import SummerPromotion from "@/components/SummerPromotion/SummerPromotion";
import Popular from "@/components/Popular/Popular";
import Subscribe from "@/components/Subscribe/Subscribe";
import RentSteps from "@/components/RentSteps/RentSteps";
import Location from "@/components/Location/Location";
import Accordian from "@/components/Accordian/Accordian";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Booking />
      <SummerPromotion />
      <Popular />
      <Subscribe />
      <RentSteps />
      <Location />
      <Accordian />
      <Footer />
    </>
  );
}
