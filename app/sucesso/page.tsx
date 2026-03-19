// app/sucesso/page.tsx
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import SucessoCard from "@/components/sucesso/SucessoCard";
import Background from "@/components/ui/Background";

export default async function SucessoPage() {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/");

  return (
    <Background>
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-sm">
          <SucessoCard session={session} />
        </div>
      </div>
    </Background>
  );
}
