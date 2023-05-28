
import SignOutIcon from "./assets/SignOutIcon.svg";
import ProfileIcon from "./assets/ProfileIcon.png";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import dashh from "./assets/dashh.png"
import settings from "./assets/settings.png";
import Members from "./pages/Members";
import Case from "./assets/Case.png"
import Management from "./pages/management";


import MenuIcon from "./assets/MenuIcon.svg";
const routes = [
  {
    label: "계기반",
    path: "/",
    icon: dashh,
    activeIcon: dashh,
    component: Dashboard,
  },
  {
    label: "회원상세",
    path: "/member-management",
    icon: ProfileIcon,
    activeIcon: ProfileIcon,
    component: Members,
  },
  {
    label: "관리",
    path: "/management",
    icon: Case,
    activeIcon: Case,
    component: Management,
  },
  {
    label: "환경",
    path: "/settings",
    icon: settings,
    activeIcon: settings,
    component: Settings,
  },
  {
    label: "Sign Out",
    path: "/sign-out",
    icon: SignOutIcon,
    activeIcon: SignOutIcon,
  },
];

export default routes;