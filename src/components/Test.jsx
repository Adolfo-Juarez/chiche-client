import UserContext from "../context/UserContext";
import { useContext} from "react";
import { a } from "../resources/ContextUpdater";

function Test() {

    const {userContext, setUserContext} = useContext(UserContext)

        console.log(userContext)
    function algo(){
        setUserContext("Hola")
        console.log(userContext)
    }

    function otroAlgo(ola){
        if(ola){
            return <h2>Hola buenas noches</h2>
        }
        return <><h3>Hola buenas</h3>
        <span>tardes</span></>
    }

    return ( 
            <UserContext.Provider value={{
                userContext,
                setUserContext
            }}>
            <h1>Hola</h1>
            <button onClick={algo}>Hola</button>
            {otroAlgo(false)}
            </UserContext.Provider>
     );
}

export default Test;