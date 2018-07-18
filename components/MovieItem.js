import React from 'react';
import {View,Text,Image,StyleSheet,TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  container : {
    flex: 1,
    height : 120,
    flexDirection : 'row',
    paddingLeft : 5,
  },
  
  image : {
    width : 120,
    height : 120,
    borderRadius : 5,
  },
  textStyle:{
    position:"absolute",
    fontSize:15,
    color:'white',
    bottom:10,
  }
   
})

export default class MovieItem extends React.Component {
  render(){
    
    return(
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.onPressed(this.props.index)}>
              <Image 
                style={styles.image}
                source={{uri:this.props.item['im:image'][2]['label']}}
              />
              <Text style={styles.textStyle}>{this.props.item['im:name'].label}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}