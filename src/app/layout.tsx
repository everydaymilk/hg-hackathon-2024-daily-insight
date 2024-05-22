import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import Menu from "@/components/MenuBar";

const barlow = Barlow({ weight: '500', subsets: ['latin'] });

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
      {/* add different color to the body to separate it from the rest of elements and make them stand out
      and apply the global font color */}
      <body className={"bg-screen text-user-font " + barlow.className} >
        {/* Make the actual content take up 11/12 of the space, leaving 1/12 for the date. 
        Adjust as needed 
        Added details to the main container*/}
        < div className="grid grid-cols-12 bg-background min-h-screen rounded-tr-[150px] my-2rem">
          <div></div>
          <div className="col-start-2 col-span-10 my-45">
            <Menu />
            {children}
          </div>
          <div></div>
        </div>
      </body>
    </html >
  );
}
