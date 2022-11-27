import { useEffect, useState } from "react";
import { isAuthenticated } from "../resources/Auth";

function ButtonsAccess() {
  const [logged, setLogged] = useState(false);
  useEffect(() => {
    setLogged(isAuthenticated);
  }, []);

  if (logged) {
    return (
      <>
        <a
          href="/"
          className="btn"
          onClick={() => {
            localStorage.clear();
          }}
        >
          Cerrar sesión
        </a>
      </>
    );
  } else {
    return (
      <>
        <a className="btn" href="/register">
          Únete
        </a>
        <a className="btn" href="/login">
          Inicia Sesión
        </a>
      </>
    );
  }
}

export default ButtonsAccess;
