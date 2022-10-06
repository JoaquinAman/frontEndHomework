class Pizza {
  ingredients = [];

  cook = async function () {
    await sleep(4000);

    console.log("The pizza is ready");
  };

  ingr = async function(strIngredient){
    await sleep(2000);
    console.log("Adding... " + strIngredient + "\n" + "The " + strIngredient + " was added" + "\n")   
  }
  
  async addIngredients(strIngredient) {
    // console.log("Adding... ", strIngredient);
    
    this.ingredients.push(strIngredient);
    // console.log("The " + strIngredient + " was added");
    this.ingr(strIngredient).then(sleep(2000))
    // await sleep(4000);
  }

  constructor() {}
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

let p = new Pizza();

p.addIngredients("tomate")
  .then(setTimeout(()=>{() => sleep(2000), 2000}))
  .then(p.addIngredients("queso"))
  .then(() => sleep(2000))
  .then(p.addIngredients("harina"))
  .then(() => sleep(2000))
  .then(p.addIngredients("pollo"))
  .then(() => sleep(2000))
p.cook();