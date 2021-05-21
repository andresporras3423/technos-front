import {useEffect} from 'react';
import useState from 'react-usestateref';
import { nanoid } from 'nanoid';
import {getTechno} from "./../data/technoData";
import {createWord, deleteWord, searchWord, updateWord} from "./../data/wordData";

function Words() {
  const [listWords, setListWords, refListWords]=useState([]);
    const [listTechnos, setListTechnos] = useState([]);
    const [technosHash, setTechnosHash] = useState({});
    const [groupedWords, setGroupedWords] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [groupLen, setGroupLen] = useState(-1);
    const [nWord, setNWord, refNWord] = useState('');
    const [nTranslation, setNTranslation, refNTranslation] = useState('');
    const [nTechnoId, setNTechnoId, refNTechnoId] = useState(-1);
    const [nId, setNId, refNId] = useState(-1);
    const [message, setMessage] = useState("");
    const [searchType, setSearchType] = useState(1);
    const [sortType, setSortType] = useState(false);
    const [formDisabled, setformDisabled] = useState(false);
    const [loadPage, setLoadPage]=useState(false);

    const clearForm = ()=>{
        setformDisabled(false);
        valuesForm('', '', -1, -1);
    };

    const lookWord = (word)=>{
        valuesForm(word.word, word.translation, word.techno_id, word.id);
        setformDisabled(true);
    };

    const editWord = (word)=>{
        valuesForm(word.word, word.translation, word.techno_id, word.id);
        setformDisabled(false);
    };

    const valuesForm = (xWord, xTranslation, xTechnoId, xId)=>{
        setNWord(xWord);
        setNTranslation(xTranslation);
        setNTechnoId(xTechnoId);
        setNId(xId);
    }

    const removeWord = async (id)=>{
        if(window.confirm("Are you sure you want to remove this word?")){
            await deleteWord(id);
            setMessage("Word successfully removed!");
            await searchWords();
        }
    }

    const searchWords= async ()=>{
        const dataWords = await searchWord(sortType, parseInt(searchType), refNWord.current, refNTranslation.current, refNTechnoId.current);
        setCurrentPage(1);
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
        debugger;
        let data={};
        if(nId===-1) data = await createWord(nTechnoId, nWord, nTranslation);
        else data = await updateWord(nId, nWord, nTranslation, nTechnoId);
        if(data.status===409){
            let nMessage = "";
          Object.entries(data.errors).forEach((item)=>{
            nMessage+=`${item[0]}: ${item[1]}</br>`;
          });
            setMessage(nMessage);
        }
        else{
            clearForm();
            searchWords();
            setMessage("Word successfully saved!");
        }
    };

    useEffect(() => {
        (
          async ()=>{
            await searchWords();
            groupWords();
            let list = await getTechno(true);
            let listHash = {};
            list.forEach((item)=>{
                listHash[item.id]=item.techno_name;
            });
            setTechnosHash(listHash);
            setListTechnos(list);
            setLoadPage(true);
          }
        )();
        }, []);

    if (loadPage===false) return (<></>);
    else return (
      <div className="wordDiv">
          <div className="formContainer">
              <label><strong>Technology</strong></label>
              <select value={nTechnoId} onChange={(e)=>setNTechnoId(e.target.value)} disabled={formDisabled}>
                  <option disabled value="-1">select a techno</option>
                  {
                      (listTechnos ?? []).map((tech)=>(
                        <option value={tech.id} key={nanoid()}>{tech.techno_name}</option>
                      ))
                  }
              </select>
              <label><strong>Word</strong></label>
              <input value={nWord} onChange={(e)=>setNWord(e.target.value)}  disabled={formDisabled}></input>
              <label><strong>Meaning</strong></label>
              {/* <textarea style={{whiteSpace: "pre-wrap"}} cols="20" rows="3" onChange={(e)=>setNTranslation(e.target.value)}  disabled={formDisabled}>{nTranslation}</textarea> */}
              {/* <div style={{whiteSpace: "pre-wrap"}}>{nTranslation}</div> */}
              {/* <pre contenteditable={formDisabled} dangerouslySetInnerHTML={{ __html: nTranslation.split("\\n").join('<br/>') }}></pre> */}
              <textarea style={{ whiteSpace: 'pre-wrap' }} style={{whiteSpace: "pre-wrap"}} value={nTranslation} cols="20" rows="3" onChange={(e)=>setNTranslation(e.target.value)}  disabled={formDisabled}>
  </textarea>
              <div className="twoButtons">
                  <button className="btn btn-dark" onClick={saveForm} disabled={formDisabled}>Save</button>
                  <button className="btn btn-dark" onClick={clearForm}>clear</button>
              </div>
              <div>
                  <pre dangerouslySetInnerHTML={{ __html: message }}></pre>
              </div>
              <div className="twoButtons">
                  <button className="btn btn-dark" onClick={searchWords}>Search</button>
                  <select onChange={(e)=>setSearchType(e.target.value)}>
                  <option value="1">Contains</option>
                  <option value="2">Starts</option>
                  <option value="3">Ends</option>
                  <option value="4">Equal</option>
              </select>
              </div>
              <div className="radioContainer">
                <div>
                  <input type="radio" id="saved" name="order" checked={sortType===false} onChange={e => {}} onClick={(e)=>setSortType(false)} />
                  <label htmlFor="saved">Saved order</label>
                </div>
                <div>
                  <input type="radio" id="alphabet" name="order" checked={sortType===true} onChange={e => {}} onClick={(e)=>setSortType(true)} />
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
                           (groupedWords[currentPage] ?? []).map(
                                (word)=>(
                                    <tr key={nanoid()}>
                                        <td>{technosHash[word.techno_id]}</td>
                                        <td>{word.word}</td>
                                        <td><i className="fas fa-search" onClick={async ()=> await lookWord(word)}></i></td>
                                        <td><i className="fas fa-edit" onClick={async ()=> await editWord(word)}></i></td>
                                        <td><i className="fas fa-trash-alt" onClick={async ()=> await removeWord(word.id)}></i></td>
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
