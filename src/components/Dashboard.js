import useState from 'react';
import Navbar from './Navbar';
import Words from './Words';
import Technologies from './Technologies';

function Dashboard() {
  const [selected, setSelected]=useState(0);
  return (
    <div>
     <Navbar setSelected={setSelected}/>
     {selected==0 && <Words/>}
     {selected==1 && <Technologies/>}
    </div>
  );
}

export default Dashboard;