export interface Vacancy {
  id: string;
  name: string;
  company: string;
  salary: string;
  city: string;
  url: string;
}

export interface RawVacancy {
  id: string;
  name: string;
  employer?: { name: string };
  salary:  { from?: number; to?: number; currency?: string };
  area?: { name: string };
  alternate_url: string;
}
