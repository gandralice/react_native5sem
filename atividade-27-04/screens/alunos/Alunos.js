import { View, Text, ScrollView, StyleSheet } from "react-native-web";
import AlunoApi from "../../apis/AlunoApi";
import { useState, useEffect } from "react";
import TextInputBox from "../../components/textInputBox/TextInputBox";
import CustomButton from "../../components/customButton/CustomButton";


export default function Alunos() {
    const [alunos, setAluno] = useState([]);
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [serie, setSerie] = useState("");
    const [editando, setEditando] = useState(null);

    async function carregar() {
        try {
            const data = await AlunoApi.getAluno();
            setAluno(data);
        } catch (error) {
            console.error("Erro ao carregar:", error);
        }
    }

    async function salvar() {
        const aluno = { nome, telefone, email, dataNascimento, serie };

        try {
            if (editando) {
                await AlunoApi.putAluno(editando, aluno);
                setEditando(null);
            } else {
                await AlunoApi.postAluno(aluno);
            }

            setNome("");
            setTelefone("");
            setDataNascimento("");
            setEmail("");
            setSerie("");

            carregar();
        } catch (error) {
            alert("Erro ao salvar os dados.");
        }
    }

    async function excluir(id) {
        try {
            await AlunoApi.deleteAluno(id);
            carregar();
        } catch (error) {
            console.error("Erro ao excluir:", error);
        }
    }

    function editar(a) {
    
        setNome(a.nome);
        setTelefone(a.telefone);
        setEmail(a.email);
        setDataNascimento(a.dataNascimento);
        setSerie(a.serie);
        setEditando(a.id);
    }

    useEffect(() => {
        carregar();
    }, []);

    return (
        <ScrollView>
            <View style={{ padding: 20 }}>
                <TextInputBox placeholder="Nome" value={nome} onChangeText={setNome} />
                <TextInputBox placeholder="Telefone" value={telefone} onChangeText={setTelefone} />
                <TextInputBox placeholder="Email" value={email} onChangeText={setEmail} />
                <TextInputBox placeholder="Data Nascimento" value={dataNascimento} onChangeText={setDataNascimento} />
                <TextInputBox placeholder="Serie" value={serie} onChangeText={setSerie} />

                <CustomButton
                    title={editando ? "Atualizar" : "Cadastrar"}
                    onPress={salvar} style={styles.cadastrar}
                />

                {alunos.map((a) => {
                    return (
                        <View key={a.id} style={{ marginTop: 10, padding: 10, borderBottomWidth: 1 }}>
                            <Text>{a.nome}</Text>
                            <CustomButton style={styles.button} title="Editar" onPress={() => editar(a)} />
                            <CustomButton style={styles.button} title="Excluir" onPress={() => excluir(a.id)} />
                        </View>
                    );
                })}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 70,
        backgroundColor: "purple",
    },
    cadastrar: {
        backgroundColor: "#FF1D8D"
    }
})