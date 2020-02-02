//Declaración de variables
var nombreUsuario = "Juan Pablo Espinosa";
var saldoCuenta = 45000;
var limiteExtraccion = 10000;
var codigo = 5454;


//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
  iniciarSesion();
  cargarNombreEnPantalla();
  actualizarSaldoEnPantalla();
  actualizarLimiteEnPantalla();
}

//Funciones que tenes que completar


function cambiarLimiteDeExtraccion() {
  var nuevoLimite = parseInt(prompt("Ingrese el nuevo límite de extracción: "));
  if (!isNaN(nuevoLimite)) {
    limiteExtraccion = nuevoLimite;
    actualizarLimiteEnPantalla();
    alert("Su nuevo límite de extracción es: " + nuevoLimite);
  }
}

function restarDinero(dinero) {
  var resta = saldoCuenta - dinero;
  return resta;
}


function extraerDinero() {
  var dineroExtraido = parseInt(prompt("Ingrese el monto a extraer: "));
  var saldoAnterior = saldoCuenta;
  if (isNaN(dineroExtraido)) {
    return;
  } else if (saldoCuenta < dineroExtraido) {
    alert("No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero.");
  } else if (dineroExtraido > limiteExtraccion) {
    alert("La cantidad de dinero que desea extraer es superior al límite de extracción.");
  } else if (dineroExtraido % 100 != 0) {
    alert("El cajero solo emite billetes de $100.")
  } else {
    saldoCuenta = restarDinero(dineroExtraido);
    alert("Saldo anterior: $" + saldoAnterior + "\nDinero extraído: $" + dineroExtraido + "\nSaldo actual: $" + saldoCuenta);
    actualizarSaldoEnPantalla();
  }
}

function sumarDinero(dinero) {
  var suma = saldoCuenta + dinero;
  return suma;
}

function depositarDinero() {
  var dineroDepositado = parseInt(prompt("Ingrese el monto a depositar: "));
  var saldoAnterior = saldoCuenta;
  if (isNaN(dineroDepositado)) {
    return;
  } else {
    saldoCuenta = sumarDinero(dineroDepositado);
    actualizarSaldoEnPantalla();
    alert("Saldo anterior: $" + saldoAnterior + "\nDinero Ingresado: $" + dineroDepositado + "\nSaldo Actual: $" + saldoCuenta);
  }
}


function pagarServicio() {
  var Agua = 350;
  var Telefono = 425;
  var Luz = 210;
  var Internet = 570;
  var saldoAnterior = saldoCuenta;
  var servicioAPagar = parseInt(prompt("Ingrese el número que corresponda con el servicio que querés pagar: \nAgua: 1\nTeléfono: 2\nLuz: 3\nInternet: 4"));
  switch (servicioAPagar) {
    case 1:
      if (saldoCuenta < Agua) {
        alert("No tienes el saldo suficiente para pagar este servicio.");
        return;
      } else {
        saldoCuenta = saldoCuenta - Agua;
        actualizarSaldoEnPantalla()
        alert("Pagaste el servicio de Agua.\nSaldo anterior: $" + saldoAnterior + "\nDinero descontado: $" + Agua + "\nSaldo actual: $" + saldoCuenta)
      }
      break;
    case 2:
      if (saldoCuenta < Telefono) {
        alert("No tienes el saldo suficiente para pagar este servicio.");
        return;
      } else {
        saldoCuenta = saldoCuenta - Telefono;
        actualizarSaldoEnPantalla()
        alert("Pagaste el servicio de Teléfono.\nSaldo anterior: $" + saldoAnterior + "\nDinero descontado: $" + Telefono + "\nSaldo actual: $" + saldoCuenta)
      }
      break;
    case 3:
      if (saldoCuenta < Luz) {
        alert("No tienes el saldo suficiente para pagar este servicio.");
        return;
      } else {
        saldoCuenta = saldoCuenta - Luz;
        actualizarSaldoEnPantalla()
        alert("Pagaste el servicio de Luz.\nSaldo anterior: $" + saldoAnterior + "\nDinero descontado: $" + Luz + "\nSaldo actual: $" + saldoCuenta)
      }
      break;
    case 4:
      if (saldoCuenta < Internet) {
        alert("No tienes el saldo suficiente para pagar este servicio.");
        return;
      } else {
        saldoCuenta = saldoCuenta - Internet;
        actualizarSaldoEnPantalla()
        alert("Pagaste el servicio de Internet.\nSaldo anterior: $" + saldoAnterior + "\nDinero descontado: $" + Internet + "\nSaldo actual: $" + saldoCuenta)
      }
      break;
    case isNaN(servicioAPagar) || servicioAPagar > 4:
      return;
    default:
  }
}

function transferirDinero() {
  var CuentaAmiga1 = 1234567;
  var CuentaAmiga2 = 7654321;
  var MontoATransferir = parseInt(prompt("Ingrese el monto que desea transferir: "));
  var CuentaATransferir = parseInt(prompt("Ingrese el número de cuenta a transferir:"));
  if (isNaN(MontoATransferir)) {
    return;
  } else if (MontoATransferir > saldoCuenta) {
    alert("No puede transferir esa cantidad de dinero")
  } else if (CuentaATransferir != CuentaAmiga1 && CuentaATransferir != CuentaAmiga2) {
    alert("Solo puede realizar una transferencia a una cuenta amiga.")
  } else {
    saldoCuenta = saldoCuenta - MontoATransferir;
    actualizarSaldoEnPantalla();
    alert("La transferencia ha sido realizada.\nUsted ha transferido: $" + MontoATransferir + "\nCuenta destino: " + CuentaATransferir)
  }
}

function iniciarSesion() {
  var verificacion = parseInt(prompt("Ingrese el código de su cuenta: "))

  switch (verificacion) {
    case codigo:
      alert("Bienvenido/a " + nombreUsuario + ", ya puedes empezar a realizar operaciones.")
      break;
    case !codigo:
      alert("Codigo incorrecto")
    default:
  }
}

function cambiarCodigo() {
  var comprobacion = parseInt(prompt("Ingrese su código actual: "))
  if ((comprobacion == codigo) && !isNaN(comprobacion)) {
    var cambioPass = parseInt(prompt("Ingrese su código nuevo: "))
    codigo = cambioPass
  } else {
    alert("El código ingresado es incorrecto.")
    return;
  }
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
  document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
  document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
  document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}
