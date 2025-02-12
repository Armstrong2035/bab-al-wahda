import Body from "@/components/body/Body";

export const dynamic = "force-static";

const images = [
  "https://i.ibb.co/spTbQVCM/Riverside-6.jpg",
  "https://i.ibb.co/gZBJ4Fyh/Riverside-7.jpg",
  "https://i.ibb.co/gZBJ4Fyh/Riverside-7.jpg",
  "https://i.ibb.co/dJj2yvwK/Riverside-4.jpg",
  "https://i.ibb.co/mVXcctvN/Riverside-3.jpg",
  "https://i.ibb.co/QjtPj7T0/Riverside-2.jpg",
  "https://i.ibb.co/TBvJHr5p/Riverside-1.jpg",
];

export default function Home() {
  return (
    <div>
      <Body images={images} />
    </div>
  );
}
