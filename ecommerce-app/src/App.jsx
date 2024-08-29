import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from './routes';
import { DefaultLayout } from './components/layouts';
import { Fragment } from 'react';
function App() {
  return (
    <div>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.page;
          let Layout = DefaultLayout;
          if (route.layout === null) {
            Layout = Fragment;
          }
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
