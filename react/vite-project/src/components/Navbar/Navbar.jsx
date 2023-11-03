import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const { loginWithRedirect } = useAuth0();
  const {logout}=useAuth0();
  const { isAuthenticated } = useAuth0();

  return (
    <div>
  <div className="container" style={{ maxWidth: '1200px' }}>
  <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
  <nav className="navbar navbar-light" style={{ backgroundColor: 'lightblue', maxWidth: '1200px' }}>
    <a className="navbar-brand" href="#">
      <img src="./src/assets/Images/logo.png" width="130" height="130" alt="" />
    </a>
    <a className="navbar-brand" href="https://www.linkedin.com/in/shaik-hussamali-ba7484225/">
      <img src="./src/assets/Images/ali.jpg" width="130" height="130" alt="" />
    </a>
    <a className="navbar-brand" href="https://www.linkedin.com/in/silvoj-rajesh-kumar-ba655b1a7/#">
      <img src="./src/assets/Images/barre.jpg" width="100" height="130" alt="" />
    </a>
    <a className="navbar-brand" href="https://www.linkedin.com/in/gunnala-rajesh-556a73163/">
      <img src="./src/assets/Images/rajesh.jpg" width="130" height="130" alt="" />
    </a>
    <a className="navbar-brand" href="https://www.linkedin.com/in/shivasaikrishnagadeela/">
      <img src="./src/assets/Images/shiva.jpg" width="100" height="130" alt="" />
    </a>
    {
      isAuthenticated ? (
        <button  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} type="button" style={{ padding:"10px"}} className="btn btn-primary btn-lg">Logout</button>
      ):(
         <button  onClick={() => loginWithRedirect()} type="button" style={{ padding:"10px"}} className="btn btn-primary btn-lg">Login</button>
      )
    }
  </nav>
</div>
  </div>
</div>

  )
}

export default Navbar
