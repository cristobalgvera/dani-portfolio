import Head from 'next/head';
import { FC } from 'react';

interface LayoutProps {
  title?: string;
}

export const Layout: FC<LayoutProps> = ({ children, title }) => (
  <>
    <Head>
      <title>{title ?? 'Daniela Cocuera'}</title>
      <meta name="description" content="Portafolio de Daniela Corcuera" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {children}
  </>
);
