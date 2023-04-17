/*
    Buscando e contando dados em array

    Baseado no Array de Livros por categoria abaixo, faça os seguintes desafios

        * Contar o número de categorias e o numero de livros em cada categoria
        * Contar o número de altores
        * Mostrar livros do autor Augusto Cury
        * Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clarson",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como engrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

const totalCategories = booksByCategory.length;

for(let category of booksByCategory) {
    console.log("Total de livros da categoria", category.category);
    console.log(category.books.length);
}

function booksOfAuthor(author) {
    let books = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === author) {
                books.push(book.title);
            }
        }
    }
    console.log(`Livros do autor ${author}: ${books.join(", ")}`);
}

booksOfAuthor("Augusto Cury");