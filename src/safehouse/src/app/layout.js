import "./globals.css";

export const metadata = {
  title: "Home",
  description: "The home page of the application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
