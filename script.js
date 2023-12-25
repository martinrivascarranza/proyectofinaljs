document.addEventListener('DOMContentLoaded', function () {
  // eventos
  document.getElementById('btnSaludar').addEventListener('click', saludarUsuario);
  document.getElementById('btnVerPesos').addEventListener('click', mostrarInfoPesasRusas);
  document.getElementById('btnBuscarPesa').addEventListener('click', buscarPesa);
  document.getElementById('btnRealizarCompra').addEventListener('click', realizarCompra);

  let datosGuardados = localStorage.getItem('datos');
  if (datosGuardados) {
      
  }
});

const pesasRusas = [
  { peso: 4, precio: 10 },
  { peso: 6, precio: 14 },
  { peso: 8, precio: 20 },
  { peso: 12, precio: 25 },
  { peso: 16, precio: 35 },
  { peso: 20, precio: 40 },
  { peso: 24, precio: 50 }
];

function saludarUsuario() {
  
  let nombre = document.getElementById('inputNombre').value;

  let resultadoSaludo = `Bienvenido ${nombre} a nuestra tienda de kettlebells`;

  document.getElementById('resultadoSaludo').innerHTML = resultadoSaludo;

  let datos = { saludo: resultadoSaludo };
  localStorage.setItem('datos', JSON.stringify(datos));
}

function mostrarInfoPesasRusas() {
  let infoPesasRusas = "Información sobre kettlebells:<br>";

  for (const pesa of pesasRusas) {
      infoPesasRusas += `Peso: ${pesa.peso} kg - Precio: ${pesa.precio} euros<br>`;
  }

  document.getElementById('infoPesasRusas').innerHTML = infoPesasRusas;
}

function buscarPesa() {
  let pesoCliente = parseFloat(document.getElementById('inputPeso').value);
  let pesaElegida = encontrarPesaPorPeso(pesoCliente);

  //  resultados
  if (pesaElegida) {
      let precioConIVA = pesaElegida.precio * 1.19; // 19% de IVA

      
      document.getElementById('resultado').innerHTML = `Has elegido una kettlebell de ${pesaElegida.peso} kg. El costo es de ${precioConIVA.toFixed(2)} euros (IVA incluido).`;
  } else {
      
      document.getElementById('resultado').innerHTML = "Lo siento, no tenemos kettlebells disponibles para el peso ingresado.";
  }
}

function realizarCompra() {
  
  let metodoPago = document.getElementById('selectPago').value;

  document.getElementById('resultado').innerHTML += `<br>Método de Pago: ${metodoPago}`;

  document.getElementById('selectPago').parentNode.style.display = 'none';

  document.getElementById('resultado').innerHTML += "<br>¡Su compra ha sido realizada con éxito! ¡Muchas gracias y vuelva pronto!";
}

function encontrarPesaPorPeso(peso) {
  return pesasRusas.find(pesa => pesa.peso === peso);
}
