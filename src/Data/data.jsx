// herodata
import Hero1 from '../assets/Hero_Deals/hero-img1.png';
import Hero2 from '../assets/Hero_Deals/hero-img2.png';
import Hero3 from '../assets/Hero_Deals/hot-deals-img.png';
export const herodata = [
      { id: 1, title: "Daily Grocery Order and Get Express Delivery", desc: "Order your daily groceries online and enjoy express delivery straight to your doorstep. Fresh produce, essentials, and more—fast, convenient, and reliable service for your everyday needs", imageUrl: Hero1, },
      { id: 2, title: "Daily Grocery Order and Get Express Delivery", desc: "Order your daily groceries online and enjoy express delivery straight to your doorstep. Fresh produce, essentials, and more—fast, convenient, and reliable service for your everyday needs", imageUrl: Hero2, },
      { id: 3, title: "Daily Grocery Order and Get Express Delivery", desc: "Order your daily groceries online and enjoy express delivery straight to your doorstep. Fresh produce, essentials, and more—fast, convenient, and reliable service for your everyday needs", imageUrl: Hero3, },
]
// categoryData
import C1 from '../assets/Category/Category1.png';
import C2 from '../assets/Category/Category2.png';
import C3 from '../assets/Category/Category3.png';
import C4 from '../assets/Category/Category4.png';
import C5 from '../assets/Category/Category5.png';
import C6 from '../assets/Category/Category6.png';
import C7 from '../assets/Category/Category7.png';
import C8 from '../assets/Category/Category8.png';
import C9 from '../assets/Category/Category9.png';
import C10 from '../assets/Category/Category10.png';
export const categoryData = [
      { image: C1, title: "Vegetables", products: "125+ Products" },
      { image: C2, title: "Fish & Meats", products: "90+ Products" },
      { image: C3, title: "Desserts", products: "80+ Products" },
      { image: C4, title: "Drinks & Juice", products: "60+ Products" },
      { image: C5, title: "Animals Food", products: "100+ Products" },
      { image: C6, title: "Fresh Fruits", products: "70+ Products" },
      { image: C7, title: "Yummy Candy", products: "50+ Products" },
      { image: C8, title: "Dairy & Eggs", products: "45+ Products" },
      { image: C9, title: "Snacks", products: "110+ Products" },
      { image: C10, title: "Frozen Foods", products: "40+ Products" },
]
// BannerData
import B1 from '../assets/PB/promotional-banner-img1.png';
import B2 from '../assets/PB/promotional-banner-img2.png';
import B3 from '../assets/PB/promotional-banner-img3.png';
import B4 from '../assets/PB/promotional-banner-img4.png';
export const bannerData = [
      { image: B1, heading: "Everyday\nFresh Meat" },
      { image: B2, heading: "Daily Fresh\nVegetables" },
      { image: B3, heading: "Everyday\nfresh Milk" },
      { image: B4, heading: "Everyday\nFresh Fruits" },
]

// DealsContentData
import Deal1 from '../assets/Deals/Deals-img1.png';
import Deal2 from '../assets/Deals/Deals-img2.png';
export const dealsData = [
      {
            image: Deal1,
            title: "Fresh Vegetables",
            description: "Shop fresh, healthy vegetables delivered daily. Taste the garden in every bite!",
      },
      {
            image: Deal2,
            title: "Daily Snacks",
            description: "Tasty daily snacks for every craving — fresh, fun, and ready to munch!",
            className: "deals-wrap2",
      },

]

