// app/api/hotspot/connect/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";

export async function GET(request: Request) {
  const session = await getServerSession(authOptions); // ← corrigido
  const { searchParams } = new URL(request.url);

  const mac      = searchParams.get('mac');
  const ip       = searchParams.get('ip');
  const mikrotikIp = searchParams.get('mikrotik');

  // Se não autenticado ou sem MAC, volta para o login
  if (!session || !mac) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  try {
    // Grava log de auditoria (LGPD — retenção 5 anos)
    await prisma.log.create({
      data: {
        userId:     (session.user as any).id,
        macAddress: mac,
        ipAddress:  ip || '0.0.0.0',
      },
    });

    // Monta URL de liberação do MikroTik
    // O MikroTik usa o MAC como username e uma senha configurada no perfil
    if (!mikrotikIp) {
      return NextResponse.json(
        { error: 'IP do MikroTik não informado' },
        { status: 400 }
      );
    }

    const mikrotikLoginUrl =
      `http://${mikrotikIp}/login?` +
      `username=${encodeURIComponent(mac)}&` +
      `password=${encodeURIComponent(process.env.HOTSPOT_PASSWORD ?? 'visitante')}`;

    return NextResponse.redirect(mikrotikLoginUrl);

  } catch (error) {
    console.error('Erro ao gravar log LGPD:', error);
    return NextResponse.json(
      { error: 'Falha na auditoria' },
      { status: 500 }
    );
  }
}
