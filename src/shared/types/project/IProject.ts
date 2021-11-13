import { Tag } from '../common/Tag';

export interface IProject {
  title: string;
  image: string;
  description: string;
  tools: Tag[];
  github: string;
  link: string;
}
