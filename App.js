import {  createStackNavigator,} from 'react-navigation';
import AlbumsContainer from './src/components/AlbumsContainer';
import AlbumContainer from './src/components/AlbumContainer';
import SongContainer from './src/components/SongContainer';

const App = createStackNavigator({
  AlbumsContainer: {screen :AlbumsContainer },
  AlbumContainer: {screen :AlbumContainer },
  SongContainer: {screen :SongContainer }
});

export default App; 