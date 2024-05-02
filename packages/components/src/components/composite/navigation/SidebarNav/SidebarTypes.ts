export interface SidebarNavProps {
  // Heading for sidebar
  heading: string;
  // Items in the sidebar
  items: any[];
  // current slug representing the current page
  currentSlug: string;
  // if true the sidebar will have sticky behavior on the page
  sticky?: boolean;
}
