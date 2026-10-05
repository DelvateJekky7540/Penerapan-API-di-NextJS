
export async function GET() {
    const url =
        "https://worldtimeapi.org/api/timezone/Asia/Jakarta";

    try {
        const response = await fetch(url, {
            cache: "no-store",
            signal: AbortSignal.timeout(10000),
        });

        if (!response.ok) {
            throw new Error(
                `WorldTimeAPI mengembalikan status ${response.status}`
            );
        }

        const data = await response.json();

        return Response.json({
            datetime: data.datetime,
            timezone: data.timezone,
            utc_offset: data.utc_offset,
        });
    } catch (error) {
        console.error("WorldTimeAPI Error:", error);

        return Response.json(
            {
                error: "Gagal mengambil waktu dari WorldTimeAPI",
                message: error.message,
            },
            {
                status: 500,
            }
        );
    }
}
