import ScrollingAppBar from "@/components/AppBar/ScrollingAppBar";
import Body from "@/components/body/Body";
import Head from "next/head";

export const dynamic = "force-static";

const images = [
  "  https://res.cloudinary.com/dldvbrmzb/image/upload/f_auto,q_auto,fl_progressive/K_yfcedl.jpg",
  "https://res.cloudinary.com/dldvbrmzb/image/upload/f_auto,q_auto,fl_progressive/c_ctyht4.jpg",
  " https://res.cloudinary.com/dldvbrmzb/image/upload/f_auto,q_auto,fl_progressive/B_oqnqhf.jpg",
  "https://res.cloudinary.com/dldvbrmzb/image/upload/f_auto,q_auto,fl_progressive/H_c1csod.jpg",
];

const heroImage =
  "https://res.cloudinary.com/dldvbrmzb/image/upload/f_auto,q_auto,fl_progressive/G_onbwfz.jpg";

const masterPlan = "https://i.ibb.co/WNqgnPmL/37.png";

const floorPlanImages = [
  "https://res.cloudinary.com/dulafqaoq/image/upload/q_auto,f_auto,w_1200,dpr_auto/v1739529471/four-bedroom_cefueh.png",
  "https://res.cloudinary.com/dulafqaoq/image/upload/q_auto,f_auto,w_1200,dpr_auto/v1739529471/five-bedroom_tedvws.png",
  "https://res.cloudinary.com/dulafqaoq/image/upload/q_auto,f_auto,w_1200,dpr_auto/v1739529472/one-bedroom_eechn8.png",
  "https://res.cloudinary.com/dulafqaoq/image/upload/q_auto,f_auto,w_1200,dpr_auto/v1739529472/two-bedroom_haopfl.png",
];
export default function Home() {
  return (
    <>
      <Head>
        <link rel="preload" href={heroImage} as="image" type="image/webp" />
      </Head>
      <div>
        <ScrollingAppBar />
        <Body
          images={images}
          heroImage={heroImage}
          masterPlan={masterPlan}
          floorPlanImages={floorPlanImages}
        />
      </div>
    </>
  );
}
