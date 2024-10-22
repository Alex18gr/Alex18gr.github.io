export interface EducationItem {
  institution: {
    name: string;
    department: string;
    location: string;
  };
  title: string;
  duration: {
    from: {
      year: string;
      month: string;
    },
    to?: {
      year: string;
      month: string;
    },
    inProgress: boolean;
  },
  description?: string;
}
