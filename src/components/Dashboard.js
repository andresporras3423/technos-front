import Navbar from './Navbar';
import Words from './Words';

function Dashboard() {
  const selected=0;
  return (
    <div>
     <Navbar/>
     {selected==0 && <Words/>}
    </div>
  );
}

export default Dashboard;