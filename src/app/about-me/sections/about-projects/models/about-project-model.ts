export interface AboutProjectModel {
  title: string;
  duration: {
    from: Date,
    to?: Date,
  },
  descriptionContent: string;
  tags: string[];
}
