// PENTING: API key lama sudah terekspos. Buat key baru di openweathermap.org,
// lalu tempel di baris berikut (key lama sebaiknya dihapus/di-regenerate).
var API_KEY_CUACA = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

export default function cekCuaca() {
    var kota = document.getElementById('kotaInput').value.trim();
    var hasilDiv = document.getElementById('hasilCuaca');

    if (!kota) {
        hasilDiv.textContent = 'Ketik nama kota dulu ya.';
        return;
    }
    if (!API_KEY_CUACA) {
        hasilDiv.textContent = 'API key belum dipasang di environment variable.';
        return;
    }

    hasilDiv.textContent = 'Mencari data cuaca...';

    var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + encodeURIComponent(kota) +
        '&appid=' + API_KEY_CUACA + '&units=metric&lang=id';

    fetch(url)
        .then(function (res) {
            if (!res.ok) {
                throw new Error('Kota tidak ditemukan atau API key salah');
            }
            return res.json();
        })
        .then(function (data) {
            var ikon = 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png';
            hasilDiv.innerHTML =
                '<div style="display:flex; align-items:center; gap:10px;">' +
                '<img src="' + ikon + '" alt="ikon cuaca" style="width:60px; height:60px;">' +
                '<div>' +
                '<div style="font-size:22px; font-weight:bold;">' + Math.round(data.main.temp) + '&#176;C</div>' +
                '<div style="text-transform:capitalize;">' + data.weather[0].description + '</div>' +
                '</div>' +
                '</div>' +
                '<div style="margin-top:10px; font-size:13px; opacity:0.9;">' +
                '📍 ' + data.name + ', ' + data.sys.country + '<br>' +
                '💧 Kelembapan: ' + data.main.humidity + '%<br>' +
                '💨 Angin: ' + data.wind.speed + ' m/s<br>' +
                '🌡&#65039; Terasa seperti: ' + Math.round(data.main.feels_like) + '&#176;C' +
                '</div>';
        })
        .catch(function (err) {
            hasilDiv.textContent = 'Gagal mengambil data: ' + err.message;
        });
}