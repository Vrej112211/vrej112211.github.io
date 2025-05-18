import {createBrowserRouter, RouterProvider, Navigate, Outlet, useLocation} from 'react-router-dom';
import PagesRoot from './inner/pages/pagesRoot/PagesRoot';
import MainPage from './inner/pages/mainPage/MainPage';
import {Provider} from 'react-redux';
import store from './inner/store/store';

function App() {

  const router = createBrowserRouter([
    {
      path: '/', 
      element: <PagesRoot />,
      children: [
        {
          path: '/',
          element: <MainPage />
        }
      ]
    }
  ])

  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
