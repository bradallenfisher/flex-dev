import { sideBarExampleItems } from '../../../composite/navigation/SidebarNav/example-data';

const SidebarNavHeading = 'Students';
const slug = 'Choosing a Program/Study Experience';

export const sidebarNavItem = {
  slug: slug,
  heading: SidebarNavHeading,
  items: sideBarExampleItems,
};

export const breadcrumbItems = [
  {
    linkText: 'Home',
    to: 'https://www.google.com/',
  },
  { linkText: 'Departments', to: 'https://www.google.com/' },
  { linkText: 'Electrical Engineering', to: 'https://www.google.com/' },
];
