// components/ui/LgpdModal.tsx
import { LGPD_INFO } from "@/lib/social";

interface Props {
  onClose: () => void;
}

export default function LgpdModal({ onClose }: Props) {
  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-[#0d1f3c] border border-white/20 rounded-2xl shadow-2xl max-w-md w-full p-6 max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: "fadeIn 0.3s ease" }}
      >
        <h2 className="text-lg font-bold text-white mb-4">
          🔒 Política de Privacidade — LGPD
        </h2>
        <div className="text-sm text-white/70 space-y-3">
          {[
            ["Controlador", LGPD_INFO.controller],
            ["Finalidade", LGPD_INFO.purpose],
            ["Dados coletados", LGPD_INFO.data],
            ["Base legal", LGPD_INFO.legal],
            ["Retenção", LGPD_INFO.retention],
            ["Compartilhamento", LGPD_INFO.sharing],
            ["Seus direitos", LGPD_INFO.rights],
            ["Contato DPO", LGPD_INFO.dpo],
          ].map(([label, value]) => (
            <p key={label}>
              <span className="text-yellow-400 font-semibold">{label}:</span>{" "}
              {value}
            </p>
          ))}
        </div>
        <button
          onClick={onClose}
          className="mt-6 w-full bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-2 rounded-xl transition-all duration-200 hover:scale-[1.02]"
        >
          Entendi e Fechar
        </button>
      </div>
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
