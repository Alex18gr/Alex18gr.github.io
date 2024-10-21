export interface WorkExperience {
  key?: any,
  duration: {
    from: Date,
    to?: Date,
  },
  company: string,
  positions: WorkPosition[],
}

export interface WorkPosition {
  companyName: string;
  duration: {
    from: Date,
    to?: Date,
  },
  positionTitle: string,
  positionType: string,
  location: string,
  description?: string,
}
