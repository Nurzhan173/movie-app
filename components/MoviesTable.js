import React from 'react';
import {FlatList} from 'react-native';
import MovieItem from './MovieItem';

export default class MoviesTable extends React.Component {
  render(){
    return(
     
      <FlatList
        data = {this.props._movies}
        renderItem ={({item,index}) => (
          <MovieItem onPressed={this.props.onPressed} item = {item} index={index}/>
        )}
        numColumns={3}
        keyExtractor={(item, index) => index}
      />
    );
  }
}