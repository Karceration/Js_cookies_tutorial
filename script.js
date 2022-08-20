
let counter = document.getElementById("panier");
let x = localStorage.getItem("counter");
let newList = document.getElementById("myProducts");





function MoveToBuy(_item){
    let btn = document.getElementById(_item);
    btn.classList.add("disabled");
    btn.classList.add("bg-secondary");
    x++;
    localStorage.setItem("counter",x);
    counter.innerText=x;
    if(localStorage.getItem(_item)){
        localStorage.setItem(_item,+localStorage.getItem(_item)+1)
    }
    else {
        localStorage.setItem(_item,1);
    }
    
}

counter.innerText=x;

function ResetPanier() {
    localStorage.clear();
    counter.innerText = 0;
    x=0;
}

function showPanier(){
    const btn = document.getElementById("shows");
    btn.classList.remove("bg-warning");
    btn.setAttribute("disabled",true);
    let monPanier = Object.entries(localStorage);
    //seperate counter and products

    let articles = monPanier.filter(e =>
        e[0]!== "counter"
        );

    let somme = monPanier.filter(e =>
        e[0]== "counter"
        );

        
    articles.map(e => {
        let prod = document.createElement("li");
        prod.innerText=`PRODUIT : ${e[0]}  NB : ${e[1]}`;
        newList.appendChild(prod);
    })

    document.getElementById("somme").innerText=`SOMME : ${somme[0][1]}`
        
    

    
    
}

