import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { userAgent } from "next/server";

export async function GET(req) {
  const { ua } = userAgent(req);

  const headersList = headers();
  const ip = headersList.get("x-forwarded-for");

  const data = {
    ok: true,
    ip_address: ip ?? "127.0.0.1",
    user_agent: ua,
  };

  return NextResponse.json(data, { status: 200 });
}