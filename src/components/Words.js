import {useState, useEffect} from 'react';
import { nanoid } from 'nanoid';
import {getTechno} from "./../data/technoData";

function Words(props) {
    const {listWords, setListWords} = props;
    const [listTechnos, setListTechnos] = useState([]);
    const [technosHash, setTechnosHash] = useState({});
    const [groupedWords, setGroupedWords] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [groupLen, setGroupLen] = useState(-1);
    useEffect(() => {
        (
          async ()=>{
            const grouped = {};
            let j=1;
            for(let i=0; i<listWords.length; i+=1){
                if(grouped[j]===undefined) grouped[j]=[listWords[i]];
                else grouped[j].push(listWords[i]);
                if(i%10===9) j+=1;
            }
            setGroupLen(Object.keys(grouped).length);
            setGroupedWords(grouped);
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
              <select>
                  {
                      listTechnos.map((tech)=>(
                        <option value={tech.id} key={nanoid()}>{tech.techno_name}</option>
                      ))
                  }
              </select>
              <label><strong>Word</strong></label>
              <input></input>
              <label><strong>Meaning</strong></label>
              <textarea cols="20" rows="3"></textarea>
              <div className="twoButtons">
                  <button className="btn btn-dark">Save</button>
                  <button className="btn btn-dark">clear</button>
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