// third-party
import { FormattedMessage } from "react-intl";

// assets
import {
  DashboardOutlined,
  CustomerServiceOutlined,
  AreaChartOutlined,
  TableOutlined,
  ForkOutlined,
  SnippetsOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import {
	 Map,
	Payment, 
	PeopleOutline,
	ReceiptOutlined,
	ChatBubbleOutline,
	WarehouseOutlined,
	AssessmentOutlined
} from "@mui/icons-material";
// type
import { NavItemType } from "@/types/menu";

// icons
const icons = {
  DashboardOutlined,
  CustomerServiceOutlined,
  AreaChartOutlined,
  TableOutlined,
  ForkOutlined,
  SnippetsOutlined,
  ShopOutlined,
  Map,
  Payment,
	PeopleOutline,
	ReceiptOutlined,
	ChatBubbleOutline,
	WarehouseOutlined,
	AssessmentOutlined
};

// ==============================|| MENU ITEMS - APPLICATIONS ||============================== //

export const dashboard: NavItemType = {
  id: "dashboard",
  title: "dashboard" ,
  type: "item",
  url: "/apps/chat",
  icon: icons.DashboardOutlined,
  breadcrumbs: false,
};
export const general: NavItemType = {
  id: "general",
  title: "general",
  type: "group",
  children: [
    {
      id: "dashboard",
      title: "dashboard",
      type: "item",
      url: "/",
      icon: icons.DashboardOutlined,
      breadcrumbs: false,
    },
    {
      id: "analytics",
      title: "analytics",
      type: "item",
      icon: icons.AssessmentOutlined,
      url: "/analytic",
      breadcrumbs: false,
    }
  ],
};

export const application: NavItemType = {
  id: "application",
  title: "Application",
  type: "group",
  children: [
    {
      id: "customer",
      title: "customer" ,
      type: "item",
      url: "/customer",
      icon: icons.PeopleOutline,
      breadcrumbs: true,
    },
    {
      id: "garage",
      title: "garage",
      type: "item",
      icon: icons.WarehouseOutlined,
      url: "/garage",
      breadcrumbs: true,
			// caption: "Manage garages in system"
    },
    {
      id: "invoice",
      title: "invoice",
      type: "item",
      icon: icons.ReceiptOutlined,
      url: "/invoice",
      breadcrumbs: true,
			// caption: "Manage garages in system"
    },
    {
      id: "chat",
      title: "chat",
      type: "item",
      icon: icons.ChatBubbleOutline,
      url: "/inbox",
      breadcrumbs: false,
			// caption: "Manage garages in system"
    },
  ],
};
