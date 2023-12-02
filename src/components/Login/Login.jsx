
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.init';
import { useState } from "react";

const Login = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleGooglesignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {

                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser)
            }).catch(error => {
                console.log(error);
                
            });




    }
    const handkesignout = () => {

        signOut(auth)
        .then(result => {
            console.log(result);
            setUser(null);
        })
        .catch(error =>{console.log(error);})



    }

    return (
        <div>
{    user ?     <button onClick={handkesignout}>sign out</button>
           : <button onClick={handleGooglesignIn}>Google Login</button>
}            {user && <div>
                <h3>user : {user.displayName}</h3>
                <p>Email: {user.email}</p>
            </div>}
        </div>
    );
};

export default Login;