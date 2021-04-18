function Technologies() {
    const listTechnos = [
        {"technology": "cdf"},
        {"technology": "cdf"},
        {"technology": "cdf"},
        {"technology": "cdf"},
        {"technology": "cdf"},
        {"technology": "cdf"},
        {"technology": "cdf"},
        {"technology": "cdf"},
        {"technology": "cdf"},
        {"technology": "cdf"},
    ];
    return (
      <div className="wordDiv">
          <div className="formContainer2">
              <label><strong>Technology</strong></label>
              <input type="text"></input>
              <label><strong>Status</strong></label>
              <select>
                  <option value="0">Active</option>
                  <option value="1">Inactive</option>
              </select>
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
                <table className="table tableContent tableContent2">
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
                            listTechnos.map(
                                (techno)=>(
                                    <tr>
                                        <td>{techno.technology}</td>
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
                    <button className="btn btn-dark">
                        <i className="fas fa-fast-backward"></i>
                        </button>
                        <button className="btn btn-dark">
                        <i className="fas fa-step-backward"></i>
                        </button>
                        <span>5/10</span>
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
  
  export default Technologies;