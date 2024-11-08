export type LinkIcon = {
  icon: JSX.Element;
  url: string;
  label: string;
  showAlways?: boolean;
  desktopOnly?: boolean;
};
export type NavLinkItem = {
  title: string;
  url: string;
  icon?: NavLinkIcon;
  showAlways?: boolean;
  mobileOnly?: boolean;
};

export type NavLinkIcon = {
  iconDown: JSX.Element;
  iconUp: JSX.Element;
};

export type collection = {
  title: string;
  link: string;
};
