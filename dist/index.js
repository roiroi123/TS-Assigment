function returnHigherPrice(pro1, pro2) {
    if (pro1.price > pro2.price) {
        return (`${pro1.name} costs more than the ${pro2.name}`);
    }
    else {
        return (`${pro2.name} costs more than the ${pro1.name}`);
    }
}
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
class Product {
    constructor(name, price, weight, isKosher, manufacturer) {
        this.name = name;
        this.price = price;
        this.weight = weight;
        this.isKosher = isKosher;
        this.manufacturer = manufacturer;
        this.date = randomDate(new Date(2012, 0, 1), new Date(2025, 0, 1));
    }
    // console logged and inserted to the Table
    get showProductFull() {
        return console.log(`Name:${this.name} price:$${this.price} weight:${this.weight}Kg  isKoser? ${this.isKosher}
        manufacturer :${this.manufacturer}`);
    }
    // console logged and inserted to the Table 
    get showProductNameAndPrice() {
        return console.log(`Name:${this.name} price:$${this.price} `);
    }
    //  priceforKillo
    priceForKilo() {
        return (this.price / this.weight);
    }
    //higher price
    // exp date 2 products
    expirationDate(pro1, pro2) {
        if (pro1.date > pro2.date) {
            return (`${pro2.name} will expire first than the ${pro1.name}`);
        }
        else {
            return (`${pro1.name} will expire first first than the ${pro2.name}`);
        }
    }
    //exp date today
    isExpired() {
        if (this.date > new Date()) {
            return false;
        }
        else {
            return true;
        }
    }
    // Printing to UI
    printProductToTable(product) {
        const tBody = document.getElementById("tbody");
        const tr = document.createElement("tr");
        const tdName = _getTd();
        const tdPrice = _getTd();
        const tdIsKosher = _getTd();
        const tdWeight = _getTd();
        const tdManufacturer = _getTd();
        const priceForKiloT = _getTd();
        const dateProduct = _getTd();
        const isProductExp = _getTd();
        tdPrice.innerText = product.price;
        tdName.innerText = product.name;
        tdWeight.innerText = product.weight;
        tdIsKosher.innerText = product.isKosher;
        tdManufacturer.innerText = product.manufacturer;
        priceForKiloT.innerText = product.priceForKilo();
        dateProduct.innerText = product.date;
        isProductExp.innerText = product.isExpired();
        tr.append(tdName);
        tr.append(tdPrice);
        tr.append(tdWeight);
        tr.append(tdIsKosher);
        tr.append(tdManufacturer);
        tr.append(priceForKiloT);
        tr.append(dateProduct);
        tr.append(isProductExp);
        tBody.append(tr);
    }
}
const container = document.getElementById("contain");
//built in products
const product1 = new Product("onion", 5, 2, true, "Osem");
const product2 = new Product("tomato", 3, 2, true, "Elite");
const product3 = new Product("Snickers", 8, 2.5, false, "Usa");
const product4 = new Product("Banana", 2, 1.6, true, "Elite");
container.innerText += returnHigherPrice(product1, product2);
container.innerHTML += "<br></br>";
container.innerText += returnHigherPrice(product2, product4);
container.innerHTML += "<br></br>";
container.innerText += product1.expirationDate(product1, product2);
product1.printProductToTable(product1);
product2.printProductToTable(product2);
product3.printProductToTable(product3);
product4.printProductToTable(product4);
const btn = document.getElementById("btn");
const nameInput = document.getElementById("name");
const priceInput = document.getElementById("price");
const weightInput = document.getElementById("weight");
//  forgot to add inputs (didnt understood the assigment)
btn.addEventListener("click", () => {
    const addedProduct = new Product(nameInput.value, priceInput.value, weightInput.value, true, "International");
    addedProduct.printProductToTable(addedProduct);
});
function _getTd() {
    const tdName = document.createElement("td");
    return tdName;
}
