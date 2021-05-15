import {useState, useEffect} from 'react';
import Navbar from './Navbar';
import Words from './Words';
import Technologies from './Technologies';
import Test from './Test';
import History from './History';
import {searchWord} from "./../data/wordData";
import { useHistory } from "react-router-dom";

function Dashboard() {
  const [selected, setSelected]=useState("0");
  const [listWords, setListWords]=useState([]);
  const history = useHistory();

    useEffect(() => {
      (
        async ()=>{
          const list = await searchWord(true, 1, '', '', -1, history);
          setListWords(list);
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
            return (<Words listWords={listWords} setListWords={setListWords} />);
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