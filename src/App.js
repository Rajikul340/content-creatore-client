import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { store } from "./redux/store/store";
import { routers } from "./routers/Routes";









function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={routers}></RouterProvider>
    </Provider>
  );
}

export default App;
