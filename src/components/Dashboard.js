import {useState, useEffect} from 'react';
import Navbar from './Navbar';
import Words from './Words';
import Technologies from './Technologies';
import Test from './Test';
import History from './History';
import { useHistory } from "react-router-dom";
import {searchWord} from "./../data/wordData";

function Dashboard() {
  const [selected, setSelected]=useState("0");
  const [words, setWords]=useState([]);
  const history = useHistory();

  useEffect(async () => {
    const listWords = await searchWord('word', 1, '', '', -1, history);
    setWords(listWords);
  }, []);
  if (words.length===0) return (<></>);
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
        else return (<>
        {history.push("/login")}
        </>);
      }
     )()}
    </div>
  );
}

export default Dashboard;