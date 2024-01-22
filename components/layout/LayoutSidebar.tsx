import { Layout } from "antd";
import { useRouter } from "next/router";
const { Sider } = Layout;

import {
  HomeOutlined,
  ProfileOutlined,
  CompassOutlined,
  SolutionOutlined,
  CheckCircleOutlined,
  BankOutlined,
  UserAddOutlined,
  TeamOutlined,
  SecurityScanOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}
const items: MenuItem[] = [
  { key: "/", label: "Home", icon: <HomeOutlined /> },

  {
    key: "/udapMenu",
    label: "UDAP Area",
    icon: <ProfileOutlined />,
    children: [
      {
        key: "/udapMenu/discovery",
        label: "Discovery",
        icon: <CompassOutlined />,
      },
      {
        key: "/udapMenu/registration",
        label: "Registration",
        icon: <UserAddOutlined />,
      },
      {
        key: "/udapMenu/b2b",
        label: "B2B",
        icon: <BankOutlined />,
      },
      {
        key: "/udapMenu/consumer",
        label: "Consumer",
        icon: <TeamOutlined />,
      },
      {
        key: "/udapMenu/oauth",
        label: "Tier OAuth",
        icon: <SecurityScanOutlined />,
      },
    ],
  },
  {
    key: "/patientMenu",
    label: "Patient",
    icon: <SolutionOutlined />,
    children: [
      {
        key: "/patientMenu/search",
        label: "Search",
        icon: <SearchOutlined />,
      },
      {
        key: "/patientMenu/match",
        label: "Match",
        icon: <CheckCircleOutlined />,
      },
    ],
  },
];

function LayoutSidebar() {
  const router = useRouter();
  const onClick: MenuProps["onClick"] = (e) => {
    if (e.key.startsWith("/")) router.push(e.key);
  };

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      theme="light"
      width={280}
      style={{
        backgroundColor: "white",
        borderRightWidth: 0,
        position: "sticky",
        top: "64px",
        height: "calc(100vh - 64px)",
      }}
    >
      <Menu
        onClick={onClick}
        style={{ width: 280, borderRightWidth: 0 }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />
    </Sider>
  );
}

export default LayoutSidebar;
