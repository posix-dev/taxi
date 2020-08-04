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

export const sendCard = async (cardNumber: string, expiryDate: string, cardName: string, cvc: string, token: string) =>
    fetch(`${serverUrl}/card`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({cardNumber, expiryDate, cardName, cvc, token})
    })
        .then(response => response.status !== 200 ? Promise.reject(response) : response.json())
        .catch(error => error);

export const getCard = async (token: string) =>
    fetch(`${serverUrl}/card?token=${token}`)
        .then(response => response.status !== 200 ? Promise.reject(response) : response.json())
        .catch(error => error);

export const getRoute = async (fromAddress: string, toAddress: string) =>
    fetch(`${serverUrl}/route?address1=${fromAddress}&address2=${toAddress}`)
        .then(response => response.status !== 200 ? Promise.reject(response) : response.json())
        .catch(error => error);

export const getAddressList = async () =>
    fetch(`${serverUrl}/addressList`)
        .then(response => response.status !== 200 ? Promise.reject(response) : response.json())
        .catch(error => error);
