let urlInitParameter = window.location.pathname.split('/')[2];
let initState = {
    homePageProducts : [{
        "id": 1,
        "name": "Nivea Fresh Natural Deodorant for women",
        "img": "https://www.jiomart.com/images/product/150x150/490052703/nivea-fresh-natural-deodorant-for-women-150-ml-0-20210524.jpg",
        "price": 128,
        "discount": 20,
        "quantity" : 0
    },
    {
        "id": 2,
        "name": "Bagrry's Choco Fills 250 g",
        "img": "https://www.jiomart.com/images/product/150x150/590114062/bagrry-s-choco-fills-250-g-0-20210824.jpg",
        "price": 198,
        "discount": 95,
        "quantity" : 0
    },
    {
        "id": 3,
        "name": "Kesh King Ayurvedic Onion Anti-Hair..",
        "img": "https://www.jiomart.com/images/product/150x150/590324027/kesh-king-ayurvedic-onion-anti-hairfall-hair-growth-oil-100-ml-0-20210816.jpg",
        "price": 300,
        "discount": 150,
        "quantity" : 0
    },
    {
        "id": 4,
        "name": "Super Sarvottam Physically Refined..",
        "img": "https://www.jiomart.com/images/product/150x150/491504124/super-sarvottam-physically-refined-100-rice-bran-oil-1-l-0-20211202.jpg",
        "price": 178,
        "discount": 30,
        "quantity" : 0
    },{
        "id": 5,
        "name": "Surf Excel Matic Top Load Detergent..",
        "img": "https://www.jiomart.com/images/product/150x150/491441280/surf-excel-matic-top-load-detergent-powder-4-kg-get-extra-2-kg-free-0-20220216.jpg",
        "price": 1120,
        "discount": 265,
        "quantity" : 0
    },{
        "id": 6,
        "name": "Colgate Strong Teeth Dental Cream T..",
        "img": "https://www.jiomart.com/images/product/150x150/491055460/colgate-strong-teeth-dental-cream-toothpaste-buy-2-200-g-get-100-g-free-0-20211011.jpg",
        "price": 244,
        "discount": 62,
        "quantity" : 0
    },{
        "id": 7,
        "name": "Colgate Strong Teeth Dental Cream T..",
        "img": "https://www.jiomart.com/images/product/150x150/491055460/colgate-strong-teeth-dental-cream-toothpaste-buy-2-200-g-get-100-g-free-0-20211011.jpg",
        "price": 244,
        "discount": 62,
        "quantity" : 0
    }],
    categoryPageProducts : [],
    urlParam : urlInitParameter
}

const productReducer = (state=initState,action) => {

    if(action.type === "setCatProducts"){
       let data = action.payload;
       return {
           ...state,
           categoryPageProducts : [...data]
       }
    }

    if(action.type === "setUrlParam"){
        let param = action.payload;
        return {
            ...state,
            urlParam : param
        }
    }

    return state;
}

export default productReducer;