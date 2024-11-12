import { API_URL } from "../app/(home)/page";

async function getVideos(id: string) {
  const response = await fetch(`${API_URL}/${id}/videos`);
  console.log(`Fetching videos: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return response.json();
  throw new Error("something broke...");
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>;
}
