// 1. Declare uma variável de nome weight

    let weight;

// 2. Que tipo de dado é a variável acima?

    console.log(typeof weight);

/*
    3. Declare uma variável e atribua valores para cada um dos dados:
        * name: String
        * age: Number (integer)
        * stars: Number (float)
        * inSubscribed: Boolean
*/

    let name = "Anderson";
    let age = 25;
    let stars = 4.5;
    let inSubscribed = true;

/* 
    4. A variável student abaixo é de que tipo de dados?

    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

    4.2 Mostre no console a seguinte mensagem:

        <name> de idade <age> pesa <weigh> kg.

        Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto.
*/

   let student = {
       name: "Anderson",
       age: 25,
       weight: 57
    }
    
    console.log(typeof student);
    console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`);

// 5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio    
    
    let students = [];
    console.log(typeof students);

// 6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o obeto, mas usar o objeto criado e inserir ele no Array)

    students = [student];
    console.log(students);

// 7. Coloque no console o valor de poisção zero do Array acima

    console.log(students[0]);

// 8. Crie um novo student e coloque na posição 1 do Array students

    let student2 = {
        name: "Jose",
        age: 58,
        weight: 70
    }

    students [1] = student2;

    console.log(students[1]);

// 9. Sem rodar o código responda qual é a resposta do código abaixo e porque? Após sua resposta, rode o código e veja se você acertou.

console.log(a);
var a = 1;