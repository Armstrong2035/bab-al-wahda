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

  icons: {
    icon: "https://res.cloudinary.com/dlrqvlq89/image/upload/v1744702778/BAB_wfapek.png",
    shortcut:
      "https://res.cloudinary.com/dlrqvlq89/image/upload/v1744702778/BAB_wfapek.png",
    apple:
      "https://res.cloudinary.com/dlrqvlq89/image/upload/v1744702778/BAB_wfapek.png",
    other: {
      rel: "https://res.cloudinary.com/dlrqvlq89/image/upload/v1744702778/BAB_wfapek.png",
      url: "https://res.cloudinary.com/dlrqvlq89/image/upload/v1744702778/BAB_wfapek.png",
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
