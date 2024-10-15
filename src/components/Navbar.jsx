import logo from "../../public/airbnb-logo.png";

const Navbar = () => {
  return (
    <nav className="nav">
      <img className="logo" src={logo} height="20px" />
    </nav>
  );
};

export default Navbar;
