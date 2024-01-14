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
import { Map, Payment } from "@mui/icons-material";
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
  Payment
};

// ==============================|| MENU ITEMS - APPLICATIONS ||============================== //

export const dashboard: NavItemType = {
  id: "dashboard",
  title: <FormattedMessage id="dashboard" />,
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
      title: <FormattedMessage id="dashboard" />,
      type: "item",
      url: "/dashboard",
      icon: icons.DashboardOutlined,
      breadcrumbs: false,
    },
    {
      id: "analytics",
      title: "analytics",
      type: "item",
      icon: icons.SnippetsOutlined,
      url: "/order/list",
      breadcrumbs: true,
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
      title: <FormattedMessage id="dashboard" />,
      type: "item",
      url: "/dashboard",
      icon: icons.DashboardOutlined,
      breadcrumbs: false,
    },
    {
      id: "Garage",
      title: "garage",
      type: "item",
      icon: icons.SnippetsOutlined,
      url: "/garage",
      breadcrumbs: true,
    }
  ],
};
