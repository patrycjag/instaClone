import React, {Component} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Container, Content, Icon, Thumbnail, Header, Left, Right, Body } from 'native-base';

import CardComponent from '../CardComponent'

class HomeTab extends Component {

  render() {
    return (
      <Container style={styles.container}>
          <Header>
              <Left><Icon name='ios-camera-outline' style={{ paddingLeft:5 }}/></Left>
              <Body><Text style = {{fontWeight: 'bold', fontSize: 22}}> Instagram </Text></Body>
              <Right><Icon name='ios-send-outline' style={{ paddingRight:5 }}/></Right>
          </Header>
        <Content>

          <View style ={{height:100}}>
              <View style = {{flex:1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 7}}>
                  <Text style = {{fontWeight: 'bold'}}>Stories</Text>
                  <View style= {{flexDirection:'row', 'alignItems':'center'}}>
                      <Icon name = "md-play" style={{fontSize: 14}}></Icon>
                      <Text style = {{fontWeight: 'bold'}}>Watch all</Text>
                  </View>
              </View>
              <View style={{flex: 3}}>
                <ScrollView
                  horizontal={true}
                  showHorizontalScrollIndicator={false}
                  contentContainerStyle={{
                    alignItems: 'center',
                    paddingStart: 5,
                    paddingEnd: 5
                  }}>
                  <Thumbnail
                      style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                      source={require('../../plan2018.png')}/>
                </ScrollView>
              </View>
          </View>


          <CardComponent imageSource="1" likes="101"/>
          <CardComponent imageSource="2" likes="121"/>
          <CardComponent imageSource="3" likes="103"/>
        </Content>
      </Container>
    );
  }
}

export default HomeTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
