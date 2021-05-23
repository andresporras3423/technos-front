import {useEffect} from 'react';
import { nanoid } from 'nanoid';
import { getTest } from './../data/testData';
import useState from 'react-usestateref';

function History() {
    const [currentPage, setCurrentPage, refCurrentPage] = useState(1);
    const [groupTests, setGroupTests, refGroupTests] = useState({});
    const [groupLen, setGroupLen, refGroupLen] = useState(0);
    const [totalTtests, setTotalTests, refTtotalTests] = useState(0);

    useEffect(() => {
        (
          async ()=>{
            debugger;
            const list = await getTest();
            setTotalTests(list.length);
            const grouped = {};
            let j=1;
            for(let i=0; i<list.length; i+=1){
                if(grouped[j]===undefined) grouped[j]=[list[i]];
                else grouped[j].push(list[i]);
                if(i%10===9) j+=1;
            }
            setGroupLen(Object.keys(grouped).length);
            setGroupTests(grouped);
          }
        )();
        }, []);
    return (
      <div className="testContainer">
          <div className="tableContainer">
          <div className="topTest">
              <h5>
              GLOBAL SCORE:
              </h5>
              <h5 style={{backgroundColor: 17/30 <= 0.5 ? `rgb(255,${parseInt(255*(17/30))},0)`: `rgb(${parseInt(255-(255*(17/30)))}, 255,0)`}}>
              17 / 30 ( 56.67 %)
              </h5>
          </div>
            <div>
                <table className="table tableContent">
                    <thead className="thead-dark">
                        <tr>
                            <th>Date</th>
                            <th>Correct Questions</th>
                            <th>Total Questions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (refGroupTests.current[refCurrentPage.current] ?? []).map(
                                (test)=>(
                                    <tr style={{backgroundColor: test.correct/test.total <= 0.5 ? `rgb(255,${parseInt(255*(test.correct/test.total))},0)`: `rgb(${parseInt(255-(255*(test.correct/test.total)))}, 255,0)`}} key={nanoid()}>
                                        <td>{test.date}</td>
                                        <td>{test.correct}</td>
                                        <td>{test.total}</td>
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
                        <button className="btn btn-dark" onClick={()=>{if(refCurrentPage.current>1) setCurrentPage(refCurrentPage.current-1)}}>
                        <i className="fas fa-step-backward"></i>
                        </button>
                        <span>
                            <div>{refCurrentPage.current}/{refGroupLen.current}</div>
                            <div>{refTtotalTests.current} tests</div>
                            </span>
                        <button className="btn btn-dark" onClick={()=>{if(refCurrentPage.current<refGroupLen.current) setCurrentPage(refCurrentPage.current+1)}}>
                        <i className="fas fa-step-forward"></i>
                        </button>
                        <button className="btn btn-dark" onClick={()=>setCurrentPage(refGroupLen.current)}>
                        <i className="fas fa-fast-forward"></i>
                        </button>
                    </div>
            </div>
        </div>
      </div>
    )
  }
  
  export default History;