// BeastDealsData
import P1 from '../assets/BestDeals/product-img1.png';
import P2 from '../assets/BestDeals/product-img2.png';
import P3 from '../assets/BestDeals/product-img3.png';
import P4 from '../assets/BestDeals/product-img4.png';
import P5 from '../assets/BestDeals/product-img5.png';
import P6 from '../assets/BestDeals/product-img6.png';
export const beastDealsData = [
      { id: 1, image: P1, title: "Fresh Eggplant & Cucumber Mix", price: "$14.99", lessprice: "$28.99", review: "(17k)", sold: "18/35" },
      { id: 2, image: P2, title: "Organic Beets with Greens", price: "$12.99", lessprice: "$22.99", review: "(12k)", sold: "22/40" },
      { id: 3, image: P3, title: "Mixed Fresh Vegetables Pack", price: "$13.99", lessprice: "$25.99", review: "(8k)", sold: "15/25" },
      { id: 4, image: P4, title: "Sun-Maid Raisins", price: "$16.99", lessprice: "$32.99", review: "(5k)", sold: "8/15" },
      { id: 5, image: P5, title: "Doritos Spicy Sweet Chili ", price: "$28.99", lessprice: "$38.99", review: "(11k)", sold: "20/30" },
      { id: 6, image: P6, title: "Lays Classic Potato Chips", price: "$19.99", lessprice: "$34.99", review: "(15k)", sold: "25/40" },
]


// OffersData
import Offer1 from '../assets/Offer/offer-img1.png';
import Offer2 from '../assets/Offer/offer-img2.png';
export const offersData = [
      { image: Offer1, title: "$5 off your first order", description: "Delivery by 6:15am", },
      { image: Offer2, title: "$5 off your first order", description: "Delivery by 6:15am", },
]

// RecommendData
import R1 from '../assets/Recommend/product-img1.png';
import R2 from '../assets/Recommend/product-img2.png';
import R3 from '../assets/Recommend/product-img3.png';
import R4 from '../assets/Recommend/product-img4.png';
import R5 from '../assets/Recommend/product-img5.png';
import R6 from '../assets/Recommend/product-img6.png';
import R7 from '../assets/Recommend/product-img7.png';
import R8 from '../assets/Recommend/product-img8.png';
import R9 from '../assets/Recommend/product-img9.png';
import R10 from '../assets/Recommend/product-img10.png';
import R11 from '../assets/Recommend/product-img11.png';
import R12 from '../assets/Recommend/product-img12.png';
export const recommendData = [
      {
            id: 1,
            image: R1,
            title: "C-500 Antioxidant Protect Dietary Supplement",
            price: "$12.49",
            lessprice: "$24.99",
            review: "(17k)",
            sold: "18/35",
            sale: "new"
      },
      {
            id: 2,
            image: R2,
            title: "Marcel’s Modern Pantry Almond Unsweetened",
            price: "$16.99",
            lessprice: "$33.99",
            review: "(17k)",
            sold: "22/40",
            sale: "50%"
      },
      {
            id: 3,
            image: R3,
            title: "O Organics Milk, Whole, Vitamin D",
            price: "$13.49",
            lessprice: "$26.99",
            review: "(17k)",
            sold: "20/32",
            sale: "New"
      },
      {
            id: 4,
            image: R4,
            title: "Whole Grains and Seeds Organic Bread",
            price: "$8.99",
            lessprice: "$17.99",
            review: "(17k)",
            sold: "15/25",
            sale: "35%"
      },
      {
            id: 5,
            image: R5,
            title: "Lucerne Yogurt, Lowfat, Strawberry",
            price: "$10.99",
            lessprice: "$21.99",
            review: "(17k)",
            sold: "18/35",
            sale: ""
      },
      {
            id: 6,
            image: R6,
            title: "Nature Valley Whole Grain Oats and Honey Protein",
            price: "$11.49",
            lessprice: "$22.99",
            review: "(17k)",
            sold: "25/40",
            sale: "50%"
      },
      {
            id: 7,
            image: R7,
            title: "Sun-Maid Raisins, Natural & Sweet",
            price: "$7.99",
            lessprice: "$15.99",
            review: "(17k)",
            sold: "30/50",
            sale: "New"
      },
      {
            id: 8,
            image: R8,
            title: "Fresh Watermelon Juice Bottle",
            price: "$5.49",
            lessprice: "$10.99",
            review: "(17k)",
            sold: "12/20",
            sale: "50%"
      },
      {
            id: 9,
            image: R9,
            title: "Tillamook Triple Cheddar Blend Cheese",
            price: "$14.99",
            lessprice: "$29.99",
            review: "(17k)",
            sold: "14/28",
            sale: "New"
      },
      {
            id: 10,
            image: R10,
            title: "Good & Gather Farmed Atlantic Salmon",
            price: "$18.99",
            lessprice: "$37.99",
            review: "(17k)",
            sold: "20/40",
            sale: "50%"
      },
      {
            id: 11,
            image: R11,
            title: "Market Pantry 41/50 Raw Tail-Off Large Raw Shrimp",
            price: "$21.49",
            lessprice: "$42.99",
            review: "(17k)",
            sold: "18/30",
            sale: "50%"
      },
      {
            id: 12,
            image: R12,
            title: "Tropicana 100% Juice, Orange, No Pulp",
            price: "$9.99",
            lessprice: "$19.99",
            review: "(17k)",
            sold: "25/35",
            sale: "New"
      }
]

