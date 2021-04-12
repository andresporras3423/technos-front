function Navbar() {
  return (
    <div className="col-md-12" id="barNav">
                <nav className="navbar navbar-blue">
              <ul className="nav navbar-nav ul-inline">
                <li className="active menuDesktop" onClick="newTab(0)"><a href="#" className="currentTab==0 ? linkBackColor: ''">Words</a></li>
                <li className="menuDesktop"><a href="#" onClick="newTab(1)" className="currentTab==1 ? linkBackColor: ''">Technologies</a></li>
                <li className="menuDesktop"><a href="#" onClick="newTab(2)" className="currentTab==2 ? linkBackColor: ''">Tests</a></li>
                <li className="menuDesktop"><a href="#" onClick="newTab(3)" className="currentTab==2 ? linkBackColor: ''">History</a></li>
                <li className="menuDesktop"><a href="#" onClick="exit()">Exit</a></li>
                <li className="menuSmarthPhone" >
                    <a className="nav-link dropdown-toggle fontSizeMenu" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">menu
        </a>
        <div className="dropdown-menu dropDownColor" aria-labelledby="navbarDropdownMenuLink">
          <ul className="dropDownUlFont">
              <li onClick="newTab(0)"><a href="#" className="currentTab==0 ? linkBackColor: ''">Words</a></li>
                <li><a href="#" onClick="newTab(1)" className="currentTab==1 ? linkBackColor: ''">Technologies</a></li>
                <li><a href="#" onClick="exit()">Exit</a></li>
          </ul>
        </div>
                </li>
              </ul>
          </nav>
            </div>
  )
}

export default Navbar;