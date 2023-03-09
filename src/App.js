import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { store } from "./redux/store/store";
import { routers } from "./routes/routes";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={routers} />
    </Provider>
  );
}

export default App;
