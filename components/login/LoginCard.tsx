// components/login/LoginCard.tsx
"use client";

import { useState } from "react";
import LgpdCheckbox from "./LgpdCheckbox";
import SocialButtons from "./SocialButtons";
import LgpdModal from "@/components/ui/LgpdModal";

export default function LoginCard() {
  const [lgpdAccepted, setLgpdAccepted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="bg-blue-900/20 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 text-center">

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <div className="w-24 h-24 overflow-hidden rounded-2xl border-4 border-yellow-400/60 shadow-lg shadow-yellow-400/20">
            <img
              src="/images/logo.jpg"
              alt="Logo Câmara Municipal"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Título */}
        <div className="mb-6">
          <div className="flex items-center justify-center gap-2 mt-2">
            <div className="h-px w-12 bg-yellow-400/40" />
            <span className="text-white/50 text-xs">Portal WiFi Público</span>
            <div className="h-px w-12 bg-yellow-400/40" />
          </div>
        </div>

        <LgpdCheckbox
          accepted={lgpdAccepted}
          onChange={setLgpdAccepted}
          onOpenModal={() => setShowModal(true)}
        />

        <SocialButtons disabled={!lgpdAccepted} />

        <p className="mt-6 text-xs text-white/30">
          📶 Rede WiFi pública — uso responsável
        </p>
      </div>

      {showModal && <LgpdModal onClose={() => setShowModal(false)} />}
    </>
  );
}