// HotDealsData
import H1 from '../assets/HotDeals/product-img1.png';
import H2 from '../assets/HotDeals/product-img2.png';
import H3 from '../assets/HotDeals/product-img3.png';
import H4 from '../assets/HotDeals/product-img4.png';
export const hotDealsData = [
      {
            id: 1,
            image: H1,
            title: "Marcel’s Modern Pantry Almond Unsweetened",
            price: "$15.99",
            lessprice: "$28.99",
            review: "(17k)",
            sold: "18/35",
            sale: "35%"
      },
      {
            id: 2,
            image: H2,
            title: "O Organics Milk, Whole, Vitamin D",
            price: "$18.99",
            lessprice: "$20.99",
            review: "(17k)",
            sold: "22/40",
            sale: "30%"
      },
      {
            id: 3,
            image: H3,
            title: "Whole Grains and Seeds Organic Bread",
            price: "$18.99",
            lessprice: "$32.99",
            review: "(17k)",
            sold: "15/25",
            sale: "New"
      },
      {
            id: 4,
            image: H4,
            title: "Tropicana 100% Juice, Orange, No Pulp",
            price: "$20.99",
            lessprice: "$30.99",
            review: "(17k)",
            sold: "8/15",
            sale: "50%"
      },
]

// VandoresData
import V1 from '../assets/Vendores/vendor-logo1.png';
import V2 from '../assets/Vendores/vendor-logo2.png';
import V3 from '../assets/Vendores/vendor-logo3.png';
import V4 from '../assets/Vendores/vendor-logo4.png';
import V5 from '../assets/Vendores/vendor-logo5.png';
import V6 from '../assets/Vendores/vendor-logo6.png';
import V7 from '../assets/Vendores/vendor-logo7.png';
import V8 from '../assets/Vendores/vendor-logo8.png';
import V9 from '../assets/Vendores/vendor-img1.png'
import V10 from '../assets/Vendores/vendor-img2.png'
import V11 from '../assets/Vendores/vendor-img3.png'
import V12 from '../assets/Vendores/vendor-img4.png'
import V13 from '../assets/Vendores/vendor-img5.png'
export const vandoresData = [
      {
            id: 1,
            title: "Organic Market",
            time: "Delivery by 6:15am",
            off: "$5 off Snack & Candy",
            vendorMain: V1,
            vendors: [
                  {
                        image: V9,
                  },
                  {
                        image: V10,
                  },
                  {
                        image: V11,
                  },
                  {
                        image: V12,
                  },
                  {
                        image: V13,
                  }
            ]
      },
      {
            id: 2,
            title: "Safeway",
            time: "Delivery by 6:15am",
            off: "$5 off Snack & Candy",
            vendorMain: V2,
            vendors: [
                  {
                        image: V9,
                  },
                  {
                        image: V10,
                  },
                  {
                        image: V11,
                  },
                  {
                        image: V12,
                  },
                  {
                        image: V13,
                  }
            ]
      },
      {
            id: 3,
            title: "Food Max",
            time: "Delivery by 6:15am",
            off: "$5 off Snack & Candy",
            vendorMain: V3,
            vendors: [
                  {
                        image: V9,
                  },
                  {
                        image: V10,
                  },
                  {
                        image: V11,
                  },
                  {
                        image: V12,
                  },
                  {
                        image: V13,
                  }
            ]
      },
      {
            id: 4,
            title: "HRmart",
            time: "Delivery by 6:15am",
            off: "$5 off Snack & Candy",
            vendorMain: V4,
            vendors: [
                  {
                        image: V9,
                  },
                  {
                        image: V10,
                  },
                  {
                        image: V11,
                  },
                  {
                        image: V12,
                  },
                  {
                        image: V13,
                  }
            ]
      },
      {
            id: 5,
            title: "Lucky Supermarket",
            time: "Delivery by 6:15am",
            off: "$5 off Snack & Candy",
            vendorMain: V5,
            vendors: [
                  {
                        image: V9,
                  },
                  {
                        image: V10,
                  },
                  {
                        image: V11,
                  },
                  {
                        image: V12,
                  },
                  {
                        image: V13,
                  }
            ]
      },
      {
            id: 6,
            title: "Arico Farmer",
            time: "Delivery by 6:15am",
            off: "$5 off Snack & Candy",
            vendorMain: V6,
            vendors: [
                  {
                        image: V9,
                  },
                  {
                        image: V10,
                  },
                  {
                        image: V11,
                  },
                  {
                        image: V12,
                  },
                  {
                        image: V13,
                  }
            ]
      },
      {
            id: 7,
            title: "Farmer Market",
            time: "Delivery by 6:15am",
            off: "$5 off Snack & Candy",
            vendorMain: V7,
            vendors: [
                  {
                        image: V9,
                  },
                  {
                        image: V10,
                  },
                  {
                        image: V11,
                  },
                  {
                        image: V12,
                  },
                  {
                        image: V13,
                  }
            ]
      },
      {
            id: 8,
            title: "Foodsco",
            time: "Delivery by 6:15am",
            off: "$5 off Snack & Candy",
            vendorMain: V8,
            vendors: [
                  {
                        image: V9,
                  },
                  {
                        image: V10,
                  },
                  {
                        image: V11,
                  },
                  {
                        image: V12,
                  },
                  {
                        image: V13,
                  }
            ]
      }
]

