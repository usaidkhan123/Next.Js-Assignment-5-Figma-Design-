import Image from "next/image";
import image from '@/public/images/img.jpg'
const Hero = () => {
    return (
        <div className="flex h-[100%]">
        <div className="w-1/2 flex flex-col justify-center items-start m-28">
          <h1 className="font-bold text-[35px] ">IMPECCABLE <br />CRAFTSMANSHIP AND <br />FINESSE</h1>
          <p className="font-medium text-[22px]  text-textcolor w-[902px] mt-2 ">
          An example of intricate workmanship and detail, elegant <br /> necklaces and long and short chains form a part of our <br /> desirable collection.
          </p>
          <button className="w-[150px] h-[38px] bg-custom text-white rounded-[10px]  font-medium text-[18px] mt-2">Explore Now</button>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <Image
            src={image}
            alt="hero image"
            width={380.1}
            height={525.43}
          />
        </div>
      </div>
      
    )

}
export default Hero;