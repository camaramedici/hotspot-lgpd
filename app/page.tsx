// app/page.tsx
"use client";

import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function HomePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [lgpdAccepted, setLgpdAccepted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/sucesso");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50">
        <p className="text-gray-500 animate-pulse">Carregando...</p>
      </div>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg text-center">

        {/* Logo / Título */}
        <h1 className="text-2xl font-bold text-gray-800 mb-1">
          Câmara Municipal
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Presidente Médici — Portal WiFi Público
        </p>

        {/* Aviso LGPD */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-6 text-left">
          <p className="text-xs text-blue-800 font-semibold mb-1">
            🔒 Aviso de Privacidade — LGPD
          </p>
          <p className="text-xs text-blue-700">
            Ao acessar esta rede, seus dados (nome, e-mail e endereço MAC)
            serão registrados para fins de segurança e auditoria, conforme
            a <strong>Lei nº 13.709/2018 (LGPD)</strong>. Os dados são
            retidos por <strong>5 anos</strong>.{" "}
            <button
              onClick={() => setShowModal(true)}
              className="underline font-semibold hover:text-blue-900"
            >
              Saiba mais
            </button>
          </p>
        </div>

        {/* Checkbox de aceite */}
        <label className="flex items-start gap-2 mb-6 cursor-pointer text-left">
          <input
            type="checkbox"
            checked={lgpdAccepted}
            onChange={(e) => setLgpdAccepted(e.target.checked)}
            className="mt-1 accent-blue-600"
          />
          <span className="text-xs text-gray-600">
            Li e concordo com os termos de uso e a política de privacidade
            da Câmara Municipal de Presidente Médici.
          </span>
        </label>

        {/* Botões de Login */}
        <div className="flex flex-col gap-3">
          <button
            onClick={() => signIn("google")}
            disabled={!lgpdAccepted}
            className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold py-2 px-4 rounded-lg transition disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Entrar com Google
          </button>

          <button
            onClick={() => signIn("facebook")}
            disabled={!lgpdAccepted}
            className="w-full flex items-center justify-center gap-2 bg-[#1877F2] hover:bg-[#166FE5] text-white font-semibold py-2 px-4 rounded-lg transition disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Entrar com Facebook
          </button>
        </div>

      </div>

      {/* Modal LGPD */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 max-h-[80vh] overflow-y-auto">
            <h2 className="text-lg font-bold text-gray-800 mb-4">
              Política de Privacidade — LGPD
            </h2>
            <div className="text-sm text-gray-600 space-y-3">
              <p><strong>Controlador:</strong> Câmara Municipal de Presidente Médici — RO</p>
              <p><strong>Finalidade:</strong> Registro de acesso à rede WiFi pública para fins de segurança, auditoria e cumprimento de obrigação legal.</p>
              <p><strong>Dados coletados:</strong> Nome, e-mail, foto de perfil (via provedor social) e endereço MAC do dispositivo.</p>
              <p><strong>Base legal:</strong> Art. 7º, II da Lei nº 13.709/2018 — cumprimento de obrigação legal pelo poder público.</p>
              <p><strong>Retenção:</strong> Os dados são mantidos por <strong>5 anos</strong>, conforme legislação aplicável.</p>
              <p><strong>Compartilhamento:</strong> Os dados não são compartilhados com terceiros, exceto por determinação judicial.</p>
              <p><strong>Seus direitos:</strong> Acesso, correção e exclusão dos dados mediante solicitação formal ao setor de TI da Câmara.</p>
              <p><strong>Contato DPO:</strong> ti@camaramedici.ro.leg.br</p>
            </div>
            <button
              onClick={() => setShowModal(false)}
              className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
