function enviar() {

 const dados = {
    nome: document.getElementById("nome").value,
    idade: document.getElementById("idade").value,
    curso: document.getElementById("curso").value
};

fetch("https://script.google.com/macros/s/AKfycbz65vdUUOzT2LYB65lBsidj1ach4Cjg7QTSHNQcMUmP2jaWmvvSuORiYhSB9YDdEjHB/exec", {
    method: "POST",
    body: JSON.stringify(dados)
})
.then(res=> res.text ())
then(resposta => {
    alert('dados enviados com sucesso');
    console.log(resposta);
});
}