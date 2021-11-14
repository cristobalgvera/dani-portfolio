import Head from 'next/head';
import { FC } from 'react';
import { Header } from '../organisms/header/Header';

interface LayoutProps {
  title?: string;
}

export const Layout: FC<LayoutProps> = ({ children, title }) => (
  <div className="my-10 mx-auto max-w-screen-lg text-gray-100">
    <Head>
      <title data-testid="document-title">{title ?? 'Daniela Cocuera'}</title>
      <meta name="description" content="Portafolio de Daniela Corcuera" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    {children}
  </div>
);
