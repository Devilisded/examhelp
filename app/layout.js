import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Exam Help Online",
  description:
    " Get world-class and experienced expert assistance for your online exams and instant solutions at affordable prices - Contact us for more details!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
