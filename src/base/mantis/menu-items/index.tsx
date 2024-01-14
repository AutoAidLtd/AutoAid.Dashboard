// project import
// import dashboard from './dashboard';
import { NavItemType } from '@/types/menu';
import { application, general } from './@autoaid';
// ==============================|| MENU ITEMS ||============================== //

const menuItems: { items: NavItemType[] } = {
  items: [
    general,
		application
    // dashboard, widget, applications, formsTables, chartsMap, pages, other
  ]

};

export default menuItems;
