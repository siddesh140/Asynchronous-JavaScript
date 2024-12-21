function makeHttpRequest(method, URL ) {
    
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
        console.log(xhr.response);
    })
    xhr.open(method, URL);
    xhr.send();
}
makeHttpRequest('GET', 'https://dummyjson.com/users');
makeHttpRequest('GET', 'https://dummyjson.com/users/1');