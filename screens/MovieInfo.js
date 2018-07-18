import React from 'react';
import {View,Text,StyleSheet,Image,ScrollView,Button} from 'react-native';

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : 'white',
       
    },
    image : {
      width : 170,
      height : 170,
      borderRadius : 10,
    },
    textFont:{
      color:'black'
    },
});

export default class MovieInfo extends React.Component {
    
     static navigationOptions = ({ navigation }) => ({
      title: navigation.getParam('movie','default')['im:name'].label,
      headerLeft: (
        <Button
          title="Back"
          color="blue"
          onPress={() => navigation.goBack()}
        />
      ),
      headerStyle: {
        backgroundColor: 'blue',
      },
      headerTintColor: 'white',
    });
    
    movie = this.props.navigation.getParam('movie','default')
      
    render(){
        return(
          
            <View style = {styles.container}>
               <ScrollView>
                  <View style = {styles.container}>
                    <Image
                      style={styles.image}
                      source = {{uri: this.movie['im:image'][2].label }}
                    />
                    <Text style={styles.textFont}>Artist : {this.movie['im:artist'].label}</Text>
                    <Text style={styles.textFont}> Name : {this.movie['im:name'].label}</Text>
                    <Text style={styles.textFont}>Category : {this.movie['category'].attributes.label}</Text>
                    <Text style={[...{paddingHorizontal : 20},styles.textFont]}>Summary : {this.movie['summary'].label}</Text>
                   </View>
                </ScrollView>
            </View>
          
        );
    }
}