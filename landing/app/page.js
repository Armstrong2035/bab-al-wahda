import ScrollingAppBar from "@/components/AppBar/ScrollingAppBar";
import Body from "@/components/body/Body";
import Head from "next/head";

export const dynamic = "force-static";

const images = [
  "https://i.ibb.co/spTbQVCM/Riverside-6.jpg",
  "https://i.ibb.co/gZBJ4Fyh/Riverside-7.jpg",
  "https://i.ibb.co/mVXcctvN/Riverside-3.jpg",
  "https://i.ibb.co/QjtPj7T0/Riverside-2.jpg",
  "https://i.ibb.co/TBvJHr5p/Riverside-1.jpg",
  "https://i.ibb.co/7LhnTd6/eight.png",
  "https://i.ibb.co/3yrCRpqY/fifteen.png",
  "https://i.ibb.co/Vc5pmzyZ/fourteen.png",
  "https://i.ibb.co/HDWJZ6Z6/nine.png",
  "https://i.ibb.co/ccSKYxgy/nineteen.png",
  "https://i.ibb.co/HTjjKDLS/seventeen.png",
  "https://i.ibb.co/JWvvYZ01/twentyone.png",
];

const heroImage = "https://i.ibb.co/ppTrdbs/interior.png";

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
