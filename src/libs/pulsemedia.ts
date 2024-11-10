import resolveResponse from "contentful-resolve-response";

const base_url = process.env.CONTENTFULL_BASE_URL;
const spaceId = process.env.CONTENTFULL_BASE_ID;
const token = process.env.CONTENTFULL_TOKEN;

export const getPulseMed = async () => {
  try {
    // Memastikan environment variables tersedia
    if (!base_url || !spaceId || !token) {
      throw new Error("Environment variables are not set correctly.");
    }

    // Melakukan fetch data dari Contentful API
    const res = await fetch(
      `${base_url}/spaces/${spaceId}/environments/master/entries?access_token=${token}&content_type=pulseWeb`,
      { next: { revalidate: 60 } }
    );

    // Menangani status HTTP yang tidak berhasil
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    // Parsing response JSON
    const data = await res.json();

    // Memproses response menggunakan resolveResponse
    const result = resolveResponse(data);

    // Menampilkan hasil response untuk debugging
    console.log(result);

    return result;
  } catch (error) {
    // Menangani error dengan menampilkan pesan di console
    console.error("Error fetching Pulse Media:", error);
    return null; // Mengembalikan null jika terjadi error
  }
};
