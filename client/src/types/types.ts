export interface Vacancy {
  id: string;
  name: string;
  company: string;
  salary: string;
  city: string;
  url: string;
}

export interface SearchResponse {
  total: number;
  page: number;
  per_page: number;
  total_pages: number;
  items: Vacancy[];
}