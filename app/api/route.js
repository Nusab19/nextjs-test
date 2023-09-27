import { NextResponse } from "next/server";

export async function GET(req) {
  const data = {
    ok: true,
    ip: req.query?.clientIp ?? "127.0.0.1",
    ip2: req.headers.get("x-real-ip") ?? "not-found",
    message: "Hello from the API",
  };
  return new NextResponse(JSON.stringify(data, null, 2));
}
