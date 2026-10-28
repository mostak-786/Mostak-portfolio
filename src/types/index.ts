export type SkillCategory = 'Languages' | 'Tools & Workflows' | 'Core Computer Science' | 'Professional & Transferable';

export type SkillLevel = 'Beginner / Learning' | 'Foundational' | 'Elementary' | 'Practicing';

export interface SkillItem {
  name: string;
  category: SkillCategory;
  level: SkillLevel;
  percentage: number; // For subtle visual indicator (e.g. 40-65% honest range)
  description: string;
  focusAreas: string[];
  icon: string;
}

export type ProjectStatus = 'Proposed Idea' | 'In Development' | 'Planned Project';

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  status: ProjectStatus;
  category: string;
  description: string;
  learningGoals: string[];
  features: string[];
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  isUpcoming: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  status: string;
  placementFocus: string;
  overview: string;
  coreModules: {
    name: string;
    description: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: string;
  overview: string;
  transferableSkills: string[];
  responsibilities: string[];
}

export interface PersonalInfo {
  fullName: string;
  preferredName: string;
  role: string;
  headline: string;
  subheading: string;
  university: string;
  degree: string;
  location: string;
  careerGoal: string;
  placementYear: string;
  heroIntro: string;
  aboutStory: string[];
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  cvFileName: string;
}
