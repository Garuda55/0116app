import { NavLink, Route, Routes } from "react-router-dom";
import { Profile } from "./components/Profile";
import { Messages } from "./components/messages";
import { Friends } from "./components/friends";
import  Settings  from "./components/settings";


function App(props) {
  //console.log(props);
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-3">
          <div className="nav flex-column nav-pills">
            <NavLink className="nav-link" to="profile">
              Профиль
            </NavLink>
            <NavLink className="nav-link" to="messages">
              Сообщения
            </NavLink>
            <NavLink className="nav-link" to="friends">
              Друзья
            </NavLink>
            <NavLink className="nav-link" to="settings">
              Настройки
            </NavLink>
          </div>
        </div>
        <div className="col-9">
          <Routes>
            <Route path="/" element={<h2>Вы в личном кабинете</h2>} />
            <Route path="/profile/*" element={<Profile function={props.users.key_getUser} />}/>
            <Route path="/messages" element={<Messages />} />
            <Route path="/friends" element={<Friends function={props.users.key_getUsers} />}/>
            <Route path="/settings" element={<Settings />} /></Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
