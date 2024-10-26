export interface AboutProjectModel {
  title: string;
  purpose?: string;
  duration: {
    from: Date,
    to?: Date,
  },
  descriptionContent: string;
  tags: string[];
}
