import {useEffect} from 'react';
import useState from 'react-usestateref';
import { nanoid } from 'nanoid';
import {createTechno, deleteTechno, updateTechno, searchTechno} from "./../data/technoData";

function Technologies() {
    const [listTechnos, setListTechnos, refListTechnos] = useState([]);
    const [groupedTechnos, setGroupedTechnos] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [groupLen, setGroupLen] = useState(-1);
    const [nTechnoName, setNTechnoName, refNTechnoName] = useState('');
    const [nStatus, setNStatus, refNStatus] = useState(null);
    const [nId, setNId, refNId] = useState(-1);
    const [message, setMessage] = useState("");
    const [searchType, setSearchType] = useState(1);
    const [sortType, setSortType] = useState(false);
    const [formDisabled, setformDisabled] = useState(false);
    const [loadPage, setLoadPage]=useState(false);

    const clearForm = ()=>{
        setformDisabled(false);
        valuesForm('', null, -1, -1);
    };

    const valuesForm = (xNTechnoName, xStatus, xId)=>{
        setNTechnoName(xNTechnoName);
        setNStatus(xStatus);
        setNId(xId);
    }

    const lookTechno = (techno)=>{
        valuesForm(techno.techno_name, techno.techno_status, techno.id);
        setformDisabled(true);
    };

    const editTechno = (techno)=>{
        valuesForm(techno.techno_name, techno.techno_status, techno.id);
        setformDisabled(false);
    };

    const removeTechno = async (id)=>{
        if(window.confirm("Are you sure you want to remove this technology?")){
            await deleteTechno(id);
            setMessage("Technology successfully removed!");
            await searchTechnos();
        }
    }

    const searchTechnos= async ()=>{
        const dataTechnos = await searchTechno(sortType, parseInt(searchType), refNTechnoName.current, refNStatus.current);
        setCurrentPage(1);
        setListTechnos(dataTechnos.list);
        groupTechnos();
    };

    const groupTechnos = ()=>{
        const grouped = {};
            let j=1;
            for(let i=0; i<refListTechnos.current.length; i+=1){
                if(grouped[j]===undefined) grouped[j]=[refListTechnos.current[i]];
                else grouped[j].push(refListTechnos.current[i]);
                if(i%10===9) j+=1;
            }
            setGroupLen(Object.keys(grouped).length);
            setGroupedTechnos(grouped);
    };

    const saveForm = async ()=>{
        let data={};
        if(nId===-1) data = await createTechno(nTechnoName, nStatus);
        else data = await updateTechno(nId, nTechnoName, nStatus);
        if(data.status===409){
            let nMessage = "";
          Object.entries(data.errors).forEach((item)=>{
            nMessage+=`${item[0]}: ${item[1]}</br>`;
          });
            setMessage(nMessage);
        }
        else{
            clearForm();
            await searchTechnos();
            setMessage("Technology successfully saved!");
        }
    };

    useEffect(() => {
        (
          async ()=>{
            await searchTechnos();
            groupTechnos();
            setLoadPage(true);
          }
        )();
        }, []);
    if(loadPage===false) return <></>;
    else return (
        <div className="wordDiv">
            <div className="formContainer">
                <label><strong>Technology</strong></label>
                <input value={nTechnoName} onChange={(e)=>setNTechnoName(e.target.value)}  disabled={formDisabled}></input>
                <label><strong>Status:</strong></label>
                <div className="radioContainer">
                <div className="d-none">
                  <input type="radio" id="status0" name="status" checked={nStatus===null} onChange={e => {}} onClick={(e)=>setNStatus(null)}  disabled={formDisabled} />
                </div>
                  <div>
                  <input type="radio" id="status1" name="status" checked={nStatus===true} onChange={e => {}} onClick={(e)=>setNStatus(true)}  disabled={formDisabled} />
                  <label htmlFor="saved">Active</label>
                  </div>
                  <div>
                  <input type="radio" id="status2" name="status" checked={nStatus===false} onChange={e => {}} onClick={(e)=>setNStatus(false)} />
                  <label htmlFor="alphabet">Inactive</label>
                  </div>
                </div>
                <div className="twoButtons">
                    <button className="btn btn-dark" onClick={saveForm} disabled={formDisabled}>Save</button>
                    <button className="btn btn-dark" onClick={clearForm}>clear</button>
                </div>
                <div>
                    <pre dangerouslySetInnerHTML={{ __html: message }}></pre>
                </div>
                <div className="twoButtons">
                    <button className="btn btn-dark" onClick={searchTechnos}>Search</button>
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
                              <th>Watch</th>
                              <th>Edit</th>
                              <th>Delete</th>
                          </tr>
                      </thead>
                      <tbody>
                          {
                              (groupLen===0 ? [] : groupedTechnos[currentPage]).map(
                                  (techno)=>(
                                      <tr key={nanoid()}>
                                          <td>{techno.techno_name}</td>
                                          <td><i className="fas fa-search" onClick={async ()=> await lookTechno(techno)}></i></td>
                                          <td><i className="fas fa-edit" onClick={async ()=> await editTechno(techno)}></i></td>
                                          <td><i className="fas fa-trash-alt" onClick={async ()=> await removeTechno(techno.id)}></i></td>
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
  
  export default Technologies;