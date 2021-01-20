import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from '../components/login';
import FormScreen from '../components/form';

const Stack = createStackNavigator({
    Login: {
        screen: LoginScreen,
    },
    Form: {
        screen: FormScreen,
    }
});

export default createAppContainer(Stack);
