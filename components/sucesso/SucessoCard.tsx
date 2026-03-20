// components/sucesso/SucessoCard.tsx
"use client";

import { signOut } from "next-auth/react";
import { Session } from "next-auth";
import UserInfo from "./UserInfo";
import SocialLinks from "./SocialLinks";

interface Props {
  session: Session;
}

export default function SucessoCard({ session }: Props) {
  return (
    <div className="bg-blue/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 text-center">

      {/* Ícone sucesso */}
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 rounded-full bg-green-500/20 border-2 border-green-400/60 flex items-center justify-center shadow-lg shadow-green-400/20">
          <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>

      {/* Título */}
      <h1 className="text-2xl font-bold text-white mb-1">Acesso Liberado!</h1>
      <p className="text-yellow-400 text-sm font-semibold tracking-widest uppercase mb-1">
        Presidente Médici — RO
      </p>
      <div className="flex items-center justify-center gap-2 mb-5">
        <div className="h-px w-12 bg-yellow-400/40" />
        <span className="text-white/40 text-xs">WiFi Público</span>
        <div className="h-px w-12 bg-yellow-400/40" />
      </div>

      <UserInfo session={session} />

      {/* Instruções */}
      <div className="bg-blue-900/30 border border-blue-400/20 rounded-xl p-4 mb-5 text-left">
        <p className="text-xs font-semibold text-blue-300 mb-2">📶 Como usar a rede:</p>
        <ol className="text-xs text-white/60 space-y-1 list-decimal list-inside">
          <li>Seu dispositivo já está conectado ao WiFi</li>
          <li>Abra qualquer site no navegador</li>
          <li>O acesso será liberado automaticamente</li>
          <li>Em caso de problemas, reconecte ao WiFi</li>
        </ol>
      </div>

      <SocialLinks />

      {/* LGPD */}
      <div className="bg-white/5 border border-white/10 rounded-xl p-3 mb-5">
        <p className="text-xs text-white/30">
          🔒 Acesso registrado conforme a{" "}
          <strong className="text-white/50">Lei nº 13.709/2018 (LGPD)</strong>.
          Dados retidos por 5 anos.
        </p>
      </div>

      {/* Botão sair */}
      <button
        onClick={() => signOut({ callbackUrl: "/" })}
        className="w-full border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white/60 hover:text-white font-semibold py-2.5 px-4 rounded-xl transition-all duration-200 text-sm"
      >
        Sair da conta
      </button>

    </div>
  );
}
