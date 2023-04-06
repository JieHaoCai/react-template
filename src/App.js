import { Provider } from 'react-redux';
import Router from './router'
import store from './store';
import ErrorBoundary from './components/error/ErrorBoundary';
function App() {
  return (
    <ErrorBoundary>
        <div className="App">
            <Provider store={store}>
              <Router />
            </Provider>
        </div>
    </ErrorBoundary>
  );
}

export default App;
