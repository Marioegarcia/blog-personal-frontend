// Layout
import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic";

// Admin Pages
import AdminHome from "../pages/Admin";
import AdminBlog from "../pages/Admin/Blog/Blog";
// Pages
import Home from "../pages/Home";
import Blog from "../pages/Blog";

// Other
import Error404 from "../pages/Error404";

const routes = [
  {
    path: "/admin",
    component: LayoutAdmin,
    exact: false,
    routes: [
      {
        path: "/admin",
        component: AdminHome,
        exact: true,
      },
      {
        path: "/admin/blog",
        component: AdminBlog,
        exact: true
      },
      {
        component: Error404,
      },
    ],
  },
  {
    path: "/",
    component: LayoutBasic,
    exact: false,
    routes: [
      {
        path: "/",
        component: Home,
        exact: true,
      },
      {
        path: "/blogs",
        component: Blog,
        exact: true
      },
      {
        path: "/blog/:url",
        component: Blog,
        exact: true
      },
      {
        component: Error404,
      },
    ],
  },
];

export default routes;
