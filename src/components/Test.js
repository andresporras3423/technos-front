import {useState} from 'react';
function Test() {
    const [questions, setQuestions] = useState(10);

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
          <h2>

          </h2>
          <h2>

          </h2>
          <div>

          </div>
          <div>

          </div>
      </div>
    )
  }
  
  export default Test;