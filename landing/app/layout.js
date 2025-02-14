import { Manrope } from "next/font/google";

export const metadata = {
  title: "DAMAC Riverside Views | Luxury Waterfront Living in Dubai",
  description:
    "Experience luxury waterfront living at DAMAC Riverside Views. 1 & 2 bedroom apartments starting from AED 888,000. Located in Dubai Investment Park.",
  keywords: [
    "waterfront living",
    "Dubai property",
    "DAMAC Properties",
    "riverside apartments",
    "Dubai Investment Park",
    "luxury apartments Dubai",
  ],

  icons: {
    icon: "https://res.cloudinary.com/dulafqaoq/image/upload/t_Favicon/v1739530384/SUBRASHI_2_nex463.png",
    shortcut:
      "https://res.cloudinary.com/dulafqaoq/image/upload/t_Favicon/v1739530384/SUBRASHI_2_nex463.png",
    apple:
      "https://res.cloudinary.com/dulafqaoq/image/upload/t_Favicon/v1739530384/SUBRASHI_2_nex463.png",
    other: {
      rel: "https://res.cloudinary.com/dulafqaoq/image/upload/t_Favicon/v1739530384/SUBRASHI_2_nex463.png",
      url: "https://res.cloudinary.com/dulafqaoq/image/upload/t_Favicon/v1739530384/SUBRASHI_2_nex463.png",
    },
  },
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
