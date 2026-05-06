class AlunoApi {
    
    static async getAluno() {
        const response = await fetch(`http://192.168.8.100:3000/alunos`);
        const data = await response.json();
        return data;
    }

    static async postAluno(aluno) {
        const response = await fetch(`http://192.168.8.100:3000/alunos`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json" 
            },
            body: JSON.stringify(aluno)
            });
            
        const data = await response.json();
        return data;
    }

    static async putAluno(cod, aluno) {
        const response = await fetch(`http://192.168.8.100:3000/alunos/${cod}`,
            {method: "PUT",
            headers: {
            "Content-Type": "application/json"
            },
                body: JSON.stringify(aluno)
            });
        const data = await response.json();
        return data;
    }

    static async deleteAluno(cod) {
        await fetch(`http://192.168.8.100:3000/alunos/${cod}`, 
            {method: "DELETE"});
    }
}

export default AlunoApi;
