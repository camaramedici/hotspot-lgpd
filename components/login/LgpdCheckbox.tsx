// components/login/LgpdCheckbox.tsx
interface Props {
  accepted: boolean;
  onChange: (value: boolean) => void;
  onOpenModal: () => void;
}

export default function LgpdCheckbox({ accepted, onChange, onOpenModal }: Props) {
  return (
    <>
      <div className="bg-blue-900/40 border border-blue-400/30 rounded-xl p-3 mb-5 text-left">
        <p className="text-xs text-center text-blue-200 font-semibold mb-1">🔒 Aviso de Privacidade — LGPD</p>
        <p className="text-xs text-justify text-blue-300 leading-relaxed">
          Ao acessar esta rede, seus dados serão registrados conforme a{" "}
          <strong className="text-white">Lei nº 13.709/2018</strong>.{" "}
          <button
            onClick={onOpenModal}
            className="text-yellow-300 underline hover:text-yellow-100 transition font-bold text-sm text-right bg-yellow-400/10 px-1.5 py-0.5 rounded hover:bg-yellow-400/20"
          >
            Saiba mais
          </button>
        </p>
      </div>

      <label className="flex items-start gap-3 mb-6 cursor-pointer text-left group">
        <div className="relative mt-0.5 shrink-0">
          <input
            type="checkbox"
            checked={accepted}
            onChange={(e) => onChange(e.target.checked)}
            className="sr-only"
          />
          <div
            className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 ${
              accepted
                ? "bg-yellow-400 border-yellow-400"
                : "bg-transparent border-white/40 group-hover:border-yellow-400/60"
            }`}
          >
            {accepted && (
              <svg className="w-3 h-3 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
        </div>
        <span className="text-xs text-white/70 leading-relaxed">
          Li e concordo com os{" "}
          <strong className="text-white">termos de uso</strong> e a{" "}
          <strong className="text-white">política de privacidade</strong> da Câmara Municipal.
        </span>
      </label>
    </>
  );
}
