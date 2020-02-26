

const age = prompt('Introduzca su edad'), retired = 67;
let laboralLife = retired - age;



if (isNaN(age) || (age < 1)) {
    alert('Introduzca un dato numérico');
} else {
    if (age < retired) {
        alert('Le quedan ' + laboralLife + ' hasta su jubilación.');
    } else {
        alert('Usted ya está jubilado');
    }
}

