import React, {useEffect} from 'react';
import { Provider } from 'react-redux';

import globalStore from './redux/globalStore';
import AppRouter from './router/AppRouter';
import { setUser } from './redux/actions/Users.actions';

const App = (props) => {
  const store = globalStore();  
    
  useEffect(() => {
    store.subscribe(() => {
      const user = store.getState().users;
      localStorage.setItem('user',JSON.stringify(user));
    })
  }, [store] )

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if(user){
      store.dispatch(setUser(user));
    }
  }, [])

    return( 
      <Provider store={store}>
        <AppRouter />
      </Provider>
    )
};

export default App;
