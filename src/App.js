import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";
import { Fragment } from "react";
// import Header from "./components/DefaultLayouts/Header";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   getOrder,
//   setOrder,
// } from "./pages/user/products/ProductDetail/productDetailSlice";
// import { useEffect } from "react";
// import Footer from "./components/DefaultLayouts/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
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
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
