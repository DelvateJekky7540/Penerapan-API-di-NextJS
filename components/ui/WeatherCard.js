// components/WheaterCard.js
"use client";

import { useState, useEffect } from "react";
import { 
  WiDaySunny, 
  WiDayCloudy, 
  WiCloudy, 
  WiFog, 
  WiShowers, 
  WiRain, 
  WiThunderstorm 
} from "react-icons/wi";


function getWeatherIcon(code) {
  switch (code) {
    case 0:
      return { label: "Cerah", icon: <WiDaySunny className="text-4xl text-yellow-500" /> };
    case 1:
    case 2:
      return { label: "Cerah\nBerawan", icon: <WiDayCloudy className="text-4xl text-yellow-400" /> };
    case 3:
      return { label: "Berawan", icon: <WiCloudy className="text-4xl text-gray-400" /> };
    case 45:
    case 48:
      return { label: "Berkabut", icon: <WiFog className="text-4xl text-gray-300" /> };
    case 51:
    case 53:
    case 55:
      return { label: "Gerimis", icon: <WiShowers className="text-4xl text-blue-300" /> };
    case 61:
    case 63:
    case 65:
    case 80:
    case 81:
    case 82:
      return { label: "Hujan", icon: <WiRain className="text-4xl text-blue-500" /> };
    case 95:
    case 96:
    case 99:
      return { label: "Hujan Petir", icon: <WiThunderstorm className="text-4xl text-purple-600" /> };
    default:
      return { label: "Cerah", icon: <WiDaySunny className="text-4xl text-yellow-500" /> };
  }
}

export default function WheaterCard() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const res = await fetch("/api/weather");
        const data = await res.json();
        setWeather(data);
      } catch (err) {
        console.error("Gagal memuat cuaca:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, []);

  if (loading) return <div className="p-2 border rounded-xl max-w-xs text-center">Memuat cuaca...</div>;
  if (!weather || !weather.current) return <div className="p-2 border rounded-xl max-w-xs text-center">Gagal memuat data.</div>;

  const { temperature_2m, weather_code } = weather.current;
  const { temperature_2m: tempUnit } = weather.current_units;
  
  // weatherInfo adalah objek: { label: "...", icon: <Wi... /> }
  const weatherInfo = getWeatherIcon(weather_code);

  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-full transition-colors">
      <span className="flex items-center justify-center">{weatherInfo.icon}</span>
      <span className="text-xs font-semibold text-gray-700">
        {temperature_2m}{tempUnit}
      </span>
      <span className="text-[10px] text-center font-bold text-gray-500 hidden whitespace-pre-line sm:inline">
         {weatherInfo.label}
      </span>
    </div>
  );
}