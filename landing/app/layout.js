import { Manrope } from "next/font/google";

export const metadata = {
  title: "Bab Al Wahda event center",
  description:
    "Host unforgettable events at Bab Al Wahda event center, Dubai’s premier venue for weddings, corporate functions, and special celebrations. Elegant spaces, world-class service, and a prime location await you.",
  keywords: [
    "Dubai event venue",
    "Bab Al Wahda event center",
    "event hall Dubai",
    "wedding venues Dubai",
    "corporate events Dubai",
    "Dubai banquet hall",
    "luxury event space",
    "conference venue Dubai",
    "Dubai party hall",
    "event planning Dubai",
  ],

  // icons: {
  //   icon: "https://res.cloudinary.com/dulafqaoq/image/upload/t_Favicon/v1739530384/SUBRASHI_2_nex463.png",
  //   shortcut:
  //     "https://res.cloudinary.com/dulafqaoq/image/upload/t_Favicon/v1739530384/SUBRASHI_2_nex463.png",
  //   apple:
  //     "https://res.cloudinary.com/dulafqaoq/image/upload/t_Favicon/v1739530384/SUBRASHI_2_nex463.png",
  //   other: {
  //     rel: "https://res.cloudinary.com/dulafqaoq/image/upload/t_Favicon/v1739530384/SUBRASHI_2_nex463.png",
  //     url: "https://res.cloudinary.com/dulafqaoq/image/upload/t_Favicon/v1739530384/SUBRASHI_2_nex463.png",
  //   },
  // },
};

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={manrope.className}>
      <body style={{ backgroundColor: "#FCFFF3" }}>{children}</body>
    </html>
  );
}
