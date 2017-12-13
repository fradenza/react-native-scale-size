import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './screens/home.screen';
import CanvasScreen from './screens/canvas.screen';

export const App = StackNavigator({
  Home: { screen: HomeScreen },
  Canvas: { screen: CanvasScreen }
});

AppRegistry.registerComponent('scaleDemo', () => App);
