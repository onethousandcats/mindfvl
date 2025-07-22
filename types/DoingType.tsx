export type DoingType = {
  title: string;
  completed: string[];
  frequency: string;
  duration?: string; // Optional, as not all doings may have a duration
};
