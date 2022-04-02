"use strict";
function Click() {
    alert("desde función...");
}
var Manejadora = (function () {
    function Manejadora() {
    }
    Manejadora.Click = function () {
        alert("desde clase...");
    };
    return Manejadora;
}());
//# sourceMappingURL=main1.js.map