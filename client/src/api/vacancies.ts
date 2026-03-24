import { SearchResponse } from "../types";

const API_URL = process.env.API_URL;

export async function fetchVacancies(query: string, page: number): Promise<SearchResponse> {
  const response = await fetch(`${API_URL}?text=${encodeURIComponent(query)}&page=${page}$per_page=10`);

  if (!response.ok) throw new Error("Error loading");

  return response.json();
}