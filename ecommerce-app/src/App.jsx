import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from './routes';
import { DefaultLayout, CollectionsLayout } from './components/layouts';
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
          } else if (route.layout === 'collection') {
            Layout = CollectionsLayout;
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
