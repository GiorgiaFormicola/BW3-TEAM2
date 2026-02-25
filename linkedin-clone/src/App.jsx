import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./App.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import ProfilePage from "./components/ProfilePage";
import MyNavbar from "./components/MyNavbar";
//import HomePage from "./components/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import JobsPage from "./components/JobsPage";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route
            path="/jobs"
            // element={<JobsPage />}
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
