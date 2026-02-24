import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./App.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import ProfilePage from "./components/ProfilePage";

function App() {
  return (
    <Provider store={store}>
      <ProfilePage></ProfilePage>
    </Provider>
  );
}

export default App;
