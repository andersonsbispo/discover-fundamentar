// callback function

function sayMyName2(name) {
    console.log("Antes de executar a função callback");

    name();

    console.log("Depois de executar a callback");
}

sayMyName2(
    () => {
        console.log("Estou em uma callback");
    }
);