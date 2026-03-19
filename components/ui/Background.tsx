// components/ui/Background.tsx
export default function Background({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#0f172a] relative overflow-hidden">

      {/* Imagem de fundo — Desktop */}
      <div
        className="absolute inset-0 hidden md:block bg-cover bg-center opacity-100"
        style={{ backgroundImage: "url('/images/bg_desktop.png')" }}
      />

      {/* Imagem de fundo — Mobile */}
      <div
        className="absolute inset-0 block md:hidden bg-cover bg-center opacity-100"
        style={{ backgroundImage: "url('/images/bg_mobile.png')" }}
      />

      {/* Efeitos de luz */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
}
