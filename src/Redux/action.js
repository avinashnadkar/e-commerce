import axios from 'axios';

//////////////////////////////login and signup actions///////////////////////////

//manage phone number input state
export const loginInputHandler = (val,name) => {
    return {type : "handleLoginInput",payload:{value:val,name:name}}
}

//toggle address input box
export const addressBoxToggle = () => {
    return {type:"toggleAddressBox"}
}

//Is User logged in
export const isUserLoggedIn = (payload) => {
      return {type : "isUserLoggedIn", payload }
}

//change input state
export const signupInputHandler = (val,name) => {
    return {type:"handleSignupInput", payload : {value:val,name:name}}
}

//set user info after login and signup
export function setUserInfo(payload){
    return {type:"setUserInfo",payload}
}

/////Middle wares

//signup user network request
export function signup(body) {

    return (dispatch) => {

      return axios.post('http://localhost:5432/user/register', body)
      .then(function (response) {
        dispatch(isUserLoggedIn(true))
        let result = JSON.parse(JSON.stringify(response.data.results))
        dispatch(setUserInfo(result))
      })
      .catch(function (error) {
        console.log(error);
      });

    };
}

/////////////////////////product and cart actions//////////////////////////

//Add product to cart
export const addToCart = (product) => {
    return {type:"addToCart", payload:product}
}

//Increase product quantity
export const increaseQty = (product) => {
    return {type:"increaseQty", payload:product}
}

//Decrease product quantity
export const decreaseQty = (product) => {
    return {type:"decreaseQty", payload:product}
}

