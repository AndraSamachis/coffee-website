class Produs {
    constructor(id, nume, cantitate) {
      this.id = id;
      this.nume = nume;
      this.cantitate = cantitate;
    }
  }

  const listaCumparaturi = [];
  let idProdus = 1;
   
//promises și arrow functions
const adaugaProdus = () => {
    const nume = document.getElementById("nume").value;
    const cantitate = document.getElementById("cantitate").value;
  
    Promise.resolve()
      .then(() => {
        const produs = new Produs(nume, cantitate, idProdus);
        listaCumparaturi.push(produs);
idProdus++;
})
.then(() => {
const lista = document.getElementById("lista-cumparaturi");
const element = document.createElement("li");
element.innerHTML = '${nume} - ${cantitate}';
lista.appendChild(element);
})
.then(() => {
localStorage.setItem("lista-cumparaturi", JSON.stringify(listaCumparaturi));
})
.catch((err) => {
console.error(err);
});
};