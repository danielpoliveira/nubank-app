import React from 'react';
import { StatusBar } from 'react-native';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './main/reducers';

import '~/config/ReactotronConfig';

import Routes from '~/routes';

const store = createStore(reducers);

export default () =>
<Provider store={store}>
    <StatusBar barStyle='light-content' backgroundColor="#8B10AE" />
		<Routes />
</Provider>
