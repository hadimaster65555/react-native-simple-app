import React from 'react';
import { Image, FlatList, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "Hadi",
          image: "http://i.pravatar.cc/150?img=1"
        },
        {
          name: "Master",
          image: "http://i.pravatar.cc/150?img=2"
        },
        {
          name: "James",
          image: "http://i.pravatar.cc/150?img=3"
        }
      ]
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          style={{width: '100%'}}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, separators}) => (
            <View style={{paddingVertical: 100, borderBottomWidth: 1}}>
              <Image style={{width:150, height:150}} source={{uri: item.image}}/>
              <Text>{item.name}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
