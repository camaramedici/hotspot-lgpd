// app/sucesso/page.tsx
"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SucessoPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
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
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 text-center">

        {/* Ícone de sucesso */}
        <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-gray-800 mb-1">
          Acesso Liberado!
        </h1>
        <p className="text-gray-500 text-sm mb-6">
          Bem-vindo à rede WiFi da Câmara Municipal de Presidente Médici
        </p>

        {/* Dados do usuário */}
        {session?.user && (
          <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 mb-6 text-left">
            {session.user.image && (
              <img
                src={session.user.image}
                alt="Foto de perfil"
                className="w-12 h-12 rounded-full border border-gray-200"
              />
            )}
            <div>
              <p className="font-semibold text-gray-800">{session.user.name}</p>
              <p className="text-xs text-gray-500">{session.user.email}</p>
            </div>
          </div>
        )}

        {/* Instruções */}
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6 text-left space-y-2">
          <p className="text-sm font-semibold text-blue-800">📶 Como usar a rede:</p>
          <ol className="text-xs text-blue-700 space-y-1 list-decimal list-inside">
            <li>Seu dispositivo já está conectado ao WiFi</li>
            <li>Abra qualquer site no navegador</li>
            <li>O acesso será liberado automaticamente</li>
            <li>Em caso de problemas, reconecte ao WiFi e acesse este portal novamente</li>
          </ol>
        </div>

        {/* Aviso LGPD */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 mb-6">
          <p className="text-xs text-gray-500">
            🔒 Seu acesso foi registrado conforme a <strong>Lei nº 13.709/2018 (LGPD)</strong>.
            Os dados serão retidos por 5 anos para fins de auditoria.
          </p>
        </div>

        {/* Botão sair */}
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="w-full border border-gray-300 hover:bg-gray-50 text-gray-600 font-semibold py-2 px-4 rounded-lg transition text-sm"
        >
          Sair da conta
        </button>

      </div>

      {/* Rodapé */}
      <p className="mt-6 text-xs text-gray-400">
        Câmara Municipal de Presidente Médici — RO
      </p>
    </main>
  );
}
