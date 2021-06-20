import {useEffect} from 'react';
import useState from 'react-usestateref';
import Navbar from './Navbar';
import Words from './Words';
import Technologies from './Technologies';
import Test from './Test';
import Practice from './Practice';
import History from './History';
import {indexUser} from './../data/userData';
import { useHistory } from "react-router-dom";

function Dashboard() {
  const [selected, setSelected]=useState("0");
  const [logged, setLogged]=useState(false);
  const history = useHistory();

    useEffect(() => {
      (
        async ()=>{
          const data = await indexUser();
          if(data.status!==200) history.push('/login');
          else setLogged(true);
        }
      )();
      }, []);

  if (logged===false) return (<></>);
  return (
    <div>
     <Navbar setSelected={setSelected}/>
     {(
       ()=>{
        if(selected==="0"){
            return (<Words />);
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
        else if(selected==="4"){
          return (<Practice/>);
        }
      }
     )()}
    </div>
  );
}

export default Dashboard;