// BeastSaleData
import S1 from '../assets/BestSales/best-sell1.png';
import S2 from '../assets/BestSales/best-sell2.png';
import S3 from '../assets/BestSales/best-sell3.png';
import S4 from '../assets/BestSales/best-sell4.png';
export const beastSaleData = [
      {
            id: 1,
            image: S1,
            title: "Taylor Farms Broccoli Fruits",
            price: "$15.99",
            lessprice: "$28.99",
            review: "(17k)",
            sold: "18/35",
            sale: "35%"
      },
      {
            id: 2,
            image: S2,
            title: "Taylor Farms Broccoli Florets Fruits",
            price: "$18.99",
            lessprice: "$20.99",
            review: "(17k)",
            sold: "22/40",
            sale: "30%"
      },
      {
            id: 3,
            image: S3,
            title: "Taylor Farms Broccoli Florets Vegetables",
            price: "$18.99",
            lessprice: "$32.99",
            review: "(17k)",
            sold: "15/25",
            sale: "New"
      },
      {
            id: 4,
            image: S4,
            title: "Taylor Farms Broccoli Florets Fruits",
            price: "$20.99",
            lessprice: "$30.99",
            review: "(17k)",
            sold: "8/15",
            sale: "30%"
      }
]

// OrganicData
import O1 from '../assets/Organic/product-img1.png';
import O2 from '../assets/Organic/product-img2.png';
import O3 from '../assets/Organic/product-img3.png';
import O4 from '../assets/Organic/product-img4.png';
import O5 from '../assets/Organic/product-img5.png';
import O6 from '../assets/Organic/product-img6.png';
export const organicData = [
      {
            id: 1,
            image: O1,
            title: "Taylor Farms Broccoli fresh Fruits",
            price: "$15.99",
            lessprice: "$28.99",
            review: "(17k)",
            sold: "18/35",
            sale: "35%"
      },
      {
            id: 2,
            image: O2,
            title: "Taylor Farms Broccoli Florets Fruits",
            price: "$18.99",
            lessprice: "$20.99",
            review: "(17k)",
            sold: "22/40",
            sale: "30%"
      },
      {
            id: 3,
            image: O3,
            title: "Taylor Farms Broccoli Florets Vegetables",
            price: "$18.99",
            lessprice: "$32.99",
            review: "(17k)",
            sold: "15/25",
            sale: "New"
      },
      {
            id: 4,
            image: O4,
            title: "Taylor Farms Broccoli Florets Fruits",
            price: "$20.99",
            lessprice: "$30.99",
            review: "(17k)",
            sold: "8/15",
            sale: "30%"
      },
      {
            id: 5,
            image: O5,
            title: "Taylor Farms Broccoli Florets Fruits",
            price: "$20.99",
            lessprice: "$30.99",
            review: "(17k)",
            sold: "8/15",
            sale: "30%"
      },
      {
            id: 6,
            image: O6,
            title: "Taylor Farms Broccoli Florets Fruits",
            price: "$20.99",
            lessprice: "$30.99",
            review: "(17k)",
            sold: "8/15",
            sale: "30%"
      }
]


