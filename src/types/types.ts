export type SocialItem = {
  icon: string;
  link: string;
};

export type MainData = {
  imgSrc: string;
  imgName: string;
  title: string;
  text1: string;
  text2: string;
  card?: {
    title: string;
    text: string;
  };
  social: SocialItem[];
};

export type HeaderItem = {
  title: string;
  link: string;
};

export type AboutData = {
  title: string;
  subtitle: string;
  imgSrc: string;
  imgName: string;
  text: string[];
  description: string;
};

export type ProjectDetails = {
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

export type ProjectSection = {
  title: string;
  project_button: string;
  code_button: string;
  projects: ProjectDetails[];
};

export type ExperienceDetails = {
  name: string;
  text: string[];
};

export type ExperienceSection = {
  title: string;
  experiences: ExperienceDetails[];
};

export type LocaleData = {
  header: HeaderItem[];
  main: MainData;
  experience: ExperienceSection;
  projects: ProjectSection;
  about: AboutData;
};
