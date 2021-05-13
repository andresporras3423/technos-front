function Navbar(props) {
  const {setSelected} = props;
  
  const updateSelected = (e)=>{
    setSelected(e.target.value);
  };
  return (
    <div>
      <nav className="links-container">
      <span onClick={()=>setSelected("0")}>Words</span>
      <span onClick={()=>setSelected("1")}>Technologies</span>
      <span onClick={()=>setSelected("2")}>Tests</span>
      <span onClick={()=>setSelected("3")}>History</span>
      <span onClick={()=>setSelected("4")}>Exit</span>
    </nav>
    <select className="nav-select" onChange={updateSelected}>
      <option value='0'>Words</option>
      <option value='1'>Technologies</option>
      <option value='2'>Tests</option>
      <option value='3'>History</option>
      <option value='4'>Exit</option>
    </select>
    </div>
  )
}

export default Navbar;