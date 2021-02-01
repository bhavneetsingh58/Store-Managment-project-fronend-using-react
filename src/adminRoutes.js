
//import DailyAttendance from "views/DailyAttendance";
import AdminDashboard from "views/AdminDashboard"
import PostEX from "components/CustomComponents/PostEX.js"


var routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: "nc-icon nc-single-02",
    component: AdminDashboard,
    layout: "/admin",
  },
   
];
export default routes;
