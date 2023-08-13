import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import routes from './routes/routes';

function App() {
  return (
    <Routes>
      {routes.map((parentRoute, index) => (
        <Route
          key={index}
          path={parentRoute.path}
          element={parentRoute.component}
        >
          {parentRoute.children.map((childRoute, childIndex) => (
            <Route
              key={childIndex}
              path={childRoute.path}
              element={childRoute.auth?<Navigate to={'/login'}/>:childRoute.element}
            />
          ))}
        </Route>
      ))}
    </Routes>
  );
}

export default App;
