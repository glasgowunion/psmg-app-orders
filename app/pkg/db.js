import { Valid as URLValid } from '/app/pkg/utils/url-validator.js';

/*
* Package | Database
*
* @object
* opts : PouchDB options
* skip_setup - enforces login to a pouchDB database
*
* @method
* New : Creates a new PouchDB instance
* @params url {string} - http(s) url string with couch db remote address
*
* @method
* Login : If Auth has been setup in CouchDB
* @params db {Obj} - db should be a pouchDB instance
* @params username {string} - username setup on CouchDB
* @params password {string} - password setup on CouchDB
*/

const opts = {
	skip_setup: true
};

const db = {
	New(url) {
		return new window.PouchDB(url, opts);
	},

	Login(db, username, password) {
		const ajaxOpts = {
			ajax: {
				headers: {
					Authorization: `Basic ${window.btoa(`${username}:${password}`)}`
				}
			}
		};

		return db.login(username, password, ajaxOpts);
	}
};

const errors = {
	InvalidURL(url) {
		return `the url: ${url} is invalid`;
	},
	InvalidDB() {
		return `the database object doesn't exist`;
	}
};

/* Preconditions for Database package
*
* @method
* New : checks whether url string is valid
* @params url {string} - matches string against a regex
*
*/

const pre = {
	New(url) {
		if (!URLValid(url)) {
			return [null, errors.InvalidURL(url)];
		}
		return [url, null];
	}
};

/*
* PostConditions for Database
*
*
*/

const post = {
	New(database) {
		if (!database.hasOwnProperty('name')) {
			return [null, InvalidDB()];
		}
		return [database, null];
	}
};

const DB = {
	New(url) {
		var [val, err] = pre.New(url);
		if (err) {
			console.log(err);
		}
		var [dbase, err] = post.New(db.New(url));
		if (err) {
			console.log(err);
		}
		return dbase;
	}
};

export { DB };
