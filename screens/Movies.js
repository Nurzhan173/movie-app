import { View, Button } from 'react-native';
import MoviesTable from '../components/MoviesTable';
import { ThemeContext } from '../App';

export default class Movies extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Movies',
    headerLeft: (
      <ThemeContext.Consumer>
        {theme => (
          <Button 
          title="Light" 
          color="blue" 
          onPress={theme.toggleTheme} />
        )}
      </ThemeContext.Consumer>
    ),
    headerRight: (
      <ThemeContext.Consumer>
        {theme => (
          <Button
            title="Dark"
            color="blue"
            onPress={() => {
              console.log('clicked');
              theme.toggleThemeDark();
            }}
          />
        )}
      </ThemeContext.Consumer>
    ),

    headerStyle: {
      backgroundColor: 'blue',
    },
    headerTitleStyle: {
      color: 'white',
    },
    headerBackTitleStyle: {
      color: 'white',
    },
    headerTintColor: 'white',
  });

  state = {
    movies: [],
  };

  getMovies = () => {
    return fetch(
      'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/limit=10/json'
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          movies: responseJson.feed.entry,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleOnPressed = index => {
    this.props.navigation.navigate('Detail', {
      movie: this.state.movies[index],
    });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    return (
      <View>
      <ThemeContext.Consumer>
        {theme => {
          console.log('theme', theme);
          return (
            <View style={theme.color}>
              <MoviesTable
                onPressed={this.handleOnPressed}
                _movies={this.state.movies}
              />
            </View>
          );
        }}
      </ThemeContext.Consumer>
      </View>
    );
  }
}
