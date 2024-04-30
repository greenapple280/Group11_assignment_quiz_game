import "../index.css";
const Login = () => {
    return (
        <div className="container">
             <form>
               <h1>Login</h1>
                <label>
                    <input type="Text"
                         placeholder="Name"  />
                         
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
export default Login;