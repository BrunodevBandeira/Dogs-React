import React from 'react';
//Pega o token do usuario
const TokenPost = () => {

    const [username, setUserName] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [token, setToken] = React.useState("");

    function handleSubmit(event) {
        event.preventDefault(event);
        console.log({username, password});

        fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
                username,
                password
            }),
        }).then(response => {
            console.log(response)
            return response.json()
        }).then( json => {
            console.log(json)
            setToken(json.token);
            return json
        })
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text"
               placeholder='user'
               value={username}
               onChange={({target}) => setUserName(target.value)}
        />

        <input type="text"
               placeholder='password'
               value={password}
               onChange={({target}) => setPassword(target.value)}
        />

        <button> Enviar </button>
        <p> {token} </p>
    </form>
  )
}

export default TokenPost