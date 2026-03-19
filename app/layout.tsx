// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css"; // ← essa linha estava faltando!
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Portal WiFi — Câmara Médici",
  description: "Portal de acesso à rede WiFi pública da Câmara Municipal de Presidente Médici",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
