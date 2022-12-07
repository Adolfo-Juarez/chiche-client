import { useEffect, useState } from "react";

function ButtonsAccess() {
  const [logged, setLogged] = useState(false);


  useEffect(() => {
  }, []);

  if (logged) {
    return (
      <>
        <a
          href="/"
          className="btn"
          onClick={() => {
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
