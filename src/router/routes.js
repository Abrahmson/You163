import Home from '../pages/Home';
import Category from '../pages/Category';
import Shiwu from '../pages/Shiwu';
import ShopCart from '../pages/ShopCart';
import Profile from '../pages/Profile';

export default [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/shiwu',
    component: Shiwu
  },
  {
    path: '/shopcart',
    component: ShopCart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/',
    redirect: '/home'
  }
]