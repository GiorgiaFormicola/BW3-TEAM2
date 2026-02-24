import { Provider } from "react-redux";
import ProfilePage from "./components/ProfilePage";
import MyNavbar from "./components/MyNavbar";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store/index";

import MyFooter from "./components/MyFooter";
function App() {
  return (
    <Provider store={store}>
      <MyNavbar />
      <ProfilePage></ProfilePage>
      <MyFooter></MyFooter>
    </Provider>
  );
}
export default App;
