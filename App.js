import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import Movies from './screens/Movies';
import MovieInfo from './screens/MovieInfo';

const themes = {
  light: {
    backgroundColor: 'white',
  },
  dark: {
    backgroundColor: 'black',
  },
};

const ThemeContext = React.createContext();

const AppStackNavigator = createStackNavigator(
  {
    Home: Movies,
    Detail: MovieInfo,
  },       
  {
    initialRouteName: 'Home',
  }
);


export default class App extends Component {
  state = {
      color: themes.dark,
      toggleTheme: () => {
        console.log('light clicked')
        this.setState({color:themes.light})
      },
      toggleThemeDark: () =>{
        console.log('Dark clicked')
        this.setState({color:themes.dark})
      }
  }
   
  
  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <AppStackNavigator />
      </ThemeContext.Provider>
    );
  }
}
export {ThemeContext};
