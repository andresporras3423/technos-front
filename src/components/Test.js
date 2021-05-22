import {useEffect} from 'react';
import useState from 'react-usestateref';
import {getTechno} from "./../data/technoData";
import {nextQuestionWord} from "./../data/wordData";
import { nanoid } from 'nanoid';

function Test() {
    const [listTechnos, setListTechnos] = useState([]);
    const [nTechnoId, setNTechnoId, refNTechnoId] = useState(-1);
    const [options, setOptions] = useState([]);
    const [numberQuestions, setNumberQuestions] = useState(10);
    const [solution, setSolution] = useState(0);
    const [numberCurrentQuestion, setNumberCurrentQuestion] = useState(1);
    const [optionSelected, setOptionSelected, refOptionSelected] = useState(-1);
    const [corrects, setCorrects] = useState(0);

    const assignQuestions = async ()=>{
        setSolution(parseInt(Math.random()*4));
        const q = await nextQuestionWord(parseInt(refNTechnoId.current));
        setOptions(q);
    }

    const updateTestTechno = async (nTest)=>{
        setNTechnoId(nTest);
        await assignQuestions();
    };

    const updateOptionSelected = (index)=>{
        setOptionSelected(index);
        if(index===solution) setCorrects(corrects+1);
    };

    const nextQuestion = ()=>{
        setOptionSelected(-1);
        setNumberCurrentQuestion(numberCurrentQuestion+1);
        assignQuestions();
    }

    const colorOption = (index)=>{
        if(optionSelected===-1) return '';
        else if(optionSelected===index && index!==solution) return 'bg-danger';
        else if(index===solution) return 'bg-success';
        else return '';
    };

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
                  <select value={nTechnoId} onChange={(e)=>updateTestTechno(e.target.value)}>
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
                  <input type="number" className="w-100" min="2" value={numberQuestions} onChange={(e)=>setNumberQuestions(e.target.value)}/>
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
                      <div className={`itemTest ${colorOption(index)}`}  key={nanoid()}>
                          <input name="opts" type="radio" value={index} disabled={optionSelected!==-1} onClick={()=>updateOptionSelected(index)} />
                          <textarea value={item.translation} rows="5" disabled></textarea>
                      </div>
                  )
              )}
          </div>
          <div className="topTest">
              <h5 className="w-100">{corrects}/{numberCurrentQuestion}</h5>
              <button className="w-100 btn btn-dark" onClick={nextQuestion}>next</button>
          </div>
      </div>
    )
  }
  
  export default Test;