import type * as Icons from "react-icons/lu";

export type NavItem = {
  icon: keyof typeof Icons;
  name: string;
  link: string;
};
