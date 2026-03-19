"use client";

import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";

// Componente de partículas animadas
function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; r: number; dx: number; dy: number; alpha: number }[] = [];

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 3 + 1,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    let animId: number;
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 215, 0, ${p.alpha})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      animId = requestAnimationFrame(draw);
    }

    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
}

export default function HomePage() {
  const { status } = useSession();
  const router = useRouter();
  const [lgpdAccepted, setLgpdAccepted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (status === "authenticated") router.push("/sucesso");
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
      
      {/* Partículas */}
      <Particles />

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

      {/* Card principal */}
      <div
        className="relative z-10 w-full max-w-md"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 text-center">
          
          {/* Brasão */}
          <div className="flex justify-center mb-4">
            <div className="w-24 h-24 rounded-full border-4 border-yellow-400/60 shadow-lg shadow-yellow-400/20 overflow-hidden bg-white/10 flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Bras%C3%A3o_de_Presidente_M%C3%A9dici-RO.jpg/200px-Bras%C3%A3o_de_Presidente_M%C3%A9dici-RO.jpg"
                alt="Brasão de Presidente Médici"
                className="w-20 h-20 object-contain"
              />
            </div>
          </div>

          {/* Título */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-white tracking-wide">
              Câmara Municipal
            </h1>
            <p className="text-yellow-400 font-semibold text-sm tracking-widest uppercase mt-1">
              Presidente Médici — RO
            </p>
            <div className="flex items-center justify-center gap-2 mt-2">
              <div className="h-px w-12 bg-yellow-400/40" />
              <span className="text-white/50 text-xs">Portal WiFi Público</span>
              <div className="h-px w-12 bg-yellow-400/40" />
            </div>
          </div>

          {/* Aviso LGPD */}
          <div className="bg-blue-900/40 border border-blue-400/30 rounded-xl p-3 mb-5 text-left">
            <p className="text-xs text-blue-200 font-semibold mb-1">🔒 Aviso de Privacidade — LGPD</p>
            <p className="text-xs text-blue-300 leading-relaxed">
              Ao acessar esta rede, seus dados serão registrados conforme a{" "}
              <strong className="text-white">Lei nº 13.709/2018</strong> para fins de auditoria.{" "}
              <button
                onClick={() => setShowModal(true)}
                className="text-yellow-400 underline hover:text-yellow-300 transition font-semibold"
              >
                Saiba mais
              </button>
            </p>
          </div>

          {/* Checkbox */}
          <label className="flex items-start gap-3 mb-6 cursor-pointer text-left group">
            <div className="relative mt-0.5">
              <input
                type="checkbox"
                checked={lgpdAccepted}
                onChange={(e) => setLgpdAccepted(e.target.checked)}
                className="sr-only"
              />
              <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 ${lgpdAccepted ? "bg-yellow-400 border-yellow-400" : "bg-transparent border-white/40 group-hover:border-yellow-400/60"}`}>
                {lgpdAccepted && (
                  <svg className="w-3 h-3 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            </div>
            <span className="text-xs text-white/70 leading-relaxed">
              Li e concordo com os <strong className="text-white">termos de uso</strong> e a{" "}
              <strong className="text-white">política de privacidade</strong> da Câmara Municipal.
            </span>
          </label>

          {/* Botões */}
          <div className="flex flex-col gap-3">
            {/* Google */}
            <button
              onClick={() => signIn("google")}
              disabled={!lgpdAccepted}
              className="group w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-gray-800 font-semibold py-3 px-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-white/20 hover:scale-[1.02] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Entrar com Google
            </button>

            {/* Facebook */}
            <button
              onClick={() => signIn("facebook")}
              disabled={!lgpdAccepted}
              className="group w-full flex items-center justify-center gap-3 bg-[#1877F2] hover:bg-[#166FE5] text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Entrar com Facebook
            </button>
          </div>

          {/* Rodapé do card */}
          <p className="mt-6 text-xs text-white/30">
            📶 Rede WiFi pública — uso responsável
          </p>
        </div>
      </div>

      {/* Modal LGPD */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-[#0d1f3c] border border-white/20 rounded-2xl shadow-2xl max-w-md w-full p-6 max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: "fadeIn 0.3s ease" }}
          >
            <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              🔒 Política de Privacidade — LGPD
            </h2>
            <div className="text-sm text-white/70 space-y-3">
              <p><span className="text-yellow-400 font-semibold">Controlador:</span> Câmara Municipal de Presidente Médici — RO</p>
              <p><span className="text-yellow-400 font-semibold">Finalidade:</span> Registro de acesso à rede WiFi pública para segurança e auditoria.</p>
              <p><span className="text-yellow-400 font-semibold">Dados coletados:</span> Nome, e-mail, foto de perfil e endereço MAC do dispositivo.</p>
              <p><span className="text-yellow-400 font-semibold">Base legal:</span> Art. 7º, II — Lei nº 13.709/2018 (cumprimento de obrigação legal).</p>
              <p><span className="text-yellow-400 font-semibold">Retenção:</span> 5 anos conforme legislação aplicável.</p>
              <p><span className="text-yellow-400 font-semibold">Compartilhamento:</span> Não compartilhado com terceiros, exceto por ordem judicial.</p>
              <p><span className="text-yellow-400 font-semibold">Seus direitos:</span> Acesso, correção e exclusão mediante solicitação ao setor de TI.</p>
              <p><span className="text-yellow-400 font-semibold">Contato DPO:</span> ti@camaramedici.ro.leg.br</p>
            </div>
            <button
              onClick={() => setShowModal(false)}
              className="mt-6 w-full bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-2 rounded-xl transition-all duration-200 hover:scale-[1.02]"
            >
              Entendi e Fechar
            </button>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </main>
  );
}
