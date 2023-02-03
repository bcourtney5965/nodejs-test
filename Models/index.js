const path = require('path');
const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

class Members {
  async _getDb() {
		if (!this._db) {
			this._db = await open({
				filename: path.join(__dirname, '../', 'data', 'sqlitedb'),
				driver: sqlite3.Database
			});
		}
		return this._db;
	}

	async getAll() {
    const sql = "SELECT Members.*, Addresses.id, Addresses.memberId AS id, Addresses.primaryAddress, Addresses.address, Addresses.city, Addresses.state, Addresses.zip FROM Members INNER JOIN Addresses ON Members.id = Addresses.memberId WHERE Addresses.primaryAddress IS NOT 0";
		let db = await this._getDb();
    const users = [];
		await db.each(sql, function(err, row) {
      if (err) {
        console.log(err);
        return;
      }
        users.push(row);
		});
		return users;
	}
}
const members = new Members();
module.exports = members;