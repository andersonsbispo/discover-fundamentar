// throw
function sayMyName(name = "") {
    if(name === "") {
        throw new Error("Nome é obrigatório");
    }

    console.log(name);
}

// try..catch
try {
    sayMyName("Anderson");
} catch(e) {
    console.log(e);
}

console.log("Após ao try/catch");