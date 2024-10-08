import Image from "next/image";
import styles from "../app/style";

import {
  Navbar,
  Hero,
  About,
  Why,
  Stats,
  Stat,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Footer,
  Values,
  Products,
  Hydroponics
} from "../comps/index";

export default function Home() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary  ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary  ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
          <Hydroponics />
        </div>
      </div>
      <div className={`bg-primary  ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
          <About />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX}   ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
           {/* <Stat/> */}
           {/* <Business/>  */}
           {/* <Why/>  */}
           {/* <Values/> */}
           <Products/>
           {/* <Billing/> 
           <CardDeal/> */}
           <Testimonials/>
           {/* <Clients/> */}
           {/* <CTA/>  */}
           <Footer/>
        </div>
      </div>
    </div>
  );
}
