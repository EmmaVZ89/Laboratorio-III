/// <reference path="./figura_geometrica.ts" />
/// <reference path="./rectangulo.ts" />
/// <reference path="./triangulo.ts" />

namespace Prueba {
    let rect = new Entidades.Rectangulo2("red", 4, 8);
    console.log(rect.ToString());
    
    let triang = new Entidades.Triangulo("blue", 3, 5);
    console.log(triang.ToString());
    
    (<HTMLElement> document.getElementById("rectangulo")).innerText = rect.ToString();
    (<HTMLElement> document.getElementById("triangulo")).innerText = triang.ToString();    
}
