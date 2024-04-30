import logo from '/logo-name.svg'


function Header() {
    const timeNow = new Date();


    return (
      <header>
        <img src={logo} alt="Logo" />
        {/* <h3>Tanja study React</h3> */}
        <span>Time: {timeNow.toLocaleTimeString()}</span>
    </header>
    )
}

  export default Header