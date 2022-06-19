let input_food = document.getElementById("input_item");
let alretdiv = document.createElement("div");
let alretstrong = document.createElement("strong");
alretdiv.appendChild(alretstrong);
//event Handler
function foodadd(message) {
    if (input_food.value.trim() == "") {
        //alret empty set
        alretdiv.className = "alretEmpty"
        alretstrong.innerHTML = "";
        let textstrong = document.createTextNode("Enter The Items:");
        alretstrong.appendChild(textstrong);
        console.log(document.getElementById("container").prepend(alretdiv))
    }
    else {
        //food list add
        // < li class="foodItem" >
        //     <div class="">idly</div>
        //     <div onclick="removeItem(event,'hari')">
        //         <i class="fa-solid fa-trash"></i>
        //     </div>
        // </li >
        let foodItemli = document.createElement("li");
        foodItemli.className = "foodItem";
        let foodNamediv = document.createElement("div");
        foodNamediv.className = "foodName";
        let foodIcondiv = document.createElement("div");
        foodItemli.append(foodNamediv, foodIcondiv);
        let foodItemText = document.createTextNode(input_food.value);
        foodNamediv.appendChild(foodItemText);
        let foodIconbtn = document.createElement("i");
        foodIconbtn.className = "fa-solid fa-trash";
        foodIcondiv.appendChild(foodIconbtn);
        //onclick attributes
        foodIconbtn.parentElement.setAttribute("onclick", "removeItem(event,'Successfully Deleted item')")
        document.getElementById("allFood").append(foodItemli);
        //alret add FoodItem
        alretdiv.className = "alretgreen"
        alretstrong.innerHTML = "";
        let textstrong = document.createTextNode(message + " " + input_food.value);
        alretstrong.appendChild(textstrong);
        console.log(document.getElementById("container").prepend(alretdiv));
        input_food.value = "";

    }

}

function removeItem(event, message) {
    //Remove the Food items
    let foodName = document.querySelector(".foodName").textContent;
    let removeBtn = event.target.parentNode.parentNode;
    removeBtn.remove();
    //alret delete FoodItems
    alretdiv.className = "alretred"
    alretstrong.innerHTML = "";
    let textstrong = document.createTextNode(`${message} ${foodName}`);
    alretstrong.appendChild(textstrong);
    console.log(document.getElementById("container").prepend(alretdiv));
}



























