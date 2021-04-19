import {useState} from 'react';
import Navbar from './Navbar';
import Words from './Words';
import Technologies from './Technologies';
import Test from './Test';
import History from './History';

function Dashboard() {
  const [selected, setSelected]=useState("0");
  
  return (
    <div>
     <Navbar setSelected={setSelected}/>
     {(
       ()=>{
        if(selected==="0"){
            return (<Words/>);
        }
        else if(selected==="1"){
          return (<Technologies/>);
        }
        else if(selected==="2"){
          return (<Test/>);
        }
        else if(selected==="3"){
          return (<History/>);
        }
        else return (<></>);
      }
     )()}
    </div>
  );
}

export default Dashboard;