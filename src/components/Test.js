import {useState} from 'react';
import {getTechno} from "./../data/technoData";
import {nextQuestionWord} from "./../data/wordData";
import {useEffect} from 'react';
import { nanoid } from 'nanoid';

function Test() {
    const [listTechnos, setListTechnos] = useState([]);
    const [nTechnoId, setNTechnoId] = useState(-1);
    const [options, setOptions] = useState([]);
    const [numberQuestions, setNumberQuestions] = useState(10);
    const [solution, setSolution] = useState(0);

    const assignQuestions = async ()=>{
        setSolution(parseInt(Math.random()*4));
        const q = await nextQuestionWord(parseInt(nTechnoId));
        setOptions(q);
    }

    useEffect(() => {
        (
          async ()=>{
            let list = await getTechno(true);
            setListTechnos(list);
            await assignQuestions();
          }
        )();
        }, []);

    return (
      <div className="testContainer">
          <div className="topTest">
              <div>
                  <h4>Technology:</h4>
                  <select value={nTechnoId} onChange={(e)=>setNTechnoId(e.target.value)}>
                  <option disabled value="-1">select a techno</option>
                  {
                      (listTechnos ?? []).map((tech)=>(
                        <option value={tech.id} key={nanoid()}>{tech.techno_name}</option>
                      ))
                  }
              </select>
              </div>
              <div>
                  <h4>How many?:</h4>
                  <input type="number" className="w-100" min="1" value={numberQuestions} onChange={(e)=>setNumberQuestions(e.target.value)}/>
              </div>
          </div>
          <h4>
          TECHNOLOGY: {(options[solution] ?? {'techno_name':''}).techno_name}
          </h4>
          <h4>
          WORD: {(options[solution] ?? {'word':''}).word}
          </h4>
          <div>
              {(options ?? []).map((item, index)=>(
                      <div className="itemTest">
                          <input name="opts" type="radio" value={index} />
                          <textarea value={item.translation} row="10" col="75" disabled></textarea>
                      </div>
                  )
              )}
          </div>
          <div className="topTest">
              <h5 className="w-100">2/10</h5>
              <button className="w-100 btn btn-dark">next</button>
          </div>
      </div>
    )
  }
  
  export default Test;