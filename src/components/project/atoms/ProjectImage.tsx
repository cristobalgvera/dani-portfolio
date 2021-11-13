import { FC } from 'react';

interface ProjectImageProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  src: string;
  alt: string;
}

export const ProjectImage: FC<ProjectImageProps> = ({ src, alt }) => {
  return <img role="img" src={src} alt={alt} width={350} height={300} />;
};
