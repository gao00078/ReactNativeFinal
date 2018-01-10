import React,{Component} from 'react';
import {Text, Content, H3} from 'native-base'
import {connect} from 'react-redux'

export class RestaurantDetail extends Component{

    render(){
        return(
            <Content>
                <H3>Name:{this.props.restaurant.name}</H3>
                <Text>Phone:{this.props.restaurant.phone}</Text>
                <Text>price:{this.props.restaurant.price}</Text>
                <Text>Rating:{this.props.restaurant.rating}</Text>
                <Text >Distance:{Number(this.props.restaurant.distance/1000).toFixed(2)+" km"}</Text>
            </Content>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        restaurant: state.restaurant
    };
}

export default connect(mapStateToProps)(RestaurantDetail);
