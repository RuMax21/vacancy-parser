import axios from 'axios';
import { SearchParams, SearchResponse } from '../types';
import { formatVacancy } from '../utils';

export async function getVacancies(params: SearchParams): Promise<SearchResponse> {
  const { text, page = 0, per_page = 10 } = params;
  const response = await axios.get(`${process.env.HH_API}/vacancies`, {
    params: { text, page, per_page: Math.min(per_page, 100) }
  });

  const total = response.data.found;
  const total_pages = Math.ceil(total / per_page);

  return {
    total,
    page: Number(page),
    per_page: Number(per_page),
    total_pages,
    items: response.data.items.map(formatVacancy)
  }
}