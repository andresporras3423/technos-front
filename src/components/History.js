import {useState} from 'react';
function History() {
    const [questions, setQuestions] = useState(10);

    const listQuestions = [
        "question 1",
        "question 2",
        "question 3",
        "question 4",
    ];

    const callUpdateNQuestions = (e)=>{
        setQuestions(e.target.value);
    };
    return (
      <div className="testContainer">
          <div className="topTest">
              <div>
                  <h4>Technology:</h4>
                  <select className="w-100">
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
              </select>
              </div>
              <div>
                  <h4>How many?:</h4>
                  <input type="number" className="w-100" min="1" value={questions} onChange={callUpdateNQuestions}/>
              </div>
          </div>
          <h4>
          TECHNOLOGY: sql queries
          </h4>
          <h4>
          WORD: Contest Leaderboard
          </h4>
          <div>
              {listQuestions.map((item, index)=>(
                      <div className="itemTest">
                          <input name="opts" type="radio" value={index} />
                          <textarea row="5" col="75" disabled>{item}</textarea>
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
  
  export default History;