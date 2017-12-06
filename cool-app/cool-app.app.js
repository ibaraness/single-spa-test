// Single-app will import this file and call the exported lifecycle functions

let user;

export function bootstrap(){
    return fetch('/api/users/0')
    .then(response => response.json())
    .then(json => user = json);
}

export function mount(){
    /* This is normally where you would have your framework-specific code like
   * ReactDOM.render or angular.bootstrap(). The fact that you can put *anything*
   * into this function is what makes single-spa so powerful -- any framework
   * can implement a "mount" and "unmount" to become a single-spa application.
   */
  return Promise.resolve()
    .then(()=>{
        document.getElementById("user-app").innerHTML = '';
    })
}