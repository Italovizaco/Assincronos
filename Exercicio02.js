const api = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(200)
            // reject(-1)
        }, 2000);
    })
}

// Usando Await
const getApi = async () => {
    let info = await api("https://www.google.com.br");
    console.log(info);
}

getApi()
