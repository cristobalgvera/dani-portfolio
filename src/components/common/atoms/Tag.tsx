import { FC } from 'react';

interface TagProps {
  tag: string | number;
}

export const Tag: FC<TagProps> = ({ tag }) => (
  <span
    data-testid="tag"
    className="px-2 py-1 mt-3 ml-1 rounded-lg border border-gray-500 text-sm"
  >
    {tag}
  </span>
);