// ShortProductData
import SP1 from '../assets/ShortProducts/s1.png';
import SP2 from '../assets/ShortProducts/s2.png';
import SP3 from '../assets/ShortProducts/s3.png';
import SP4 from '../assets/ShortProducts/s4.png';
import SP5 from '../assets/ShortProducts/s5.png';
import SP6 from '../assets/ShortProducts/s6.png';
import SP7 from '../assets/ShortProducts/s7.png';
import SP8 from '../assets/ShortProducts/s8.png';
import SP9 from '../assets/ShortProducts/s9.png';
export const shortProductData = [
      {
            id: 1,
            image: SP1,
            title: "Taylor Farms Broccoli fresh Fruits",
            price: "$15.99",
            lessprice: "$28.99",
            review: "(17k)"
      },
      {
            id: 2,
            image: SP2,
            title: "Taylor Farms Broccoli Florets Fruits",
            price: "$18.99",
            lessprice: "$20.99",
            review: "(17k)"
      },
      {
            id: 3,
            image: SP3,
            title: "Taylor Farms Broccoli Florets Vegetables",
            price: "$18.99",
            lessprice: "$32.99",
            review: "(17k)"
      },
      {
            id: 4,
            image: SP4,
            title: "Taylor Farms Broccoli Florets Fruits",
            price: "$20.99",
            lessprice: "$30.99",
            review: "(17k)"
      }
]
export const TopSelling = [
      {
            id: 5,
            image: SP5,
            title: "Taylor Farms Broccoli fresh Fruits",
            price: "$15.99",
            lessprice: "$28.99",
            review: "(17k)"
      },
      {
            id: 6,
            image: SP6,
            title: "Taylor Farms Broccoli Florets Fruits",
            price: "$18.99",
            lessprice: "$20.99",
            review: "(17k)"
      },
      {
            id: 7,
            image: SP7,
            title: "Taylor Farms Broccoli Florets Vegetables",
            price: "$18.99",
            lessprice: "$32.99",
            review: "(17k)"
      },
      {
            id: 8,
            image: SP8,
            title: "Taylor Farms Broccoli Florets Fruits",
            price: "$20.99",
            lessprice: "$30.99",
            review: "(17k)"
      }

]
export const OnSale = [
      {
            id: 1,
            image: SP9,
            title: "Taylor Farms Broccoli fresh Fruits",
            price: "$15.99",
            "lessprice": "$28.99",
            "review": "(17k)"
      },
      {
            id: 2,
            image: SP2,
            title: "Taylor Farms Broccoli Florets Fruits",
            price: "$18.99",
            "lessprice": "$20.99",
            "review": "(17k)"
      },
      {
            id: 3,
            image: SP3,
            title: "Taylor Farms Broccoli Florets Vegetables",
            price: "$18.99",
            "lessprice": "$32.99",
            "review": "(17k)"
      },
      {
            id: 4,
            image: SP4,
            title: "Taylor Farms Broccoli Florets Fruits",
            price: "$20.99",
            "lessprice": "$30.99",
            "review": "(17k)"
      }
]
export const TopRated = [
      {
            id: 1,
            image: SP1,
            title: "Taylor Farms Broccoli fresh Fruits",
            price: "$15.99",
            "lessprice": "$28.99",
            "review": "(17k)"
      },
      {
            id: 2,
            image: SP3,
            title: "Taylor Farms Broccoli Florets Fruits",
            price: "$18.99",
            "lessprice": "$20.99",
            "review": "(17k)"
      },
      {
            id: 3,
            image: SP2,
            title: "Taylor Farms Broccoli Florets Vegetables",
            price: "$18.99",
            "lessprice": "$32.99",
            "review": "(17k)"
      },
      {
            id: 4,
            image: SP7,
            title: "Taylor Farms Broccoli Florets Fruits",
            price: "$20.99",
            "lessprice": "$30.99",
            "review": "(17k)"
      }
]


