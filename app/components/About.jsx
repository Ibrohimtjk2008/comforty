import Image from "next/image";
import box from "@/app/assets/icon/box.svg";
import deliverytruck from "@/app/assets/icon/deliverytruck.svg";
import hours from "@/app/assets/icon/hours.svg";
import shield from "@/app/assets/icon/shield.svg";
import Logo1 from "@/app/assets/icon/Logo (2).svg";
import Logo7 from "@/app/assets/icon/Logo (8).svg";
import Logo2 from "@/app/assets/icon/Logo (3).svg";
import Logo3 from "@/app/assets/icon/Logo (4).svg";
import Logo4 from "@/app/assets/icon/Logo (5).svg";
import Logo5 from "@/app/assets/icon/Logo (6).svg";
import Logo6 from "@/app/assets/icon/Logo (7).svg";

export default function About() {
  return (
    <>
      <div className="container mx-auto rounded-lg shadow-2xl ">
        <div className="flex justify-between py-10 px-8">
          <div className="flex gap-2">
            <Image src={box} alt="error"></Image>
            <div>
              <p>Discount</p>
              <p>Every week new sales</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Image src={deliverytruck} alt="error"></Image>
            <div>
              <p>Free Delivery</p>
              <p>100% Free for all orders</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Image src={hours} alt="error"></Image>
            <div>
              <p>Great Support 24/7</p>
              <p>We care your experiences</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Image src={shield} alt="error"></Image>
            <div>
              <p>secure Payment</p>
              <p>100% Secure Payment Method</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between py-8 container mx-auto items-center">
        <Image src={Logo1} alt="error"></Image>
        <Image src={Logo2} alt="error"></Image>
        <Image src={Logo3} alt="error"></Image>
        <Image src={Logo4} alt="error"></Image>
        <Image src={Logo5} alt="error"></Image>
        <Image src={Logo6} alt="error"></Image>
        <Image src={Logo7} alt="error"></Image>
      </div>
    </>
  );
}
