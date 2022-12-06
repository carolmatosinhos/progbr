var config = {
    apiKey: "AIzaSyDdgOKoaeBhl_FxpJH1tGyl5RLj_ZsX2dc",
    authDomain: "colegio-39637.firebaseapp.com",
    databaseURL: "https://colegio-39637-default-rtdb.firebaseio.com",
    projectId: "colegio-39637",
    storageBucket: "colegio-39637.appspot.com",
    messagingSenderId: "189358204352",
    appId: "1:189358204352:web:d3d0c9772278fcccfbd425",
    measurementId: "G-2PW0GTRW7R"
};

firebase.initializeApp(config);

let db = firebase.firestore();


/* ler todos os dados de uma coleção
db.collection("turmaA").get()
    .then((snapshot) => {
        snapshot.forEach((doc) => {
            let aluno = doc.data();
            console.log(aluno.nome);
        })
    }) */

/*Ler registro especifico através do identificador
let docRef = db.collection("turmaA").doc("eWAETfvLDhrJYyM0XCkB");

docRef.get().then((doc) => {
    console.log(doc.data().nome)
}) */


/*fazer buscas e selecionar só alguns dados do bd
db.collection("turmaA").where("nome", "==", "José").get()
    .then(snapshot => {
        snapshot.forEach((doc) => {
            let aluno = doc.data();
            console.log(aluno.nome, aluno.sobrenome);
        })
    }) */

/*adicionar novo documento a uma coleção
db.collection("turmaA").add({
    nome: "Marcos",
    sobrenome: "Santos",
    notas: {
        nota1: 9.6, nota2: 7.5
    },
}).then((doc) => {
    console.log("Documento inserido com sucesso:", doc);
}).catch(err => {
    console.log(err);
}) */

//adicionar novo documento a uma coleção definindo um id
db.collection("turmaA").doc("AlunoNovo").set({
    nome: "Mariana",
    sobrenome: "Oliver",
    notas: {
        nota1: 8.6, nota2: 7.5
    },
}
).then(() => {
    console.log("Documento inserido com sucesso");
}).catch(err => {
    console.log(err);
})



//Para modificar um documento usamos o set também. Se o nome do documento já existir, ele vai ser modificado, senão ele vai ser adicionado