import Redirect from "./Redirect";
function AuthComponent({children}) {
  const isLogin = localStorage.getItem("token");
  return isLogin ? children : <Redirect to="/login"/>
}

export default AuthComponent;
