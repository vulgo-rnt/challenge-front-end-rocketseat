import type { Metadata } from "next";
import "./globals.css";
import Header from "@/patterns/header";
import { Saira } from "next/font/google";
import { DefaultProviders } from "@/patterns/default-providers";
import { PageContanier } from "@/components/page-contanier";

const saira = Saira({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Capputeeno",
  description: "Capputeeno store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={saira.className}>
        <DefaultProviders>
          <Header />
          <PageContanier>{children}</PageContanier>
        </DefaultProviders>
      </body>
    </html>
  );
}
