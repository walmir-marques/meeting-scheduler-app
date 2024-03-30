import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import googleIcon from "@/public/google.png";
import facebookIcon from "@/public/facebook.png";
import Image from "next/image";
import profile1 from "@/public/profile1.jpg";
import profile2 from "@/public/profile2.jpg";
import profile3 from "@/public/profile3.jpg";
import profile4 from "@/public/profile4.jpg";

function Hero() {
  return (
    <main className="flex flex-col justify-center items-center my-20">
      <div className="hidden lg:block">
        <Image
          src={profile1}
          width={200}
          height={200}
          className="h-[200px] object-cover rounded-full absolute right-16"
        />
        <Image
          src={profile2}
          width={200}
          height={200}
          className="h-[200px] object-cover rounded-full absolute top-48 left-16"
        />
        <Image
          src={profile3}
          width={200}
          height={200}
          className="h-[200px] object-cover rounded-full absolute bottom-20 left-36"
        />
        <Image
          src={profile4}
          width={150}
          height={150}
          className="h-[150px] object-cover rounded-full absolute right-44 bottom-32"
        />
      </div>
      <div className="text-center max-w-3xl">
        <h2 className="font-bold text-[60px] text-slate-700 ">
          Easy scheduling ahead
        </h2>
        <h2 className="text-xl mt-5 text-slate-500">
          Scheculy is your scheduling automation platfomr for eliminating the
          back-and-forth emails to find the perfect time - and so much more.
        </h2>
        <div className="flex gap-4 flex-col mt-5">
          <h3 className="text-sm">Sign Up free with Google and Facebook</h3>
          <div className="flex justify-center gap-8">
            <Button className="flex p-7 gap-4">
              Sign Up with Google
              <Image src={googleIcon} height={30} width={30} alt="icon" />
            </Button>
            <Button className="flex p-7 gap-4">
              Sign Up with Facebook
              <Image src={facebookIcon} height={30} width={30} alt="icon" />
            </Button>
          </div>
          <hr></hr>
          <h2>
            <Link href="" className="text-primary">
              Sign Up Free with Email.
            </Link>
            No credit card required.
          </h2>
        </div>
      </div>
    </main>
  );
}

export default Hero;
