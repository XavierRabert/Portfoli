export type projectDetails = {
  imgSrc: string;
  imgSrcFallback?: string;
  imgName: string;
  webLink: string;
  codeLink?: string;
  text: string;
  showProject: boolean;
  category?: string;
  status?: string;
  stack?: string[];
};

export type experienceDetails = {
  name: string;
  text: string[];
};
