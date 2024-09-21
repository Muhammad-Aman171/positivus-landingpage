import Image from 'next/image';

import Logo1 from '@/public/logos/Company logo.png'
import Logo2 from '@/public/logos/Company logo (1).png'
import Logo3 from '@/public/logos/Company logo (2).png'
import Logo4 from '@/public/logos/Company logo (3).png'
import Logo5 from '@/public/logos/Company logo (4).png'
import Logo6 from '@/public/logos/Company logo (5).png'
import Img1 from '@/public/assets/img1.png'

const Home: React.FC = () => {
  return (
    <div className=" font-sapce-grotesk">
      <div className="section1 border border-black flex  justify-between gap-x-20 my-10  ">
        <div className="border border-black w-1/2 flex flex-col justify-around items-start ">
          <h1 className=" text-6xl font-bold ">Navigating the digital landscape for success</h1>
          <p className=" text-2xl">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
          <button className="bg-black text-white h-16 w-48 rounded-xl">Book a consultation</button>
        </div>
        <div className=" w-1/2  ">
          <Image src={Img1} alt="img does not show" className="w-full h-full" />
        </div>
      </div>
      <div className="section2 border border-black flex justify-between flex-wrap my-10">
        <Image src={Logo1} alt="logo does not show"/>
        <Image src={Logo2} alt="logo does not show"/>
        <Image src={Logo3} alt="logo does not show"/>
        <Image src={Logo4} alt="logo does not show"/>
        <Image src={Logo5} alt="logo does not show"/>
        <Image src={Logo6} alt="logo does not show"/>
      </div>
    </div>
  );
};
export default Home;
