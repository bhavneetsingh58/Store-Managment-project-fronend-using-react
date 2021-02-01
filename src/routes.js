import OrderData from "components/CustomComponents/OrderData" 
import ManufacturerDashboard from "views/ManufacturerDashboard"
import ProductsCRUD from "views/ProductsCRUD";


var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-single-02",
    component: ManufacturerDashboard,
    layout: "/manufacturer",
  },   
  
  {
    path: "/Products",
    name: "Products",
    icon: "nc-icon nc-single-02",
    component: ProductsCRUD,
    layout: "/manufacturer",
  }, 
  {
    path: "/Orders",
    name: "Orders",
    icon: "nc-icon nc-single-02",
    component: OrderData,
    layout: "/manufacturer",
  }, 

  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   icon: "nc-icon nc-single-02",
  //   component: Dashboard,
  //   layout: "/admin",
  // },

   
];
export default routes;
