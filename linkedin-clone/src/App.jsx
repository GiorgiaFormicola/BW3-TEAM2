import { Provider } from "react-redux";
import ProfilePage from "./components/ProfilePage";
import MyNavbar from "./components/MyNavbar";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store/index";

function App() {
  return (
    <Provider store={store}>
      <MyNavbar />
      <ProfilePage></ProfilePage>
      <BrowserRouter>
        <MyNavbar />
        <ProfilePage></ProfilePage>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
