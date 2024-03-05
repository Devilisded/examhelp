import "./globals.css";

export const metadata = {
  title: "Exam Help Online",
  description:
    "Get world-class and experienced expert assistance for your online exams and instant solutions at affordable prices - Contact us for more details!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
