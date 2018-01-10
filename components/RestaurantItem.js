import React, { Component } from 'react'
import {ListItem,Left,Right,Icon,Text, Body} from 'native-base';
import {connect} from 'react-redux'
import * as actions from "../actions"



export class RestaurantItem extends Component{
    render(){
        return (
             <ListItem key={this.props.restaurant.name} onPress={this.props.selectRestaurant}>
                <Left>
                <Body>
                <Text>{this.props.restaurant.name}</Text>
                <Text note>{(Number(this.props.restaurant.distance / 1000).toFixed(2))} KM</Text>
                </Body>
                </Left>
                <Right>
                    <Icon name="arrow-forward" />
                </Right>
            </ListItem>
        )
    };
};

const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        selectRestaurant: () => dispatch(actions.selectRestaurant(ownProps.restaurant)),
    };
  };
export default connect(null,mapDispatchToProps)(RestaurantItem);
