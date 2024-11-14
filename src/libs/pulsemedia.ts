import resolveResponse from "contentful-resolve-response";

const base_url = process.env.CONTENTFULL_BASE_URL;
const spaceId = process.env.CONTENTFULL_BASE_ID;
const token = process.env.CONTENTFULL_TOKEN;

export const getPulseMed = async () => {
  try {
    if (!base_url || !spaceId || !token) {
      throw new Error("Environment variables are not set correctly.");
    }

    const res = await fetch(
      `${base_url}/spaces/${spaceId}/environments/master/entries?access_token=${token}&content_type=pulseWeb`,
      { next: { revalidate: 60 } }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    const data = await res.json();

    const result = resolveResponse(data);

    console.log(result);

    return result;
  } catch (error) {
    console.error("Error fetching Pulse Media:", error);
    return null;
  }
};
