import { FC } from 'react';

interface SpinnerProps {
  fullscreen?: boolean;
}

export const Spinner: FC<SpinnerProps> = ({ fullscreen }) => (
  <div
    className={`flex justify-center items-center ${fullscreen && 'h-screen'}`}
  >
    <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-pink-500"></div>
  </div>
);
