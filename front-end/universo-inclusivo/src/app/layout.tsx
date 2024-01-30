import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Header from "./components/Header";
import HeaderCadastro from "./components/HeaderCadastro";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
  useHeaderCadastro = false
}: Readonly<{
  children: React.ReactNode;
  useHeaderCadastro?: boolean;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        {useHeaderCadastro ? <HeaderCadastro /> : <Header />}
        {children}
        <Footer />
      </body>
    </html>
  );
}