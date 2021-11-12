export interface IHeaderLink {
  href: string;
  title: string;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: 'noreferrer' | 'noopener' | 'noreferrer noopener';
}
