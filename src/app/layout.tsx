import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "@/components/MenuBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HG 2024 Hackathon - Daily Insight",
  description: "Introspection web app for HG 2024 Hackathon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Make the actual content take up 11/12 of the space, leaving 1/12 for the date. Adjust as needed */}
        <div className="grid grid-cols-12 bg-background min-h-screen ">
          <div></div>
          <div className="col-span-11">
            <Menu />
            {children}
          </div>

        </div>
      </body>
    </html >
  );
}
