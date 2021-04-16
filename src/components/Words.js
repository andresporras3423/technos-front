function Words() {
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
        </div>
        <div className="tableContainer">
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
            <div>
                <table className="table">
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

                    </tbody>
                    <tfooter>

                    </tfooter>
                </table>
            </div>
        </div>
      </div>
    )
  }
  
  export default Words;