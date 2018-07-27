import {Injectable} from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  short_label?: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: '',
    main: [
      {
        state: 'dashboard',
        short_label: 'D',
        name: 'Dashboard',
        type: 'sub',
        icon: 'icon-bar-chart-alt',
        children: [
          {
            state: 'dotdataanalytics',
            name: 'Analytics'
          },{
            state: 'dotdataanalyticstree',
            name: 'Feature Engineering'
          }
            ,{
                state: 'demo',
                name: 'demo'
            },

        ]
      },
        {
            state: 'basic',
            name: 'Basic Components',
            type: 'sub',
            icon: 'icon-layout-grid2-alt',
            children: [
                {
                    state: 'alert',
                    name: 'Alert'
                },
                {
                    state: 'other',
                    name: 'Other'
                },
            ]
        },

    ],
  },
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }
}
