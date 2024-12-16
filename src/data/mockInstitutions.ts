import { Institution } from '../types/destinations';

export const mockInstitutions: Institution[] = [
  {
    id: 'harvard',
    name: 'Harvard University',
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80',
    country: 'United States',
    city: 'Cambridge',
    description: 'Harvard University is a private Ivy League research university in Cambridge, Massachusetts. Established in 1636, it is the oldest institution of higher learning in the United States.',
    accreditation: [
      'New England Commission of Higher Education',
      'Association of American Universities'
    ],
    ranking: {
      world: 1,
      country: 1
    },
    programs: {
      bachelors: 50,
      masters: 90,
      phd: 60
    },
    costs: {
      tuition: {
        min: 45000,
        max: 55000,
        currency: 'USD'
      },
      living: {
        min: 15000,
        max: 25000,
        currency: 'USD'
      }
    },
    applicationDeadlines: {
      fall: 'January 1',
      spring: 'September 1'
    },
    campusImage: 'https://images.unsplash.com/photo-1559135197-8a45ea74d367?auto=format&fit=crop&q=80',
    languages: ['English']
  },
  {
    id: 'oxford',
    name: 'University of Oxford',
    logo: 'https://images.unsplash.com/photo-1580977251946-3029f1de9758?auto=format&fit=crop&q=80',
    country: 'United Kingdom',
    city: 'Oxford',
    description: 'The University of Oxford is a collegiate research university in Oxford, England. Founded in 1096, it is the oldest university in the English-speaking world and the second-oldest continuously operating university.',
    accreditation: [
      'Privy Council',
      'Quality Assurance Agency for Higher Education'
    ],
    ranking: {
      world: 2,
      country: 1
    },
    programs: {
      bachelors: 45,
      masters: 80,
      phd: 55
    },
    costs: {
      tuition: {
        min: 25000,
        max: 40000,
        currency: 'GBP'
      },
      living: {
        min: 12000,
        max: 18000,
        currency: 'GBP'
      }
    },
    applicationDeadlines: {
      fall: 'October 15',
      spring: 'March 1'
    },
    campusImage: 'https://images.unsplash.com/photo-1548793977-f3602d88d5f2?auto=format&fit=crop&q=80',
    languages: ['English']
  },
  {
    id: 'toronto',
    name: 'University of Toronto',
    logo: 'https://images.unsplash.com/photo-1580977685258-3fbea3a3d7c9?auto=format&fit=crop&q=80',
    country: 'Canada',
    city: 'Toronto',
    description: 'The University of Toronto is a public research university in Toronto, Ontario, Canada. Founded in 1827, it is known for its groundbreaking research and innovation across multiple disciplines.',
    accreditation: [
      'Universities Canada',
      'Association of Universities and Colleges of Canada'
    ],
    ranking: {
      world: 18,
      country: 1
    },
    programs: {
      bachelors: 70,
      masters: 85,
      phd: 45
    },
    costs: {
      tuition: {
        min: 30000,
        max: 45000,
        currency: 'CAD'
      },
      living: {
        min: 15000,
        max: 22000,
        currency: 'CAD'
      }
    },
    applicationDeadlines: {
      fall: 'January 15',
      spring: 'September 1'
    },
    campusImage: 'https://images.unsplash.com/photo-1580977685275-a80a6a421c82?auto=format&fit=crop&q=80',
    languages: ['English', 'French']
  },
  {
    id: 'melbourne',
    name: 'University of Melbourne',
    logo: 'https://images.unsplash.com/photo-1580977685231-694657daf320?auto=format&fit=crop&q=80',
    country: 'Australia',
    city: 'Melbourne',
    description: 'The University of Melbourne is a public research university in Melbourne, Australia. Founded in 1853, it is Australia\'s second oldest university and the oldest in Victoria.',
    accreditation: [
      'Tertiary Education Quality and Standards Agency',
      'Universities Australia'
    ],
    ranking: {
      world: 33,
      country: 1
    },
    programs: {
      bachelors: 55,
      masters: 75,
      phd: 40
    },
    costs: {
      tuition: {
        min: 35000,
        max: 45000,
        currency: 'AUD'
      },
      living: {
        min: 20000,
        max: 30000,
        currency: 'AUD'
      }
    },
    applicationDeadlines: {
      fall: 'October 31',
      spring: 'April 30'
    },
    campusImage: 'https://images.unsplash.com/photo-1580977685258-3fbea3a3d7c9?auto=format&fit=crop&q=80',
    languages: ['English']
  },
  {
    id: 'eth-zurich',
    name: 'ETH Zürich',
    logo: 'https://images.unsplash.com/photo-1580977685264-6fd69b4c4f70?auto=format&fit=crop&q=80',
    country: 'Switzerland',
    city: 'Zürich',
    description: 'ETH Zürich is a public research university in Zürich, Switzerland. Founded in 1855, it focuses on science, technology, engineering, and mathematics, consistently ranking among the top universities worldwide.',
    accreditation: [
      'Swiss University Conference',
      'European University Association'
    ],
    ranking: {
      world: 8,
      country: 1
    },
    programs: {
      bachelors: 25,
      masters: 45,
      phd: 35
    },
    costs: {
      tuition: {
        min: 1500,
        max: 2000,
        currency: 'CHF'
      },
      living: {
        min: 22000,
        max: 28000,
        currency: 'CHF'
      }
    },
    applicationDeadlines: {
      fall: 'April 30',
      spring: 'November 30'
    },
    campusImage: 'https://images.unsplash.com/photo-1580977685258-3fbea3a3d7c9?auto=format&fit=crop&q=80',
    languages: ['German', 'English']
  }
];