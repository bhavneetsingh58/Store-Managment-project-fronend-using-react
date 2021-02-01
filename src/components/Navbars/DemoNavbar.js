import UserProfile from "../CustomComponents/session.js";
//mport { Button } from "bootstrap";
import React from "react";
import { Navbar, NavbarBrand,NavItem, Container,Button } from "reactstrap";
import routes from "routes.js";
import { Route,Redirect,Link,useHistory} from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      dropdownOpen: false,
      color: "transparent",
    };
    this.sidebarToggle = React.createRef();
    this.sessionInfo = React.createRef();
   
  }

  onClick(){
    UserProfile.setLoggedInState(false)
    UserProfile.setEmail("")
    UserProfile.setUserID("")
    UserProfile.setName("")
    UserProfile.setUserType("")
  }




  toggle() {
    if (this.state.isOpen) {
      this.setState({
        color: "transparent",
      });
    } else {
      this.setState({
        color: "dark",
      });
    }
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  getBrand() {
    let brandName = "Panel";
    routes.map((prop, key) => {
      if (window.location.href.indexOf(prop.layout + prop.path) !== -1) {
        brandName = prop.name;
      }
      return null;
    });
    return brandName;
  }
  openSidebar() {
    document.documentElement.classList.toggle("nav-open");
    this.sidebarToggle.current.classList.toggle("toggled");
  }
  // function that adds color dark/transparent to the navbar on resize (this is for the collapse)
  updateColor() {
    if (window.innerWidth < 993 && this.state.isOpen) {
      this.setState({
        color: "dark",
      });
    } else {
      this.setState({
        color: "transparent",
      });
    }
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateColor.bind(this));
  }
  componentDidUpdate(e) {
    if (
      window.innerWidth < 993 &&
      e.history.location.pathname !== e.location.pathname &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      this.sidebarToggle.current.classList.toggle("toggled");
    }
  }
  render() {
    return (
      // add or remove classes depending if we are on full-screen-maps page or not
      <Navbar
        color={
          this.props.location.pathname.indexOf("full-screen-maps") !== -1
            ? "dark"
            : this.state.color
        }
        expand="lg"
        className={
          this.props.location.pathname.indexOf("full-screen-maps") !== -1
            ? "navbar-absolute fixed-top"
            : "navbar-absolute fixed-top " +
              (this.state.color === "transparent" ? "navbar-transparent " : "")
        }
      >
        <Container fluid>
          <div className="navbar-wrapper">
            <div className="navbar-toggle">
              <button
                type="button"
                ref={this.sidebarToggle}
                className="navbar-toggler"
                onClick={() => this.openSidebar()}
              >
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
            </div>
            <NavbarBrand href="/">{this.getBrand()}</NavbarBrand>
                    
          </div>
          {UserProfile.getLoggedInState()?<Button color="primary" ref={this.sessionInfo} onClick={()=> this.onClick()}><Link color="white" to="../entry" className="nav-link btn-rotate">Logout</Link></Button>:""}
          {/* {UserProfile.getLoggedInState()?"":
          <Button color="primary"  onClick={()=> this.onClick()}>
                <Link color="white" to="../entry" className="nav-link btn-rotate">
                  Logout
                </Link>
          </Button> */}
          {/* } */}
        </Container>

      </Navbar>
    );
  }
}

export default Header;
