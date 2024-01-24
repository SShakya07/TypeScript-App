function bodyload() {
    var Username = "Satyam  Shaklya";
    var Age = 22;
    var Subscribed = true;
    //console.log(`Name=${Username}\nAge=${Age}\n${Subscribed}`);
    document.querySelector("p").innerHTML = "\n\nUserName =".concat(Username, "<br>\nAge=").concat(Age, "<br>\nSubscribed=").concat(Subscribed, "\n\n");
}
