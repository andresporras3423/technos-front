function Words() {
    const listWords = [
        {"word": "abc", "technology": "cdf"},
        {"word": "abc", "technology": "cdf"},
        {"word": "abc", "technology": "cdf"},
        {"word": "abc", "technology": "cdf"},
        {"word": "abc", "technology": "cdf"},
        {"word": "abc", "technology": "cdf"},
        {"word": "abc", "technology": "cdf"},
        {"word": "abc", "technology": "cdf"},
        {"word": "abc", "technology": "cdf"},
        {"word": "abc", "technology": "cdf"}
    ];
    return (
      <div className="wordDiv">
          <div className="formContainer">
              <label><strong>Technology</strong></label>
              <select>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
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
                  <label for="saved">Saved order</label>
                </div>
                <div>
                  <input type="radio" id="alphabet" name="order" value="1" />
                  <label for="alphabet">Alphabetical order</label>
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
                            listWords.map(
                                (word)=>(
                                    <tr>
                                        <td>{word.technology}</td>
                                        <td>{word.word}</td>
                                        <td><i class="fas fa-search"></i></td>
                                        <td><i class="fas fa-edit"></i></td>
                                        <td><i class="fas fa-trash-alt"></i></td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                    <tfoot>
                        <tr className="fiveColumns">
                            <td>
                            <button className="btn btn-dark">
                        <i className="fas fa-fast-backward"></i>
                        </button>
                            </td>
                            <td>
                            <button className="btn btn-dark">
                        <i className="fas fa-step-backward"></i>
                        </button>
                            </td>
                            <td>
                            <span>5/10</span>
                            </td>
                            <td>
                            <button className="btn btn-dark">
                        <i className="fas fa-step-forward"></i>
                        </button>
                            </td>
                            <td>
                            <button className="btn btn-dark">
                        <i className="fas fa-fast-forward"></i>
                        </button>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
      </div>
    )
  }
  
  export default Words;