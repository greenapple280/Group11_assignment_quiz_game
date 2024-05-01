import "../index.css";
import {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const checkUser = (users) => {
      const user = users.find(
        (user) => user.Name === Name && user.password === password);
        console.log(user)
      if (user.name === name && user.password === password) return user;
    };

    const handleSubmit = async (e) => {
        e.preventDefault ();

        if (name ==="" || password === "") {
            alert ("All fields are required!");
        }

        const user = await axios
        .get("/users")
        .then((res) => checkUser(res.data, name, password))
        .catch ((error) => {
            console.log(error)
        })

        if (user.name === name && user.password === password) {
            navigate("/");

            locslStorage.setItem("user", JSON.stringify(user.id));
        }
        setName("");
        setPassword("");
    }

    return (
        <div className="container">
             <form className="form-container">
               <h1>Login</h1>
                <label>
                    <input type="Text"
                     placeholder="Name" 
                     value={name}
                     onChange={(e) => setName(e.target.value)} 
                    />
                         
                </label>
                <label>
                    <input type="password"
                     placeholder="Password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}  
                    />   
                             
                </label>
                <button className="btn" type="submit" onCliock={handleSubmit}
                 >
                
                    <p>Log in</p>     
                </button>
              </form>
    </div>  

);
}
export default Login;