let submitData = (userName, userEmail) => {
    let configurationObject = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            'name': userName,
            'email': userEmail
        })
    }
    return fetch('http://localhost:3000/users', configurationObject)
    .then(response => response.json())
    .then(object => {
        let userID = document.createElement('p');
        userID.innerHTML = object.id;
        document.body.appendChild(userID);
        
    })
    .catch(function(error) {
        let bad = document.createElement('p')
        bad.innerHTML = error
        document.body.appendChild(bad);
    })
}
