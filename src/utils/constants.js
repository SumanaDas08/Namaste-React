 export const CDN_URL = 
"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

 export const LOGO_URL = 
"https://img.magnific.com/free-vector/restaurant-tasty-food-logo-design_460848-10307.jpg?semt=ais_hybrid&w=740&q=80"

export const MENU_API =
"https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&restaurantId=";

export const getItemPrice = (info) =>
  (info?.price ?? info?.defaultPrice ?? 0) / 100;

