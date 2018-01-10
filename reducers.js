import { GOBACK_ACTION, FETCH_REQUEST, FETCH_DATA_SUCESS, SELECT_RESTAURANT, SHOW_DETAIL } from "./actions";
export default function reducers(state, action) {
    let newState = Object.assign({}, state);
    switch(action.type) {
        case FETCH_REQUEST:
            newState.isFetching = true;
            break;
        case GOBACK_ACTION:
            newState.isFetching=false;
            newState.showDetail = false;
            break;
        case FETCH_DATA_SUCESS:
            newState.isFetching=false;
            newState.showDetail = false;
            action.data.businesses.sort((a,b)=>{
				if(a.distance < b.distance) return -1;
				else if(a.distance > b.distance) return 1;
				return 0;
			});
            newState.restaurants = Object.assign({},action.data);
            newState.businesses = [...newState.restaurants.businesses];
            newState.locatoin = "List";
            break;
        case SELECT_RESTAURANT:
            newState.showDetail = true;
            newState.restaurant = action.payload;
            break;
        case SHOW_DETAIL:
            newState.showDetail = true;
            break;
        default:
            return state;
    }
    return newState;
}
