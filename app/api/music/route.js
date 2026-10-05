// app/api/music/route.js
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const term = searchParams.get("term");

  try {
    const res = await fetch(
      `https://itunes.apple.com/search?term=${encodeURIComponent(term)}&entity=song&limit=6`,
      { next: { revalidate: 3600 } } // Cache 1 jam
    );

    if (!res.ok) {
      return NextResponse.json({ error: "Gagal mengambil data musik" }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Terjadi kesalahan server" }, { status: 500 });
  }
}