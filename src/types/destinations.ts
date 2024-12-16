export interface SearchFilters {
  country: string;
  institution: string;
  programLevel: string;
  fieldOfStudy: string;
  tuitionRange: [number, number];
  language: string;
  duration: string;
}

export type SortOption = 'relevance' | 'ranking' | 'tuition-low' | 'tuition-high';

export interface Institution {
  id: string;
  name: string;
  logo: string;
  country: string;
  city: string;
  description: string;
  accreditation: string[];
  ranking: {
    world: number;
    country: number;
  };
  programs: {
    bachelors: number;
    masters: number;
    phd: number;
  };
  costs: {
    tuition: {
      min: number;
      max: number;
      currency: string;
    };
    living: {
      min: number;
      max: number;
      currency: string;
    };
  };
  applicationDeadlines: {
    fall: string;
    spring: string;
  };
  campusImage: string;
  languages: string[];
}