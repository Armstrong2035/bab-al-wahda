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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#FFFFFF" }}>{children}</body>
    </html>
  );
}
