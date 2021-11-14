import { FC } from 'react';
import Image, { ImageProps } from 'next/image';

interface ProjectImageProps extends ImageProps {
  src: string;
  alt: string;
}

export const ProjectImage: FC<ProjectImageProps> = ({ src, alt }) => {
  return <Image role="img" src={src} alt={alt} width={350} height={300} />;
};
