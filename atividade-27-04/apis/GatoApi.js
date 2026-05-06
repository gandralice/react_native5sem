class GatoApi {
    static async buscaGato() {
        try {
            const response = await fetch(`https://api.thecatapi.com/v1/images/search`);
            const data = await response.json();
            return data[0].url;
        }
        catch(error) {
            console.error(error);
            alert('Erro')
        }
    }
}

export default GatoApi;