import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
//=============================================
import Calculator from '../Calculator/Calculator';
import GlobalStyles from '../../styles/global'
import { store, persistor } from '../../redux/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Calculator />
        </PersistGate>
      </Provider>
      <GlobalStyles />
    </>
  )
}

export default App;
