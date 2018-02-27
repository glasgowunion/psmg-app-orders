function Login(db, username, password) {
  var ajaxOpts = {
    ajax: {
      headers: {
        Authorization: 'Basic ' + window.btoa(username + ':' + password),
      },
    },
  }
  console.log(ajaxOpts)
  return db.login(username, password, ajaxOpts)
}

export { Login }
