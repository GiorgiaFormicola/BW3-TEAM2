import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./App.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import ProfilePage from "./components/ProfilePage";
import MyFooter from "./components/MyFooter";
function App() {
  return (
    <Provider store={store}>
      <ProfilePage></ProfilePage>
      <MyFooter></MyFooter>
    </Provider>
  );
}

export default App;