// BrandData
import Br1 from '../assets/Brand/brand-img1.png';
import Br2 from '../assets/Brand/brand-img2.png';
import Br3 from '../assets/Brand/brand-img3.png';
import Br4 from '../assets/Brand/brand-img4.png';
import Br5 from '../assets/Brand/brand-img5.png';
import Br6 from '../assets/Brand/brand-img6.png';
import Br7 from '../assets/Brand/brand-img7.png';
import Br8 from '../assets/Brand/brand-img8.png';

export const brandData = [
      {
            id: 1,
            image: Br1,
      },
      {
            id: 2,
            image: Br2,
      },
      {
            id: 3,
            image: Br3,
      },
      {
            id: 4,
            image: Br4,
      },
      {

            id: 5,
            image: Br5,
      },
      {
            id: 6,
            image: Br6,
      },
      {
            id: 7,
            image: Br7,
      },
      {
            id: 8,
            image: Br8,
      }
]


// ArrivalsData
import A1 from '../assets/Arrivals/product-img1.png';
import A2 from '../assets/Arrivals/product-img2.png';
import A3 from '../assets/Arrivals/product-img3.png';
import A4 from '../assets/Arrivals/product-img4.png';
import A5 from '../assets/Arrivals/product-img5.png';
import A6 from '../assets/Arrivals/product-img6.png';
export const arrivalsData = [
      {
            id: 1,
            image: A1,
            title: "Taylor Farms Broccoli fresh Fruits",
            price: "$19.99",
            lessprice: "$30.99",
            review: "(17k)",
            sold: "18/35",
            sale: "35%"
      },
      {
            id: 2,
            image: A2,
            title: "Taylor Farms Broccoli Florets Fruits",
            price: "$22.99",
            lessprice: "$29.99",
            review: "(17k)",
            sold: "22/40",
            sale: "30%"
      },
      {
            id: 3,
            image: A3,
            title: "Taylor Farms Broccoli Florets Vegetables",
            price: "$25.99",
            lessprice: "$32.99",
            review: "(17k)",
            sold: "15/25",
            sale: "New"
      },
      {
            id: 4,
            image: A4,
            title: "Taylor Farms Broccoli Florets Fruits",
            price: "$22.99",
            lessprice: "$30.99",
            review: "(17k)",
            sold: "8/15",
            sale: "30%"
      },
      {
            id: 5,
            image: A5,
            title: "Taylor Farms Broccoli Florets Fruits",
            price: "$24.99",
            lessprice: "$30.99",
            review: "(17k)",
            sold: "8/15",
            sale: "30%"
      },
      {
            id: 6,
            image: A6,
            title: "Taylor Farms Broccoli Florets Fruits",
            price: "$21.99",
            lessprice: "$30.99",
            review: "(17k)",
            sold: "8/15",
            sale: "30%"
      }
]
import Bl1 from '../assets/Blogs/blog-img1.png'
import Bl2 from '../assets/Blogs/blog-img2.png'
import Bl3 from '../assets/Blogs/blog-img3.jpg'
import Bl4 from '../assets/Blogs/blog-img4.jpg'
import Bl5 from '../assets/Blogs/blog-img5.jpg'

