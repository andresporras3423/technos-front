import {useEffect} from 'react';
import useState from 'react-usestateref';
import Navbar from './Navbar';
import Words from './Words';
import Technologies from './Technologies';
import Test from './Test';
import History from './History';
import {searchWord} from "./../data/wordData";
import { useHistory } from "react-router-dom";

function Dashboard() {
  const [selected, setSelected]=useState("0");
  const [listWords, setListWords, refListWords]=useState([]);
  const history = useHistory();

    useEffect(() => {
      (
        async ()=>{
          const data = await searchWord(false, 1, '', '', -1, history);
          if(data.status===401) history.push('/login');
          else setListWords(data.list);
        }
      )();
      }, []);

  if (listWords.length===0) return (<></>);
  return (
    <div>
     <Navbar setSelected={setSelected}/>
     {(
       ()=>{
        if(selected==="0"){
            return (<Words refListWords={refListWords} setListWords={setListWords} />);
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
      }
     )()}
    </div>
  );
}

export default Dashboard;