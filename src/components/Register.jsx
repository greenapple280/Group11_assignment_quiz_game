import "../index.css";
const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState ("");

    const checkEmail = (users) => {
        const user = users.find((user) => user.email === email);
        if (user) return user;
    };

    const handleSubmit = async () => {
      const user = await axios
        .get("/users")
        .then((res) => checkEmail(res.data, email));

      if (user) {
        alert ("User already exists!");
      } else {
        const user = {username, email, password };
        axios.post("/users", user).then(alert("User created!"));
      }
    };

    return (
        <div className="container">
             <form className="form-container">
               <h1>Register</h1>
               <label>
                   <input type="text"
                     placeholder="Username"  />   
                     
              </label>
                <label>
                    <input type="email"
                         placeholder="Email"  />
                         
                </label>
                <label>
                    <input type="password"
                         placeholder="Password"   />   
                             
                </label>
                <button className="btn" type="submit"
                 >
                
                    <p>Submit</p>     
                </button>
              </form>
    </div>  

);
}
export default Register;