// BlogData
export const blogData = [
      {
            id: 1,
            image: Bl1,
            title: "Top grocery deals to save big this week",
            tag: "Offers & Discounts",
            pere: "Shopping smart means knowing where to find the best deals. Weekly grocery offers can help families save money while still enjoying fresh and quality products.",
            pere2: "Bulk-buying staples like rice, pulses, and cooking oil during discount sales can reduce monthly expenses significantly.",
            pere3: "Keep an eye on limited-time deals in fruits, vegetables, and packaged foods to maximize savings without compromising nutrition.",
            date: "July 15, 2025",
            comment: "10 Comments"
      },
      {
            id: 2,
            image: Bl2,
            title: "How online grocery apps are changing shopping",
            tag: "Digital Grocery",
            pere: "Online grocery shopping is more popular than ever, offering the convenience of browsing and purchasing essentials from home.",
            pere2: "Apps now provide features like order tracking, instant discounts, and personalized recommendations based on past purchases.",
            pere3: "With just a few taps, customers can restock their kitchen and save valuable time, making grocery shopping stress-free.",
            date: "July 16, 2025",
            comment: "7 Comments"
      },
      {
            id: 3,
            image: Bl3,
            title: "Smart ways to manage your monthly grocery budget",
            tag: "Budget Tips",
            pere: "Budgeting groceries can help prevent overspending and reduce waste. Planning meals ahead of time ensures you only buy what’s needed.",
            pere2: "Using shopping lists, comparing prices, and tracking expenses can make a huge difference in monthly savings.",
            pere3: "Digital wallets and cashback offers from grocery apps also help maximize your budget while ensuring quality purchases.",
            date: "July 17, 2025",
            comment: "12 Comments"
      },
      {
            id: 4,
            image: Bl4,
            title: "Essential packaged foods for every kitchen",
            tag: "Staples",
            pere: "Packaged foods like flour, rice, pulses, and oils are the backbone of every kitchen. Stocking them smartly ensures you’re never short of essentials.",
            pere2: "Choosing fortified and organic variants can improve health benefits while maintaining taste and quality.",
            pere3: "Always check expiry dates and storage conditions to keep packaged foods fresh and safe for long-term use.",
            date: "July 18, 2025",
            comment: "9 Comments"
      },
      {
            id: 5,
            image:Bl5,
            title: "Why fresh produce should be your first choice",
            tag: "Fruits & Vegetables",
            pere: "Fresh produce is packed with nutrients and flavors that packaged items can’t match. Seasonal fruits and vegetables are especially rich in vitamins.",
            pere2: "Buying local ensures freshness, supports farmers, and reduces carbon footprints caused by long transportation.",
            pere3: "Incorporating a colorful variety of produce in meals boosts immunity and makes food more enjoyable.",
            date: "July 19, 2025",
            comment: "6 Comments"
      }
]