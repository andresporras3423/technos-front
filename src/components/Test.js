import {useEffect} from 'react';
import useState from 'react-usestateref';
import {getTechno} from "./../data/technoData";
import {nextQuestionWord} from "./../data/wordData";
import {createTest} from "./../data/testData";
import { nanoid } from 'nanoid';

function Test() {
    const [listTechnos, setListTechnos] = useState([]);
    const [nTechnoId, setNTechnoId, refNTechnoId] = useState(-1);
    const [options, setOptions] = useState([]);
    const [numberQuestions, setNumberQuestions] = useState(10);
    const [solution, setSolution] = useState(0);
    const [numberCurrentQuestion, setNumberCurrentQuestion, refNumberCurrentQuestion] = useState(1);
    const [optionSelected, setOptionSelected, refOptionSelected] = useState(-1);
    const [corrects, setCorrects] = useState(0);

    const assignQuestions = async ()=>{
        setOptionSelected(-1);
        setSolution(parseInt(Math.random()*4));
        const q = await nextQuestionWord(parseInt(refNTechnoId.current));
        setOptions(q);
    }

    const updateTestTechno = async (nTest)=>{
        setNTechnoId(nTest);
        await assignQuestions();
        setNumberCurrentQuestion(1);
        setCorrects(0);
    };

    const updateOptionSelected = (index)=>{
        setOptionSelected(index);
        if(index===solution) setCorrects(corrects+1);
    };

    const nextQuestion = async ()=>{
        debugger;
        if(refNumberCurrentQuestion.current===parseInt(numberQuestions)){
            alert(`Your final score was ${corrects}/${numberQuestions}`);
            await createTest(corrects, parseInt(numberQuestions));
            await updateTestTechno(nTechnoId);
        }
        else{
            setNumberCurrentQuestion(refNumberCurrentQuestion.current+1);
            await assignQuestions();
        }
    }

    const colorOption = (index)=>{
        if(refOptionSelected.current===-1) return '';
        else if(refOptionSelected.current===index && index!==solution) return 'bg-danger';
        else if(index===solution) return 'bg-success';
        else return '';
    };

    useEffect(() => {
        (
          async ()=>{
            document.addEventListener("keydown", (e)=> {
                if(e.keyCode===39 && refOptionSelected.current!==-1) nextQuestion();
            }, false);
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
                  <input type="number" className="w-100" min={`${refNumberCurrentQuestion.current}`} value={numberQuestions} onChange={(e)=>setNumberQuestions(e.target.value)}/>
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
                          <input name="opts" type="radio" value={index} disabled={refOptionSelected.current!==-1} onClick={()=>updateOptionSelected(index)} />
                          <textarea value={item.translation} rows="5" disabled></textarea>
                      </div>
                  )
              )}
          </div>
          <div className="topTest">
              <h5 className="w-100">{corrects}/{refNumberCurrentQuestion.current}</h5>
              <button className="w-100 btn btn-dark" onClick={nextQuestion}>next</button>
          </div>
      </div>
    )
  }
  
  export default Test;