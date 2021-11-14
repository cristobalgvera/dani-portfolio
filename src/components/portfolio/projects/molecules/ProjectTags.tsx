import { FC } from 'react';
import { Tag as TagType } from '../../../../shared/types/common/Tag';
import { Tag } from '../../../common/atoms/Tag';

interface ProjectTagsProps {
  tags: TagType[];
}

export const ProjectTags: FC<ProjectTagsProps> = ({ tags }) => (
  <div className="flex flex-wrap gap-y-0 gap-x-1 lg:gap-x-2">
    {tags.map((tag, index) => (
      <Tag key={index} tag={tag} />
    ))}
  </div>
);
