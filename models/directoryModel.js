const fs = require("fs");

// builder pattern
class Directory {
  #filepath; // private
  #name;
  #tags;

  /*
   * @param path - path to JSON file
   */
  constructor(path) {
    this.#filepath= path;
  }
  
  /*
   * @param searchName - name string to look for from data source
   */
  name(searchName) {
    if (!searchName || searchName === undefined) return this;

    this.#name = searchName;
    return this;
  }

  /*
   * @param {string[]} tagsList - one or more tags to use for filtering
   */
  tags(tagsList) {
    if (!tagsList || tagsList === undefined) return this;

    // convert string to array of strings
    let tags = tagsList.split(",");
    this.#tags = tags;
    return this;
  }

  // TODO: sort builder method

  get() {
    // process query
    let data = JSON.parse(fs.readFileSync(this.#filepath, 'utf8'));

    // filter by name
    if (this.#name && this.#name !== undefined) {
      data = data.filter((e) => {
        return e.name.toLowerCase().includes(this.#name.toLowerCase());
      });
    }
    
    // filter by tags
    if (this.#tags && !this.#tags.length !== 0) {
      this.#tags.forEach(t => {
        data = data.filter(e => e.tags.includes(t));
      });
    }


    // sort result alphabetically
    data.sort((a, b) => (a.name > b.name) ? 1 : -1)

    return data;
  }
}

// export instance of directory
module.exports = new Directory('./data/directory.json');
