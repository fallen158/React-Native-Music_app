import getTabBarIcon from '../components/TabBarIcon';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator
} from 'react-navigation';
import HomeStack from '../screens/Home';
import BrowseStack from '../screens/Browse';
import VideoStack from '../screens/Video';
import SearchStack from '../screens/Search';
import RadioStack from '../screens/Radio';

const HomeNavigationStack = createStackNavigator(
  {
    HomeStack: {
      screen: HomeStack
    }
  },
  {
    model: 'modal'
  }
);

const BrowseNavigationStack = createStackNavigator(
  {
    HomeStack: {
      screen: BrowseStack
    }
  },
  {
    model: 'modal'
  }
);

const VideoNavigationStack = createStackNavigator(
  {
    HomeStack: {
      screen: VideoStack
    }
  },
  {
    model: 'modal'
  }
);

const RadioNavigationStack = createStackNavigator(
  {
    HomeStack: {
      screen: RadioStack
    }
  },
  {
    model: 'modal'
  }
);

const TabNavigation = createBottomTabNavigator(
  {
    Home: {
      screen: HomeNavigationStack
    },
    Browse: {
      screen: BrowseNavigationStack
    },
    Search: {
      screen: SearchStack
    },
    Radio: {
      screen: RadioNavigationStack
    },
    'Your Library': {
      screen: VideoNavigationStack
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => getTabBarIcon(navigation, tintColor)
    }),
    tabBarOptions: {
      activeTintColor: '#ffffff',
      inactiveTintColor: '#b0b0b0',
      activeBackgroundColor: '#282828',
      inactiveBackgroundColor: '#282828'
    }
  }
);

const RootStact = createSwitchNavigator({
  Main: {
    screen: TabNavigation
  }
});

export default RootStact;
