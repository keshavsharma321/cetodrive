import { Geist, Geist_Mono, Montserrat, Space_Grotesk } from "next/font/google";
import "./globals.css";

// Font configurations
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const spaceGrotesk = Space_Grotesk({
  weight: ['700'],
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

// Site metadata
export const metadata = {
  title: "Car Rentals",
  description: "Car Rentals",
};

// Root layout component
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          ${montserrat.variable} 
          ${spaceGrotesk.variable} 
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
