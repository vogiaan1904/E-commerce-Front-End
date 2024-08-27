import "./navBar.css"
import {Search} from "@mui/icons-material"
export default function NavBar() {
  return (
    <div className="navBarContainer">
        <div className="navBarLeft">
          <span className="logo">Ecommerce</span>
        </div>
        <div className="navBarCenter">
          <div className="searchBar">
            <Search/>
            <input placeholder="Search something" className="searchInput" />
          </div>
        </div>
        <div className="navBarRight">
          <div className="navBarLinks">
            <span className="navBarLink">Homepage</span>
            <span className="navBarLink">About us</span>
          </div>
        </div>
    </div>
  )
}
