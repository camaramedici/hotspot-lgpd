// app/page.tsx
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import LoginCard from "@/components/login/LoginCard";
import Background from "@/components/ui/Background";

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/sucesso");

  return (
    <Background>
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-sm">
          <LoginCard />
        </div>
      </div>
    </Background>
  );
}
