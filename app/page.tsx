import Image from 'next/image';
import './page.scss'
import Card from './components/card/card';

import Logo1 from '@/public/logos/Company logo.png'
import Logo2 from '@/public/logos/Company logo (1).png'
import Logo3 from '@/public/logos/Company logo (2).png'
import Logo4 from '@/public/logos/Company logo (3).png'
import Logo5 from '@/public/logos/Company logo (4).png'
import Logo6 from '@/public/logos/Company logo (5).png'
import Img1 from '@/public/assets/img1.png'
import Img2 from '@/public/card/card-img1.png'
import Img3 from '@/public/card/card-img2.png'
import Img4 from '@/public/card/card-img3.png'
import Img5 from '@/public/card/card-img4.png'
import Img6 from '@/public/card/card-img5.png'
import Img7 from '@/public/card/card-img6.png'
import Img8 from '@/public/assets/Illustration.png'

const Home: React.FC = () => {
  return (
    <div className=" font-sapce-grotesk">
      <section className="section1  flex  justify-between gap-x-20 my-10  ">
        <div className=" w-1/2 flex flex-col justify-around items-start ">
          <h1 className=" text-6xl font-bold ">Navigating the digital landscape for success</h1>
          <p className=" text-2xl">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
          <button className="bg-black text-white h-16 w-48 rounded-xl">Book a consultation</button>
        </div>
        <div className=" w-1/2  ">
          <Image src={Img1} alt="img does not show" className="w-full h-full" />
        </div>
      </section>
      <section className="section2 flex justify-between flex-wrap my-10">
        <Image src={Logo1} alt="logo does not show"/>
        <Image src={Logo2} alt="logo does not show"/>
        <Image src={Logo3} alt="logo does not show"/>
        <Image src={Logo4} alt="logo does not show"/>
        <Image src={Logo5} alt="logo does not show"/>
        <Image src={Logo6} alt="logo does not show"/>
      </section>
      <section className="section3">
        <div className="heading">
          <h1>Services</h1>
          <p>At our digital marketing agency, we offer a range of services to <br/> help businesses grow and succeed online. These services include:</p>
        </div>
        <div className="cards">
          <Card style="card1" heading1="Search engine"  heading2="optimization"  srcimg={Img2}  />
          <Card style="card2" heading1="Pay-per-click" heading2="advertising" srcimg={Img3}  />
          <Card style="card3" heading1="Social Media" heading2="Marketing" srcimg={Img4}  />
          <Card style="card4" heading1="Email" heading2="Marketing" srcimg={Img5}  />
          <Card style="card5" heading1="Content" heading2="Creation" srcimg={Img6}  />
          <Card style="card6" heading1="Analytics and " heading2="Tracking" srcimg={Img7}  />
        </div>
      </section>
      <section className="section4">
        <div className="section4-card">
          <h1>Let’s make things happen</h1>
          <p>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
          <button>Get your free proposal</button>
        </div>
        <div className="section4-img">
          <Image src={Img8} alt="img does not show" className="img"/>
        </div>
      </section>
    </div>
  );
};
export default Home;
