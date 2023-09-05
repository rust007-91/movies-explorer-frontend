import {Routes, Route} from "react-router-dom";
import '../../vendor/normalize.css';
import '../../vendor/fonts/fonts.css';
import './App.css';
import '../Header/Header'
import Header from "../Header/Header";
import Main from "../Main/Main";
// import Movies from "../Movies/Movies";
// import SavedMovies from "../SavedMovies/SavedMovies";
// import Profile from "../Profile/Profile";
// import Register from "../Register/Register";
// import Login from "../Login/Login";

function App() {
  return (
    <div className="page">
        <div className="page__container">
            <Header />
            <Main />
        </div>





        {/*<Routes>*/}
        {/*    <Route path={'/'} element={<Main />} />*/}
        {/*    <Route path={'/movies'} element={<Movies />} />*/}
        {/*    <Route path={'/saved-movies'} element={SavedMovies} />*/}
        {/*    <Route path={'/profile'} element={Profile} />*/}
        {/*    <Route path={'/signup'} element={Register} />*/}
        {/*    <Route path={'/signin'} element={Login} />*/}
        {/*</Routes>*/}
    </div>
  );
}

export default App;
