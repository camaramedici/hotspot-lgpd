// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/ui/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WiFi Público — Câmara Municipal de Presidente Médici",
  description: "Portal de acesso à rede WiFi pública da Câmara Municipal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
