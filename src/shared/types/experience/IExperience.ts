import { Tag } from '../common/Tag';

export interface IExperience {
  companyName: string;
  role: string;
  startDate: string;
  endDate?: string;
  description: string[];
  skills: Tag[];
  companyLink?: string;
}
