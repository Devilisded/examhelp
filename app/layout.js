import "./globals.css";
import Head from "next/head";

export const metadata = {
  title: "Matlab Assignment Help",
  description:
    "Get world-class and experienced expert assistance for your online exams and instant solutions at affordable prices - Contact us for more details!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="google-site-verification"
          content="EkN-h2_AIFq-8vb5mKSwm6G5KX9UEt1xw21_0y3muZE"
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
