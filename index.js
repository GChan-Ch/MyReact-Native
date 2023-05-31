/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import CoreComponent from './src/CoreComponent';
import DesainTampilan from './src/DesainTampilan';
import state from './src/state';
import testing from './src/testing';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => CoreComponent);

