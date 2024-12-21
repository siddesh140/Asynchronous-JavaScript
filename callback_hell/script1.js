function makeHttpRequest(){
    const xhr = new XMLHttpRequest()
// This line creates a new instance of the XMLHttpRequest object, which is used to interact with servers via HTTP.

xhr.responseType = 'json'
// Here, the responseType property is set to 'json', indicating that the response from the server will be treated as JSON. This allows the response to be automatically parsed into a JavaScript object.

xhr.addEventListener('load', () => {
  console.log(xhr.response);
});
// An event listener is added for the load event, which is triggered when the request completes successfully. The callback function defined here logs the users property of the parsed JSON response to the console. This assumes that the response contains a users key.

xhr.open('GET', 'https://dummyjson.com/users')
// The open method initializes a request. The first argument specifies the HTTP method ('GET'), and the second argument is the URL from which to fetch the data ('https://dummyjson.com/users').

xhr.send();
// Finally, the send method is called to actually send the request to the server.
}
makeHttpRequest();
makeHttpRequest()