// components/sucesso/UserInfo.tsx
import { Session } from "next-auth";

interface Props {
  session: Session;
}

export default function UserInfo({ session }: Props) {
  return (
    <div className="flex items-center gap-3 bg-white/10 border border-white/10 rounded-2xl p-4 mb-5 text-left">
      {session.user?.image && (
        <img
          src={session.user.image}
          alt="Foto de perfil"
          className="w-12 h-12 rounded-full border-2 border-yellow-400/50 shrink-0"
        />
      )}
      <div>
        <p className="font-semibold text-white">{session.user?.name}</p>
        <p className="text-xs text-white/50">{session.user?.email}</p>
        <span className="inline-flex items-center gap-1 mt-1 text-xs text-green-400 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Conectado
        </span>
      </div>
    </div>
  );
}
