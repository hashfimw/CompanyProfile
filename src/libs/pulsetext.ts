import resolveResponse from "contentful-resolve-response";

const base_url = process.env.NEXT_PUBLIC_CONTENTFULL_BASE_URL;
const spaceId = process.env.NEXT_PUBLIC_CONTENTFULL_BASE_ID;
const token = process.env.NEXT_PUBLIC_CONTENTFULL_TOKEN;

export const getPulseText = async () => {
  try {
    const res = await fetch(
      `${base_url}/spaces/${spaceId}/environments/master/entries?access_token=${token}&content_type=pulseText`,
      { next: { revalidate: 60 } }
    );
    console.log("Response status:", res.status);

    if (!res.ok) {
      console.error("Failed to fetch data:", res.statusText);
      return null;
    }

    const data = await res.json();
    console.log("Raw Data from Contentful:", data);

    const result = resolveResponse(data);
    console.log("Resolved Data:", result);

    return result;
  } catch (error) {
    console.error("Error fetching Pulse Text:", error);
    return null;
  }
};

export const getPulseTextBySlug = async (slug: string) => {
  try {
    const res = await fetch(
      `${base_url}/spaces/${spaceId}/environments/master/entries?access_token=${token}&content_type=pulseText&fields.slug=${slug}&limit=3`,
      { next: { revalidate: 60 } }
    );
    console.log("Response status:", res.status);

    if (!res.ok) {
      console.error("Failed to fetch data:", res.statusText);
      return null;
    }

    const data = await res.json();
    console.log("Raw Data from Contentful:", data);

    const result = resolveResponse(data);
    console.log("Resolved Data:", result);

    return result;
  } catch (error) {
    console.error("Error fetching Pulse Text by slug:", error);
    return null;
  }
};
