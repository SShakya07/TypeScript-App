function bodyload()
{


    let Username:String = "Satyam  Shaklya";
let Age:number = 22;
let Subscribed:boolean = true;

//console.log(`Name=${Username}\nAge=${Age}\n${Subscribed}`);
document.querySelector("p").innerHTML=`

UserName =${Username}<br>
Age=${Age}<br>
Subscribed=${Subscribed}

`;
}
