//didnt understood why i should make it in a seperated Class if i can use it as a regular function **(תאריך תפוגה (מחלקה נפרדת))**
function randomDate(start, end) {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  }
  
  class Product {
    private name: string;
    private price: number;
    private weight: number;
    private isKosher: boolean;
    private manufacturer: string;
    public date: Date;
    constructor(name, price, weight, isKosher, manufacturer) {
      this.name = name;
      this.price = price;
      this.weight = weight;
      this.isKosher = isKosher;
      this.manufacturer = manufacturer;
      this.date = randomDate(new Date(2012, 0, 1), new Date(2025, 0, 1));
    }
  // console logged and inserted to the Table
    public get showProductFull(): void {
      return console.log(`Name:${this.name} price:$${this.price} weight:${this.weight}Kg  isKoser? ${this.isKosher}
          manufacturer :${this.manufacturer}`);
    }
    // console logged and inserted to the Table 
    public get showProductNameAndPrice(): void {
      return console.log(`Name:${this.name} price:$${this.price} `);
    }
  //  priceforKillo
    public  priceForKilo() {
      return (this.price / this.weight);
    }
    //higher price
    public returnHigherPrice(pro1: Product, pro2: Product) {
      if (pro1.price > pro2.price) {
        return (`${pro1.name} costs more than the ${pro2.name}`);
      } else {
          return(`${pro2.name} costs more than the ${pro1.name}`);
      }
    }
  // exp date 2 products
    
  public expirationDate(pro1: Product, pro2: Product) {
      if (pro1.date > pro2.date) {
          return(`${pro2.name} will expire first than the ${pro1.name}`);
      } else {
          return(`${pro1.name} will expire first first than the ${pro2.name}`);
      }
    }
    //exp date today
    public isExpired() {
      if (this.date > new Date()) {
          return false;
      } else {
          return true;
      }
    }
    // Printing to UI
    public printProductToTable(product) {
      const tBody = document.getElementById("tbody");
      const tr: HTMLElement = document.createElement("tr");
  
      const tdName: HTMLElement = document.createElement("td");
      tdName.innerText = product.name;
  
      const tdPrice: HTMLElement = document.createElement("td");
      tdPrice.innerText = product.price;
  
      const tdWeight: HTMLElement = document.createElement("td");
      tdWeight.innerText = product.weight;
  
      const tdIsKosher: HTMLElement = document.createElement("td");
      tdIsKosher.innerText = product.isKosher;
  
      const tdManufacturer: HTMLElement = document.createElement("td");
      tdManufacturer.innerText = product.manufacturer;
  
      const priceForKiloT: any = document.createElement("td");
      priceForKiloT.innerText = product.priceForKilo()
  
      
  
      const dateProduct: HTMLElement = document.createElement("td");
      dateProduct.innerText = product.date;
      
      const isProductExp: HTMLElement = document.createElement("td");
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
  const container:HTMLDivElement = document.getElementById("contain")
  const product1 = new Product("onion", 5, 2, true, "Osem");
  const product2 = new Product("tomato", 3, 2, true, "Elite");
  const product3 = new Product("Snickers", 8, 2.5, false, "Usa");
  const product4 = new Product("Banana", 2, 1.6, true, "Elite");
  
  container.innerText += product1.returnHigherPrice(product1, product2)
  container.innerHTML += "<br></br>"
  container.innerText += product1.returnHigherPrice(product2, product4)
  container.innerHTML += "<br></br>"
  
  
  container.innerText +=product1.expirationDate(product1, product2);
  
  
  product1.printProductToTable(product1);
  product1.printProductToTable(product2);
  product1.printProductToTable(product3);
  product1.printProductToTable(product4);
  
  const btn:HTMLButtonElement = <HTMLInputElement>document.getElementById("btn")
  const nameInput:HTMLInputElement = <HTMLInputElement>document.getElementById("name")
  const priceInput:HTMLInputElement = <HTMLInputElement>document.getElementById("price")
  const weightInput:HTMLInputElement = <HTMLInputElement>document.getElementById("weight")
 
//  forgot to add inputs (didnt understood the assigment)
  btn.addEventListener("click",()=>{
   const addedProduct:Product = new Product(nameInput.value, priceInput.value, weightInput.value, true, "International")
   addedProduct.printProductToTable(addedProduct)
   
  })
  
  
