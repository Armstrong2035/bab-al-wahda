import Heading from "./Heading";
import { Box, Container } from "@mui/material";
// import one from "../../../../../public/masonry/one.png";
// import two from "../../../../../public/masonry/two.png";
// import three from "../../../../../public/masonry/three.png";
// import four from "../../../../../public/masonry/four.png";
// import five from "../../../../../public/masonry/five.png";
// import six from "../../../../../public/masonry/six.png";
import ImagesLayout from "./ImagesLayout";
import SmallImageList from "./SmallImageList";

export default function Gallery({ isDesktop }) {
  const images = [
    "/masonry/twentyone.png",
    "/masonry/ten.png",
    "/masonry/two.png",
    "/masonry/four.png",
    "/masonry/five.png",
    "/masonry/six.png",
    "/masonry/eight.png",
    "/masonry/eleven.png",
    "/masonry/twelve.png",
    "/masonry/thirteen.png",
    "/masonry/fourteen.png",
    "/masonry/fifteen.png",
    "/masonry/sixteen.png",
    "/masonry/seventeen.png",
    "/masonry/eighteen.png",
    "/masonry/nineteen.png",
  ];

  return (
    <Box sx={{ mt: 10 }}>
      <Container>
        <Heading />

        <ImagesLayout images={images} />
      </Container>
    </Box>
  );
}
