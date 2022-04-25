import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [

  {
    id: 1,
    label: 'Csv Upload',
    icon: 'bx-home-circle',
    subItems: [
      {
        i3: 2,
        label: 'Weather',
        link: '/weather',
        parentI2: 1,
      },
      {
        i3: 3,
        label: 'Football ',
        link: 'football',
        parentI2: 1,
      },
    ],
  },

];
