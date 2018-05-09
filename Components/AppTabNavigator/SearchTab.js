import React, {Component} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Icon } from 'native-base'

class SearchTab extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>SearchTab</Text>
        <Button onPress={() =>
            this.props.navigation.navigate('HomeTab')}
            title="Go to the Home Screen" />
      </View>
    );
  }
}

export default SearchTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
