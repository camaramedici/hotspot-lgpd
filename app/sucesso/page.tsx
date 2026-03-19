"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const socialLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/camara.medici.18",
    bg: "bg-[#1877F2] hover:bg-[#166FE5]",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/camaramedici/",
    bg: "hover:opacity-90",
    gradient: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@camaramedici",
    bg: "bg-[#FF0000] hover:bg-[#cc0000]",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    name: "Site Oficial",
    url: "https://www.presidentemedici.ro.leg.br",
    bg: "bg-[#1a5c2a] hover:bg-[#14471f]",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
];

export default function SucessoPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (status === "unauthenticated") router.push("/");
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="flex h-screen items-center justify-center bg-[#0a1628]">
        <div className="w-10 h-10 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center p-4 bg-gradient-to-br from-[#0a1628] via-[#0d2a4a] to-[#0a3d1f] overflow-hidden">

      {/* Ondas decorativas */}
      <div className="fixed bottom-0 left-0 right-0 z-0 opacity-20">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FFD700" fillOpacity="1" d="M0,160L48,154.7C96,149,192,139,288,154.7C384,171,480,213,576,213.3C672,213,768,171,864,160C960,149,1056,171,1152,176C1248,181,1344,171,1392,165.3L1440,160L1440,320L0,320Z" />
        </svg>
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-0 opacity-10">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path fill="#22c55e" fillOpacity="1" d="M0,224L60,213.3C120,203,240,181,360,186.7C480,192,600,224,720,229.3C840,235,960,213,1080,197.3C1200,181,1320,171,1380,165.3L1440,160L1440,320L0,320Z" />
        </svg>
      </div>

      {/* Card */}
      <div
        className="relative z-10 w-full max-w-md"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 text-center">

          {/* Ícone de sucesso */}
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

          {/* Dados do usuário */}
          {session?.user && (
            <div className="flex items-center gap-3 bg-white/10 border border-white/10 rounded-2xl p-4 mb-5 text-left">
              {session.user.image && (
                <img
                  src={session.user.image}
                  alt="Foto"
                  className="w-12 h-12 rounded-full border-2 border-yellow-400/50"
                />
              )}
              <div>
                <p className="font-semibold text-white">{session.user.name}</p>
                <p className="text-xs text-white/50">{session.user.email}</p>
                <span className="inline-flex items-center gap-1 mt-1 text-xs text-green-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Conectado
                </span>
              </div>
            </div>
          )}

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

          {/* Redes sociais */}
          <div className="mb-5">
            <p className="text-xs text-white/40 mb-3 uppercase tracking-widest">
              Siga a Câmara Municipal
            </p>
            <div className="grid grid-cols-2 gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 text-white text-xs font-semibold py-2.5 px-3 rounded-xl transition-all duration-200 hover:scale-[1.03] shadow-lg ${s.bg}`}
                  style={s.gradient ? { background: s.gradient } : undefined}
                >
                  {s.icon}
                  {s.name}
                </a>
              ))}
            </div>
          </div>

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

        {/* Rodapé */}
        <p className="mt-4 text-center text-xs text-white/20">
          Câmara Municipal de Presidente Médici — RO
        </p>
      </div>
    </main>
  );
}
