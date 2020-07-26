const serverUrl = "https://loft-taxi.glitch.me";

export const serverLogIn = async (email: string, password: string) =>
    fetch(`${serverUrl}/auth`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    })
        .then(response => response.status !== 200 ? Promise.reject(response) : response.json())
        .catch(error => error);

export const serverRegistration = async (email: string, password: string, name: string, surname: string) =>
    fetch(`${serverUrl}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password, name, surname})
    })
        .then(response => response.status !== 200 ? Promise.reject(response) : response.json())
        .catch(error => error);
