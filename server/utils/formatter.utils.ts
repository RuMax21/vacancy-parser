import { Vacancy, RawVacancy } from "../types";

export function formatVacancy(raw: RawVacancy): Vacancy {
  return {
    id: raw.id,
    name: raw.name,
    company: raw.employer?.name || 'not specified',
    salary: raw.salary 
      ? `${raw.salary.from || ''} ${raw.salary.to || ''} ${raw.salary.currency || ''}`.trim() || 'not specified'
      : 'not specified',
    city: raw.area?.name || 'not specified',
    url: raw.alternate_url
  };
}
