import { Route, Routes } from "react-router-dom";

import Register from "./components/User/Register";
import Terms from "./components/User/Terms";
import Login from "./components/User/Login";
import Forget from "./components/User/Forget";
import Home from "./components/User/Home";
import About from "./components/User/About";
import UserNavbar from "./components/User/UserNavbar";
import Insert from "./components/User/Insert";
import Update from "./components/User/Update";
import View from "./components/Admin/View";
import Donations from "./components/User/Donations";
import Donationcard from "./components/User/Donationcard";
import UserProfile from "./components/User/UserProfile";
import Footer from "./components/User/Footer";
//Agent Pages
import Agentlogin from "./components/Agent/Agentlogin";
import Agentprofile from "./components/Agent/Agentprofile";
import AgentNavBar from "./components/Agent/AgentNavbar";
import AgentHome from "./components/Agent/AgentHome";
//Admin pages
import Adminnav from "./components/Admin/Adminnav";
import Adminreq from "./components/Admin/Adminreq";
import Adminview from "./components/Admin/Adminview";
import Adminusers from "./components/Admin/Adminusers";
import Hireagent from "./components/Admin/Hireagent";
import Adminagents from "./components/Admin/Adminagents";
import CityAgents from "./components/Admin/admincitywise";
import Paymentinsert from "./components/Admin/Paymentinsert";

function App() {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <div>
            <Login></Login>
          </div>
        }
      ></Route>
      <Route
        exact
        path="/register"
        element={
          <div>
            <Register></Register>
          </div>
        }
      ></Route>
      <Route
        exact
        path="/forget"
        element={
          <div>
            <Forget></Forget>
          </div>
        }
      ></Route>
      <Route
        exact
        path="/home"
        element={
          <div>
            <UserNavbar></UserNavbar>
            <Home></Home>
            <Footer></Footer>
          </div>
        }
      ></Route>
      <Route
        exact
        path="/aboutus"
        element={
          <div>
            <UserNavbar></UserNavbar>
            <About></About>
            <Footer></Footer>
          </div>
        }
      ></Route>
      <Route
        exact
        path="/termsandconditions"
        element={
          <div>
            <Terms></Terms>
          </div>
        }
      ></Route>
      <Route
        exact
        path="/donate"
        element={
          <div>
            <UserNavbar></UserNavbar>
            <Insert></Insert>
            <Footer></Footer>
          </div>
        }
      ></Route>
      <Route
        exact
        path="/update"
        element={
          <div>
            <UserNavbar></UserNavbar>
            <Update></Update>
            <Footer></Footer>
          </div>
        }
      ></Route>
      <Route
        exact
        path="/view"
        element={
          <div>
            <UserNavbar></UserNavbar>
            <View></View>
            <Footer></Footer>
          </div>
        }
      ></Route>
      <Route
        exact
        path="/donations"
        element={
          <div>
            <UserNavbar></UserNavbar>
            <Donations></Donations>
            <Footer></Footer>
          </div>
        }
      ></Route>
      <Route
        exact
        path="/card"
        element={
          <div>
            <Donationcard></Donationcard>
          </div>
        }
      ></Route>
      <Route
        exact
        path="/userprofile"
        element={
          <div>
            <UserNavbar></UserNavbar>
            <UserProfile></UserProfile>
            <Footer></Footer>
          </div>
        }
      ></Route>
      <Route
        exact
        path="/Agentlogin"
        element={
          <div>
            <Agentlogin></Agentlogin>
          </div>
        }
      ></Route>
      <Route
        exact
        path="/agenthome"
        element={
          <div>
            <AgentNavBar></AgentNavBar>
            <AgentHome></AgentHome>
          </div>
        }
      ></Route>
      <Route
        exact
        path="/agentprofile"
        element={
          <div>
            <AgentNavBar></AgentNavBar>
            <Agentprofile></Agentprofile>
          </div>
        }
      ></Route>
      <Route
        exact
        path="/admin"
        element={
          <div>
            <Adminnav></Adminnav>
            <Adminreq></Adminreq>
          </div>
        }
      ></Route>
      <Route
        exact
        path="/adminview"
        element={
          <div>
            <Adminnav></Adminnav>
            <Adminview></Adminview>
          </div>
        }
      ></Route>
      <Route
        exact
        path="/adminusers"
        element={
          <div>
            <Adminnav></Adminnav>
            <Adminusers></Adminusers>
          </div>
        }
      ></Route>
      <Route
        exact
        path="/Hireagent"
        element={
          <div>
            <Adminnav></Adminnav>
            <Hireagent></Hireagent>
          </div>
        }
      ></Route>
      <Route
        exact
        path="/Adminagents"
        element={
          <div>
            <Adminnav></Adminnav>
            <Adminagents></Adminagents>
          </div>
        }
      ></Route>
      <Route
        exact
        path="/admincitywise"
        element={
          <div>
            <Adminnav></Adminnav>
            <CityAgents></CityAgents>
          </div>
        }
      ></Route>
      <Route
        exact
        path="/payment"
        element={
          <div>
            <Adminnav></Adminnav>
            <Paymentinsert></Paymentinsert>
          </div>
        }
      ></Route>
    </Routes>
  );
}
export default App;
