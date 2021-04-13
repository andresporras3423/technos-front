function Navbar() {
  return (
    <div>
      <nav class="links-container">
      <span>Words</span>
      <span>Technologies</span>
      <span>Tests</span>
      <span>History</span>
      <span>Exit</span>
    </nav>
    <select class="nav-select">
    <option>Menu</option>
      <option>Words</option>
      <option>Technologies</option>
      <option>Tests</option>
      <option>History</option>
      <option>Exit</option>
    </select>
    </div>
  )
}

export default Navbar;