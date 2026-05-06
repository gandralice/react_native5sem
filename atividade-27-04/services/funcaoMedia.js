export default function funcaoMedia(number1, number2, number3, setResp) {
    const nota = (parseFloat(number1)+parseFloat(number2)+parseFloat(number3))/3;

    if(nota > 6) {
        setResp(nota.toFixed(2) + " Aprovado!");
    } else {
        setResp(nota.toFixed(2) + " Reprovado!");
    }
}