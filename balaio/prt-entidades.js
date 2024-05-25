

let usuario = {
    id: INT,
    nome: '',
    username: '',
    senha:''
}

let usuarios = []

let post = {
    ID: INT,
    autorID: INT,
    emoji: '',
    texto: '',
    data: DATE,
    reacts: [
        {
            emoji: '',
            qtd: INT
        },
    ],
    comentarios:[
        comentario
    ]
}

let posts = []

let comentario = {
    ID: INT,
    postID: INT,
    autorID:INT,
    texto: '',
    reacts: []
}