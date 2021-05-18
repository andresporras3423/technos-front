import {useState, useEffect} from 'react';
import { nanoid } from 'nanoid';
import {getTechno} from "./../data/technoData";
import {createWord, searchWord} from "./../data/wordData";

function Words(props) {
    const {refListWords, setListWords} = props;
    const [listTechnos, setListTechnos] = useState([]);
    const [technosHash, setTechnosHash] = useState({});
    const [groupedWords, setGroupedWords] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [groupLen, setGroupLen] = useState(-1);
    const [nWord, setNWord] = useState('');
    const [nTranslation, setNTranslation] = useState('');
    const [nTechnoId, setNTechnoId] = useState("");
    const [nId, setNId] = useState(-1);
    const [message, setMessage] = useState("");

    const clearForm = ()=>{
        setNWord('');
        setNTranslation('');
        setNTechnoId("");
        setNId(-1);
    };

    const loadWords= async ()=>{
        debugger;
        const dataWords = await searchWord(false, 1, '', '', -1);
        setListWords(dataWords.list);
        groupWords();
    };

    const groupWords = ()=>{
        const grouped = {};
            let j=1;
            for(let i=0; i<refListWords.current.length; i+=1){
                if(grouped[j]===undefined) grouped[j]=[refListWords.current[i]];
                else grouped[j].push(refListWords.current[i]);
                if(i%10===9) j+=1;
            }
            setGroupLen(Object.keys(grouped).length);
            setGroupedWords(grouped);
    };

    const saveForm = async ()=>{
        const data = await createWord(nTechnoId, nWord, nTranslation);
        if(data.status===409){
            let nMessage = "";
          Object.entries(data.errors).forEach((item)=>{
            nMessage+=`${item[0]}: ${item[1]}</br>`;
          });
            setMessage(nMessage);
        }
        else{
            clearForm();
            loadWords();
            setMessage("Word successfully saved!");
        }
    };

    useEffect(() => {
        (
          async ()=>{
            groupWords();
            let list = await getTechno(true);
            let listHash = {};
            list.forEach((item)=>{
                listHash[item.id]=item.techno_name;
            });
            setTechnosHash(listHash);
            setListTechnos(list);
          }
        )();
        }, []);

    if (listTechnos.length===0) return (<></>);
    else return (
      <div className="wordDiv">
          <div className="formContainer">
              <label><strong>Technology</strong></label>
              <select value={nTechnoId} onChange={(e)=>setNTechnoId(e.target.value)}>
                  <option disabled value="">select a techno</option>
                  {
                      listTechnos.map((tech)=>(
                        <option value={tech.id} key={nanoid()}>{tech.techno_name}</option>
                      ))
                  }
              </select>
              <label><strong>Word</strong></label>
              <input value={nWord} onChange={(e)=>setNWord(e.target.value)}></input>
              <label><strong>Meaning</strong></label>
              <textarea cols="20" rows="3" value={nTranslation} onChange={(e)=>setNTranslation(e.target.value)}></textarea>
              <div className="twoButtons">
                  <button className="btn btn-dark" onClick={saveForm}>Save</button>
                  <button className="btn btn-dark" onClick={clearForm}>clear</button>
              </div>
              <div>
                  <pre dangerouslySetInnerHTML={{ __html: message }}></pre>
              </div>
              <div className="twoButtons">
                  <button className="btn btn-dark">Search</button>
                  <select>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
              </select>
              </div>
              <div className="radioContainer">
                <div>
                  <input type="radio" id="saved" name="order" value="0" />
                  <label htmlFor="saved">Saved order</label>
                </div>
                <div>
                  <input type="radio" id="alphabet" name="order" value="1" />
                  <label htmlFor="alphabet">Alphabetical order</label>
                </div>
            </div>
        </div>
        <div className="tableContainer">
            
            <div>
                <table className="table tableContent">
                    <thead className="thead-dark">
                        <tr>
                            <th>Technology</th>
                            <th>Word</th>
                            <th>Watch</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            groupedWords[currentPage].map(
                                (word)=>(
                                    <tr key={nanoid()}>
                                        <td>{technosHash[word.techno_id]}</td>
                                        <td>{word.word}</td>
                                        <td><i className="fas fa-search"></i></td>
                                        <td><i className="fas fa-edit"></i></td>
                                        <td><i className="fas fa-trash-alt"></i></td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
                <div className="fiveColumns">
                    <button className="btn btn-dark" onClick={()=>setCurrentPage(1)}>
                        <i className="fas fa-fast-backward"></i>
                    </button>
                    <button className="btn btn-dark" onClick={()=>{if(currentPage>1) setCurrentPage(currentPage-1)}}>
                        <i className="fas fa-step-backward"></i>
                    </button>
                    <span>{currentPage}/{groupLen}</span>
                    <button className="btn btn-dark" onClick={()=>{if(currentPage<groupLen) setCurrentPage(currentPage+1)}}>
                        <i className="fas fa-step-forward"></i>
                    </button>
                    <button className="btn btn-dark" onClick={()=>setCurrentPage(groupLen)}>
                        <i className="fas fa-fast-forward"></i>
                    </button>
                    </div>
            </div>
        </div>
      </div>
    )
  }
  
  export default Words;