import axios from "axios";
export const FETCH_REQUEST = "FETCH_REQUEST";
export const SELECT_RESTAURANT = "SELECT_RESTAURANT";
export const GET_LOCATION = "GET_LOCATION";
export const GOBACK_ACTION = "GOBACK_ACTION";
export const FETCH_DATA_SUCESS = "FETCH_DATA_SUCESS";
export const SHOW_DETAIL = "SHOW_DETAIL";
const API_KEY="Dlyj1RkyR-9QLqDnSh5elsFb-MjUtuwDPgiyipOa_HZgTRsFfYU9Q6SerpEvx-YWu4jGhMJXrhzsntyx1kPldi2sNieGMRR_D6xob4RqSMxCoLWIGetV4N2AsD49WnYx";
export function goBack(){
	return{
		type:GOBACK_ACTION,
	}
}
export function fetchRequest() {
    return {
        type: FETCH_REQUEST
    };
}
export function selectRestaurant(data) {
    return {
		type: SELECT_RESTAURANT,
		payload:data
    };
}
export function showDetailRestaurant() {
    return {
		type: SHOW_DETAIL,
    };
}
export function fetchDataSuccess(data){
	return {
		type: FETCH_DATA_SUCESS,
		data:data
	};
}
export function getLocation(){
	return (dispatch) =>{
		var options = {
			enableHighAccuracy: true,
			timeout: 4000,
			maximumAge: 0
		  };
		const geolocation = navigator.geolocation;
		geolocation.getCurrentPosition((
			position) => {
            dispatch( fetchData(position.coords));
		},
		()=>{return},
		options);
	}
}
export function fetchData(postion){
	return(dispatch)=> {
		let exactLocation = "latitude="+postion.latitude+"&longitude="+postion.longitude;
		let url = "https://api.yelp.com/v3/businesses/search?" + exactLocation;
		dispatch(fetchRequest());
		axios.get(url,{
			headers: {
			"Authorization": "Bearer "+ API_KEY,
		  }}
		).then((response) =>{
			return response;
		}).then((response)=> {
			let restaurantdata = response.data;
			dispatch(fetchDataSuccess(restaurantdata));
		}).catch(function (error) {
			console.log(error);
		  });;
    };
}
