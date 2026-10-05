// app/api/weather/route.js
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const lat = searchParams.get("lat") || "-7.59833"; // Koordinat Karanganyar
  const lon = searchParams.get("lon") || "110.94444";

  try {
    // Meminta parameter temperature_2m dan weather_code
    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code`,
      {
        next: { revalidate: 600 }, // Cache data selama 10 menit
      }
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: "Gagal mengambil data cuaca" },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Terjadi kesalahan pada server" },
      { status: 500 }
    );
  }
}