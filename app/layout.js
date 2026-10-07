import "./globals.css";

export const metadata = {
  title: "VYRO",
  description: "Watch. Create. Share.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
