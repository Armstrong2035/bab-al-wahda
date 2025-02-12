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
    "https://i.ibb.co/spTbQVCM/Riverside-6.jpg",
    "https://i.ibb.co/gZBJ4Fyh/Riverside-7.jpg",
    "https://i.ibb.co/gZBJ4Fyh/Riverside-7.jpg",
    "https://i.ibb.co/dJj2yvwK/Riverside-4.jpg",
    "https://i.ibb.co/mVXcctvN/Riverside-3.jpg",
    "https://i.ibb.co/QjtPj7T0/Riverside-2.jpg",
    "https://i.ibb.co/TBvJHr5p/Riverside-1.jpg",
  ];

  return (
    <Box sx={{ mt: 10 }}>
      <Container>
        <Heading />

        {isDesktop ? (
          <ImagesLayout images={images} />
        ) : (
          <SmallImageList images={images} />
        )}
      </Container>
    </Box>
  );
}
