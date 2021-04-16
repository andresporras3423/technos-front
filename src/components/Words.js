function Words() {
    return (
      <div class="wordDiv">
          <div class="formContainer">
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
              <div class="twoButtons">
                  <button className="btn btn-primary">Save</button>
                  <button className="btn btn-primary">clear</button>
              </div>
              <div class="twoButtons">
                  <button className="btn btn-primary">Search</button>
                  <select>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
              </select>
              </div>
        </div>
        <div>
            hello
        </div>
      </div>
    )
  }
  
  export default Words;