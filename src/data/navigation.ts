export interface NavLink {
  name: string;
  path: string;
}

export const navLinks: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'Rides', path: '/rides' },
  { name: 'Calendar', path: '/calendar' },
  { name: 'Contact', path: '/contact' },
];
