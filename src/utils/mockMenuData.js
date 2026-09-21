const makeMenu = (name, cuisines, cost, items) => ({
  cards: [
    { card: { card: { info: { name, cuisines, costForTwoMessage: cost } } } },
    {},
    {
      groupedCard: {
        cardGroupMap: {
          REGULAR: {
            cards: [
              {}, {},
              ...items.map((category) => ({
                card: {
                  card: {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                    ...category,
                  },
                },
              })),
            ],
          },
        },
      },
    },
  ],
});

const mockMenuData = {
  "934128": makeMenu("KFC", ["Burgers", "Fast Food"], "₹400 for two", [
    {
      title: "Burgers", itemCards: [
        { card: { info: { id: "k1", name: "Zinger Burger", price: 19900, description: "Crispy chicken fillet burger", imageId: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200", itemAttribute: { vegClassifier: "NON_VEG" }, ribbon: { text: "Recommended" } } } },
        { card: { info: { id: "k2", name: "Veg Crunch Burger", price: 14900, description: "Crispy veg patty burger", imageId: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=200", itemAttribute: { vegClassifier: "VEG" } } } },
      ]
    },
    {
      title: "Chicken", itemCards: [
        { card: { info: { id: "k3", name: "Hot & Crispy Chicken", price: 24900, description: "4 pieces of crispy fried chicken", imageId: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=200", itemAttribute: { vegClassifier: "NON_VEG" }, ribbon: { text: "Recommended" } } } },
        { card: { info: { id: "k4", name: "Chicken Popcorn", price: 17900, description: "Bite-sized crispy chicken", imageId: "https://images.unsplash.com/photo-1562967914-608f82629710?w=200", itemAttribute: { vegClassifier: "NON_VEG" } } } },
      ]
    },
    {
      title: "Sides", itemCards: [
        { card: { info: { id: "k5", name: "Coleslaw", price: 5900, description: "Creamy coleslaw", imageId: "https://images.unsplash.com/photo-1604909052743-94e838986d24?w=200", itemAttribute: { vegClassifier: "VEG" } } } },
        { card: { info: { id: "k6", name: "Pepsi", defaultPrice: 4900, description: "Chilled soft drink", imageId: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=200", itemAttribute: { vegClassifier: "VEG" } } } },
      ]
    },
  ]),

  "621140": makeMenu("McDonald's", ["American", "Fast Food"], "₹400 for two", [
    {
      title: "Burgers & Wraps", itemCards: [
        { card: { info: { id: "m1", name: "McAloo Tikki", price: 9900, description: "Spiced potato patty burger", imageId: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=200", itemAttribute: { vegClassifier: "VEG" }, ribbon: { text: "Recommended" } } } },
        { card: { info: { id: "m2", name: "McChicken", price: 13900, description: "Tender chicken burger", imageId: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200", itemAttribute: { vegClassifier: "NON_VEG" } } } },
      ]
    },
    {
      title: "Fries & Sides", itemCards: [
        { card: { info: { id: "m3", name: "French Fries", price: 11900, description: "Golden crispy fries", imageId: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=200", itemAttribute: { vegClassifier: "VEG" }, ribbon: { text: "Recommended" } } } },
        { card: { info: { id: "m4", name: "Hash Brown", price: 7900, description: "Crispy potato hash brown", imageId: "https://images.unsplash.com/photo-1604909052743-94e838986d24?w=200", itemAttribute: { vegClassifier: "VEG" } } } },
      ]
    },
    {
      title: "Desserts", itemCards: [
        { card: { info: { id: "m5", name: "McFlurry Oreo", price: 13900, description: "Creamy ice cream with Oreo", imageId: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=200", itemAttribute: { vegClassifier: "VEG" } } } },
      ]
    },
  ]),

  "469200": makeMenu("Starbucks Coffee", ["Beverages", "Cafe"], "₹400 for two", [
    {
      title: "Hot Coffees", itemCards: [
        { card: { info: { id: "s1", name: "Cappuccino", price: 32500, description: "Espresso with steamed milk foam", imageId: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=200", itemAttribute: { vegClassifier: "VEG" }, ribbon: { text: "Recommended" } } } },
        { card: { info: { id: "s2", name: "Caffe Latte", price: 34500, description: "Espresso with steamed milk", imageId: "https://images.unsplash.com/photo-1561047029-3000c68339ca?w=200", itemAttribute: { vegClassifier: "VEG" } } } },
      ]
    },
    {
      title: "Cold Drinks", itemCards: [
        { card: { info: { id: "s3", name: "Cold Brew", price: 38500, description: "Slow-steeped cold coffee", imageId: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=200", itemAttribute: { vegClassifier: "VEG" }, ribbon: { text: "Recommended" } } } },
        { card: { info: { id: "s4", name: "Frappuccino", price: 42500, description: "Blended iced coffee drink", imageId: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=200", itemAttribute: { vegClassifier: "VEG" } } } },
      ]
    },
    {
      title: "Snacks", itemCards: [
        { card: { info: { id: "s5", name: "Blueberry Muffin", price: 27500, description: "Freshly baked muffin", imageId: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=200", itemAttribute: { vegClassifier: "VEG" } } } },
        { card: { info: { id: "s6", name: "Croissant", price: 24500, description: "Buttery flaky pastry", imageId: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=200", itemAttribute: { vegClassifier: "VEG" } } } },
      ]
    },
  ]),

  "157316": makeMenu("Rolling Crunchys", ["Italian", "Pizzas"], "₹399 for two", [
    {
      title: "Pizzas", itemCards: [
        { card: { info: { id: "r1", name: "Margherita Pizza", price: 29900, description: "Classic tomato and mozzarella", imageId: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=200", itemAttribute: { vegClassifier: "VEG" }, ribbon: { text: "Recommended" } } } },
        { card: { info: { id: "r2", name: "Pepperoni Pizza", price: 37900, description: "Loaded with pepperoni slices", imageId: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=200", itemAttribute: { vegClassifier: "NON_VEG" } } } },
      ]
    },
    {
      title: "Pastas", itemCards: [
        { card: { info: { id: "r3", name: "Penne Arrabbiata", price: 24900, description: "Spicy tomato pasta", imageId: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=200", itemAttribute: { vegClassifier: "VEG" }, ribbon: { text: "Recommended" } } } },
        { card: { info: { id: "r4", name: "Chicken Alfredo", price: 31900, description: "Creamy white sauce pasta", imageId: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=200", itemAttribute: { vegClassifier: "NON_VEG" } } } },
      ]
    },
  ]),

  "106173": makeMenu("Shree Kunj", ["Sweets", "South Indian"], "₹250 for two", [
    {
      title: "Sweets", itemCards: [
        { card: { info: { id: "sk1", name: "Gulab Jamun", price: 8000, description: "Soft milk dumplings in sugar syrup", imageId: "https://images.unsplash.com/photo-1666189143370-b5e1e4f5e9e1?w=200", itemAttribute: { vegClassifier: "VEG" }, ribbon: { text: "Recommended" } } } },
        { card: { info: { id: "sk2", name: "Rasgulla", price: 8000, description: "Spongy cottage cheese balls", imageId: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=200", itemAttribute: { vegClassifier: "VEG" } } } },
      ]
    },
    {
      title: "South Indian", itemCards: [
        { card: { info: { id: "sk3", name: "Masala Dosa", price: 12000, description: "Crispy dosa with spiced potato filling", imageId: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=200", itemAttribute: { vegClassifier: "VEG" }, ribbon: { text: "Recommended" } } } },
        { card: { info: { id: "sk4", name: "Idli Sambar", price: 9000, description: "Steamed rice cakes with lentil soup", imageId: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=200", itemAttribute: { vegClassifier: "VEG" } } } },
      ]
    },
  ]),

  "463113": makeMenu("Shirose Restaurant", ["South Indian", "Chinese"], "₹250 for two", [
    {
      title: "South Indian", itemCards: [
        { card: { info: { id: "sh1", name: "Uttapam", price: 11000, description: "Thick rice pancake with toppings", imageId: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=200", itemAttribute: { vegClassifier: "VEG" }, ribbon: { text: "Recommended" } } } },
        { card: { info: { id: "sh2", name: "Vada Sambar", price: 9000, description: "Crispy lentil donuts with sambar", imageId: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=200", itemAttribute: { vegClassifier: "VEG" } } } },
      ]
    },
    {
      title: "Chinese", itemCards: [
        { card: { info: { id: "sh3", name: "Veg Fried Rice", price: 15000, description: "Wok tossed rice with vegetables", imageId: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=200", itemAttribute: { vegClassifier: "VEG" }, ribbon: { text: "Recommended" } } } },
        { card: { info: { id: "sh4", name: "Chicken Manchurian", price: 19000, description: "Crispy chicken in manchurian sauce", imageId: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=200", itemAttribute: { vegClassifier: "NON_VEG" } } } },
      ]
    },
  ]),

  "713585": makeMenu("Zingiber", ["Mangalorean", "Indian"], "₹400 for two", [
    {
      title: "Starters", itemCards: [
        { card: { info: { id: "z1", name: "Fish Fry", price: 28000, description: "Spiced Mangalorean style fish fry", imageId: "https://images.unsplash.com/photo-1519984388953-d2406bc725e1?w=200", itemAttribute: { vegClassifier: "NON_VEG" }, ribbon: { text: "Recommended" } } } },
        { card: { info: { id: "z2", name: "Prawn Ghee Roast", price: 35000, description: "Prawns in spicy ghee roast masala", imageId: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=200", itemAttribute: { vegClassifier: "NON_VEG" } } } },
      ]
    },
    {
      title: "Main Course", itemCards: [
        { card: { info: { id: "z3", name: "Chicken Curry", price: 30000, description: "Mangalorean style chicken curry", imageId: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=200", itemAttribute: { vegClassifier: "NON_VEG" }, ribbon: { text: "Recommended" } } } },
        { card: { info: { id: "z4", name: "Dal Tadka", price: 18000, description: "Yellow lentils with tempering", imageId: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=200", itemAttribute: { vegClassifier: "VEG" } } } },
      ]
    },
  ]),

  "463457": makeMenu("Pathsala Cafe & Restro", ["Beverages", "Snacks", "American"], "₹500 for two", [
    {
      title: "Beverages", itemCards: [
        { card: { info: { id: "p1", name: "Cold Coffee", price: 18000, description: "Chilled blended coffee", imageId: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=200", itemAttribute: { vegClassifier: "VEG" }, ribbon: { text: "Recommended" } } } },
        { card: { info: { id: "p2", name: "Mango Shake", price: 16000, description: "Fresh mango milkshake", imageId: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=200", itemAttribute: { vegClassifier: "VEG" } } } },
      ]
    },
    {
      title: "Snacks", itemCards: [
        { card: { info: { id: "p3", name: "Club Sandwich", price: 22000, description: "Triple decker sandwich", imageId: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=200", itemAttribute: { vegClassifier: "VEG" }, ribbon: { text: "Recommended" } } } },
        { card: { info: { id: "p4", name: "Loaded Nachos", price: 24000, description: "Nachos with cheese and salsa", imageId: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=200", itemAttribute: { vegClassifier: "VEG" } } } },
      ]
    },
  ]),
};

export default mockMenuData;
