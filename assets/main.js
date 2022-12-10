//E2_JS
// Vamos a utilizar el mismo array de objetos "Pizzas🍕" del desafío general
// anterior. 
// 👉 Crear un archivo HTML con un input de tipo number, un botón y un 
//contenedor en el cual renderizar el resultado de la búsqueda. 
// 👉 El desafío será, al tocar el botón, capturar el valor ingresado en el
// input.
// 👉 Renderizar en el contenedor un h2 con el nombre y en un h3 con el 
//precio de la pizza cuyo id coincida con el numero ingresado en el input. 
// 🚨 Si el número ingresado no coincide con ningún id, renderizar 
//(no sirve un alert) un mensaje de error en el contenedor. 
// 🚨 Si no se ingresa un número, renderizar (no sirve un alert) un 
//mensaje de error diferente en el contenedor. 
// 🚨 Solo debe renderizarse una única cosa , ya sea la nueva pizza, o el 
//nuevo mensaje de error. El resto se debe pisar.
// 🆙 Entregar el link de Github , en el cual debe estar linkeado el deploy
// del Vercel de su aplicación (mediante Github nosotros deberíamos poder 
//ver el Vercel vinculado a su repositorio). 

const pizzas = [
    {
        id: 1,
        nombre: "La Mr. Pit",
        ingredientes: ["Muzza",
                       " aceitunas", 
                       " huevo duro"],
        precio: 350,
    },

    {
        id: 2,
        nombre: "Q jamone",
        ingredientes: ["Jamon crudo", 
                       " rúcula", 
                       " provolone"],
        precio: 350,
    },
    {
        id: 3,
        nombre: "La Charly",
        ingredientes: ["Doble tomate", 
                       " muzza doble", 
                       " finas hierbas"],
        precio: 380,
    },
    {
        id: 4,
        nombre: "La Maradona",
        ingredientes: ["Jamon cocido", 
                       " muzza", 
                       " queso azul", 
                       " aceitunas"],
        precio: 450,
    },
    {
        id: 5,
        nombre: "Picantovich",
        ingredientes: ["Mix de ajies", 
                       " doble tomate", 
                       " doble muzza", 
                       " finas hierbas"],
        precio: 750,
    },
    {
        id: 6,
        nombre: "La Hasbulla",
        ingredientes: ["Jamon cocido", 
                       " doble muzza", 
                       " huevo frito", 
                       " queso cheddar"],
        precio: 850,
    },    
    {
        id: 7,
        nombre: "Leo messi",
        ingredientes: ["Cantimpalo", 
                       " doble muzza", 
                       " finas hierbas"],
        precio: 800,
    },    
    {
        id: 8,
        nombre: "Nicki Gi",
        ingredientes: ["Mix de verduras", 
                       " doble muzza", 
                       " huevo duro"],
        precio: 700,
    },    

]


const formField = document.getElementById("Form");
const pizzaInput = document.getElementById("numero de pizza");
const formInput = document.getElementById("form");

formInput.addEventListener("submit", (e) => {
    e.preventDefault();
    const pizzaNumber = pizzaInput.value;
    const pizza = pizzas.find(pizza => pizza.id == pizzaNumber);

    if (pizzaNumber == "") {
        
        showError(pizzaNumber, `Debe ingresar un número`);  
    }
    else if (pizza) {
        
       showSuccess(pizzaNumber,
         `La pizza "${pizza.nombre}" tiene un valor de:`,
          `$${pizza.precio}`);
        
    } else {
        showError(pizzaNumber, `Debe ingresar un número del 1 al 8`);
       
    }
});

const showSuccess = (input, message1, message2) => {
	formField === input.parentElement;
	formField.classList.remove("error");
	formField.classList.add("success");
	const render1 = document.querySelector("#Pizza");
	render1.textContent = message1;
    const render2 = document.querySelector("#Precio");
	render2.textContent = message2;
}

const showError = (input, message) => {
	formField === input.parentElement;
	formField.classList.remove("success");
	formField.classList.add("error");
	const error = formField.querySelector("#error");
	error.textContent = message;
};


