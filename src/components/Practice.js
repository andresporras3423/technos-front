import {useEffect} from 'react';
import useState from 'react-usestateref';
import {getTechno} from "./../data/technoData";
import {nextPracticeWord} from "./../data/wordData";
import {createTest} from "./../data/testData";
import { nanoid } from 'nanoid';

function Practice() {
    const [listTechnos, setListTechnos] = useState([]);
    const [nTechnoId, setNTechnoId, refNTechnoId] = useState(-1);
    const [options, setOptions] = useState([]);
    const [numberPractice, setNumberPractice, refNumberPractice] = useState(8);
    const [solution, setSolution, refSolution] = useState(0);
    const [numberCurrentPractice, setNumberCurrentPractice, refNumberCurrentPractice] = useState(1);
    const [optionSelected, setOptionSelected, refOptionSelected] = useState(-1);

    const assignPractice = async ()=>{
        setOptionSelected(-1);
        setSolution(0);
        const q = await nextPracticeWord(parseInt(refNTechnoId.current));
        debugger;
        setOptions(q);
    }

    const updatePracticeTechno = async (nTest)=>{
        setNTechnoId(nTest);
        await assignPractice();
        setNumberCurrentPractice(1);
    };

    const updateOptionSelected = (index)=>{
        setOptionSelected(index);
    };

    const nextPractice = async ()=>{
        if(refNumberCurrentPractice.current===parseInt(refNumberPractice.current)){
            alert(`Practice finished`);
            await updatePracticeTechno(nTechnoId);
        }
        else{
            setNumberCurrentPractice(refNumberCurrentPractice.current+1);
            await assignPractice();
        }
    }

    const colorOption = (index)=>{
        if(refOptionSelected.current===-1) return '';
        else return 'bg-success';
    };

    useEffect(() => {
        (
          async ()=>{
            document.addEventListener("keydown", (e)=> {
                if(e.keyCode===39 && refOptionSelected.current!==-1) nextPractice();
            }, false);
            let list = await getTechno(true);
            setListTechnos(list);
            await assignPractice();
          }
        )();
        }, []);

    return (
      <div className="testContainer">
          <div className="topTest">
              <div>
                  <h4>Technology:</h4>
                  <select value={nTechnoId} onChange={(e)=>updatePracticeTechno(e.target.value)}>
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
                  <input type="number" className="w-100" min={`${refNumberCurrentPractice.current}`} value={refNumberPractice.current} onChange={(e)=>setNumberPractice(e.target.value)}/>
              </div>
          </div>
          <h4>
          TECHNOLOGY: {(options[refSolution.current] ?? {'techno_name':''}).techno_name}
          </h4>
          <h4>
          WORD: {(options[refSolution.current] ?? {'word':''}).word}
          </h4>
          <div>
              {(options ?? []).map((item, index)=>(
                      <div className={`itemTest ${colorOption(index)}`}  key={nanoid()}>
                          <input name="opts" type="radio" value={index} disabled={refOptionSelected.current!==-1} onClick={()=>updateOptionSelected(index)} />
                          <textarea value={item.translation} rows="12" disabled></textarea>
                      </div>
                  )
              )}
          </div>
          <div className="topTest">
              <h5 className="w-100">{refNumberCurrentPractice.current}</h5>
              <button className="w-100 btn btn-dark" onClick={nextPractice} disabled={refOptionSelected.current===-1}>next</button>
          </div>
      </div>
    )
  }
  
  export default Practice;