import Home from "../container/Home/Home.jsx"
import Login from "../container/Login/Login.jsx"
import Register from "../container/Register/Register.jsx"

const routes = [
  {
    path: '/login',
    component: Login,
    requiresAuth: false,
  },
  {
    path: '/register',
    component: Register,
    requiresAuth: false,
  },
  {
    path: '/home',
    component: Home,
    requiresAuth: true, //需要登陆后才能跳转的页面
  },
]
export default routes