import { RouterProvider } from 'react-router';
import routes from './routes/route';

function App() {
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
