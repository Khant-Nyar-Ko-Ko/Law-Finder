import "./globals.css";

export const metadata = {
  title: "LawFinder",
  description: "Search and browse legal documents easily with LawFinder.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
