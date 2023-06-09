import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Fragment, useEffect } from "react";
import { createBrowserHistory } from "history";
import { useDispatch, useSelector } from "react-redux";
import { publicRoutes } from "./routes";
import { getPendingOrder } from "./store/slices/orderSlice";

function App() {
  const history = createBrowserHistory();
  const { list } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  // Get Pending Order
  useEffect(() => {
    dispatch(getPendingOrder());
  }, [JSON.stringify(list)]);
  console.log(list);

  return (
    <Router history={history}>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            let childArr;

            let Layout = null;
            if (route.child !== undefined) {
              childArr = route.child;
            }
            if (route.layout) {
              Layout = route.layout;
            } else {
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
              >
                {childArr !== undefined &&
                  childArr.map((item, index) => {
                    const Child = item.component;
                    return (
                      <Route key={index} path={item.path} element={<Child />} />
                    );
                  })}
              </Route>
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
