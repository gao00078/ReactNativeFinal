
import React, { Component } from 'react';
import { connect } from "react-redux";
import { Container, Header, Content, List, ListItem, Button, Left, Right, Body, Icon, Text, Footer, FooterTab, Spinner} from 'native-base';
import RestaurantItem from './RestaurantItem';
import RestaurantDetail from './RestaurantDetail';
import * as actions from "../actions";

export class Main extends Component {
  showRestList() {
    let count = 0;
    if(!this.props.businesses) return;
    else if(this.props.showDetail!=true){
        return this.props.businesses.map((item) => {
        return <RestaurantItem key={count++} restaurant = {item} />
        })
    }
  };
  showSpinnerOrBtnText(){
    if(this.props.isFetching) {
      return <Spinner color='purple' />
  }
    else{
    return(
    <Button full onPress={this.props.fetchAddress} >
      <Text>Find restaurants nearby...</Text>
    </Button>)
    }
  }
  render() {
    if(!this.props.showDetail){
        return(
            <Container>
                <Header><Text>Local restaurants list</Text></Header>
                <Content>
                {this.showSpinnerOrBtnText()}
                {this.showRestList()}
                </Content>
                <Footer>
                <FooterTab>
                <Button full>
                    <Text>&copy; Kai Gao</Text>
                </Button>
                </FooterTab>
                </Footer>
            </Container>
        );
    } else {
        return(
            <Container>
                <Header><Text>Local restaurant list</Text></Header>
                <Content>
                <Button full>
                <Left ><Icon name='arrow-back' onPress = {this.props.goBack}/></Left>
                <Text onPress = {this.props.goBack}>Back to List</Text>
                </Button>
                <RestaurantDetail />
                </Content>
                <Footer>
                <FooterTab>
                <Button full>
                    <Text>&copy; Kai Gao</Text>
                </Button>
                </FooterTab>
                </Footer>
            </Container>
        );
    }
  }
}

const mapStateToProps = (state) => {
  return {
      businesses: state.businesses,
      isFetching: state.isFetching,
      showDetail: state.showDetail,
      restaurant: state.restaurant,
  };
};
const mapDispatchToProps = (dispatch,ownPros) => {
  return {
      fetchAddress: ()=> {dispatch(actions.getLocation())},
      goBack: ()=> dispatch(actions.goBack())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
