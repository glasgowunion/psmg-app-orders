function SetupDB(url) {
  return new PouchDB(url, pouchOpts)
}

var pouchOpts = {
  skip_setup: true,
}

export { SetupDB }
