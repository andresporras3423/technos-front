import { nanoid } from 'nanoid';

function History() {
    const listTests = [
        {"date": "12/31/2020", "correct": "5", "total": "10"},
        {"date": "12/31/2020", "correct": "2", "total": "10"},
        {"date": "12/31/2020", "correct": "6", "total": "10"},
        {"date": "12/31/2020", "correct": "7", "total": "10"},
        {"date": "12/31/2020", "correct": "8", "total": "10"},
        {"date": "12/31/2020", "correct": "5", "total": "10"},
        {"date": "12/31/2020", "correct": "5", "total": "10"},
        {"date": "12/31/2020", "correct": "5", "total": "10"},
        {"date": "12/31/2020", "correct": "9", "total": "10"},
        {"date": "12/31/2020", "correct": "3", "total": "10"},
    ];
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
                            listTests.map(
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
                    <button className="btn btn-dark">
                        <i className="fas fa-fast-backward"></i>
                        </button>
                        <button className="btn btn-dark">
                        <i className="fas fa-step-backward"></i>
                        </button>
                        <span>
                            <div>6/10</div>
                            <div>10 tests</div>
                            </span>
                        <button className="btn btn-dark">
                        <i className="fas fa-step-forward"></i>
                        </button>
                        <button className="btn btn-dark">
                        <i className="fas fa-fast-forward"></i>
                        </button>
                    </div>
            </div>
        </div>
      </div>
    )
  }
  
  export default History;