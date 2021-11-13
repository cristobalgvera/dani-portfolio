import { FC } from 'react';
import { Tag as TagType } from '../../../shared/types/common/Tag';

interface TagProps {
  tag: TagType;
}

export const Tag: FC<TagProps> = ({ tag }) => (
  <span
    data-testid="tag"
    className="px-2 py-1 self-center rounded-lg border border-gray-500 text-xs md:text-sm"
  >
    {tag}
  </span>
);
