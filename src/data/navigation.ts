export interface NavLink {
  name: string;
  path: string;
}

export const navLinks: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'Rides', path: '/rides' },
   { name: 'Bike Rides', path: '/bikerides' },  
  { name: 'Calendar', path: '/calendar' },
  { name: 'Contact', path: '/contact' },
];
