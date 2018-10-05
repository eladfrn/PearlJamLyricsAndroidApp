import React from 'react';
import { createStackNavigator, } from 'react-navigation';
import AlbumsContainer from './src/components/AlbumsContainer';
import AlbumContainer from './src/components/AlbumContainer';
import SongContainer from './src/components/SongContainer';
import HeaderTitle from './src/components/HeaderTitle';


const navigationOptions = ({ navigation }) => ({
  headerTitle: <HeaderTitle title={`${navigation.state.params.title}`} />,
  headerTitleStyle: { textAlign: 'left', width: 330 },
  headerStyle: {
    backgroundColor: 'white',
  },
});

const App = createStackNavigator({
  AlbumsContainer: {
    screen: AlbumsContainer, navigationOptions: () => ({
      title: `Studio Albums`,
      headerTitleStyle: { width: 250 }
    }),
  },
  AlbumContainer: { screen: AlbumContainer, navigationOptions },
  SongContainer: { screen: SongContainer, navigationOptions }
});

export default App; 