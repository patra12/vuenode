import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";
import Typography from "@/pages/Typography.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Notifications from "@/pages/Notifications.vue";
import Cms from "@/pages/Cms.vue";
import AddCms from "@/pages/AddCms.vue";
import EditCms from "@/pages/EditCms.vue";
import Login from "@/pages/loginx.vue";
import Gallery from "@/pages/Gallery";
import AddGallery from "@/pages/AddGallery";
import Slider from "@/pages/Slider";
import AddSlider from "@/pages/AddSlider";
import UpgradeToPRO from "@/pages/UpgradeToPRO.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard
      },
      {
        path: "user",
        name: "User Profile",
        component: UserProfile
      },
      {
        path: "table",
        name: "Table List",
        component: TableList
      },
      {
        path: "typography",
        name: "Typography",
        component: Typography
      },
      {
        path: "icons",
        name: "Icons",
        component: Icons
      },
      {
        path: "maps",
        name: "Maps",
        meta: {
          hideFooter: true
        },
        component: Maps
      },
      {
        path: "notifications",
        name: "Notifications",
        component: Notifications
      },
      {
        path: "cms",
        name: "CMS",
        component: Cms
      },
      {
        path: "/addcms",
        name: "addCMS",
        component: AddCms,
        props: true,
      },
      {
        path: "/editcms/:id",
        name: "editCMS",
        component: EditCms,
        props: true,
      },
      {
        path: "gallery",
        name: "Gallery",
        component: Gallery
      },
      {
        path: "addgallery",
        name: "Add Gallery",
        component: AddGallery
      },
      {
        path: "slider",
        name: "Slider",
        component: Slider
      },
      {
        path: "addslider",
        name: "Add Slider",
        component: AddSlider
      },
      {
        path: "upgrade",
        name: "Upgrade to PRO",
        component: UpgradeToPRO
      }
    ]
  }
];

export default routes;
