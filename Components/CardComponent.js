import React, {Component} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';

class CardComponent extends Component {

  render() {

    const images = {
      "1": require('../1.jpg'),
      "2": require('../2.jpg'),
      "3": require('../3.jpg')
    }

    return (
      <Card>
        <CardItem>
          <Left>
              <Thumbnail source={require
              ('../6.jpg')} />
              <Body>
                  <Text> Patrycja </Text>
                  <Text note> April 04, 2018 </Text>
              </Body>
          </Left>
        </CardItem>
        <CardItem>
        <Image source={images[this.props.imageSource]} style={{height:200, width:null, flex:1}}
        />
        </CardItem>
        <CardItem style={{height:45 }}>
          <Button transparent>
          <Icon name="ios-heart-outline" style={{color:'black'}}/>
          </Button>
          <Button transparent>
          <Icon name="ios-chatbubbles-outline" style={{color:'black'}}/>
          </Button>
          <Button transparent>
          <Icon name="ios-send-outline" style={{color:'black'}}/>
          </Button>
        </CardItem>
        <CardItem style={{height:20}}>
          <Text>{this.props.likes} likes</Text>
        </CardItem>
        <CardItem>
          <Body>
          <Text>
            <Text style={{fontWeight: "900"}}>Patrycja </Text>
            Morbi ut neque est. Nullam scelerisque arcu at lorem faucibus, ac volutpat lectus sodales. In mattis odio venenatis malesuada bibendum. Integer finibus interdum orci, ultricies cursus sapien consectetur lacinia. Proin varius ligula eget arcu fringilla imperdiet. Praesent convallis sapien non dolor dignissim aliquam. Donec vehicula vitae ante a hendrerit.
          </Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

export default CardComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
