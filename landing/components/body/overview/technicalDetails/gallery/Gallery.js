import Heading from "./Heading";
import { Box } from "@mui/material";
// import one from "../../../../../public/masonry/one.png";
// import two from "../../../../../public/masonry/two.png";
// import three from "../../../../../public/masonry/three.png";
// import four from "../../../../../public/masonry/four.png";
// import five from "../../../../../public/masonry/five.png";
// import six from "../../../../../public/masonry/six.png";
import ImagesLayout from "./ImagesLayout";

const images = [
  "/masonry/one.png",
  "/masonry/two.png",
  "/masonry/three.png",
  "/masonry/four.png",
  "/masonry/five.png",
  "/masonry/six.png",
  "/masonry/seven.png",
  "/masonry/eight.png",
  "/masonry/ten.png",
  "/masonry/eleven.png",
  "/masonry/twelve.png",
  "/masonry/thirteen.png",
  "/masonry/fourteen.png",
  "/masonry/fifteen.png",
  "/masonry/sixteen.png",
  "/masonry/seventeen.png",
  "/masonry/eighteen.png",
  "/masonry/nineteen.png",
  "/masonry/twenty.png",
  "/masonry/twentyone.png",
];

export default function Gallery() {
  const images = [
    "/masonry/one.png",
    "/masonry/two.png",
    "/masonry/three.png",
    "/masonry/four.png",
    "/masonry/five.png",
    "/masonry/six.png",
    "/masonry/seven.png",
    "/masonry/eight.png",
    "/masonry/ten.png",
    "/masonry/eleven.png",
    "/masonry/twelve.png",
    "/masonry/thirteen.png",
    "/masonry/fourteen.png",
    "/masonry/fifteen.png",
    "/masonry/sixteen.png",
    "/masonry/seventeen.png",
    "/masonry/eighteen.png",
    "/masonry/nineteen.png",
    "/masonry/twenty.png",
    "/masonry/twentyone.png",
  ];

  return (
    <Box sx={{ mt: 10 }}>
      <Heading />
      <ImagesLayout images={images} />
    </Box>
  );
}
