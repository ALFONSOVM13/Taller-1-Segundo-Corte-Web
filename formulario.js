let usuarios = [
  {
    cedula: "1221713927",
    nombre: "Alfonso Vengoechea",
    genero:"Masculino",
    email: "avengoec@cuc.edu.co",
    telefono: "3184465893",
    direccion: "Carrera 19 E 38C ",
    ciudad: "Barranquilla",
    pais: "Colombia"
    
  },
  {
    cedula: "987654321",
    nombre: "Cristian Torres",
    genero:"Masculino",
    email: "ctorres@gmail.com",
    telefono: "12345678",
    direccion: "Calle 123",
    ciudad: "Barranquilla",
    pais: "Colombia"  
  },
  {
    cedula: "0123456789",
    nombre: "Sebastian Oliveros",
    genero:"Masculino",
    email: "soliveros@cuc.edu.co",
    telefono: "12345678",
    direccion: "Calle 123",
    ciudad: "Barranquilla",
    pais: "Colombia"
    
  }
];

function agregarUsuario() {
  let cedula = document.getElementById("cedula").value;
  let nombre = document.getElementById("nombre").value;
  let genero = document.getElementById("genero").value;
  let email = document.getElementById("email").value;
  let telefono = document.getElementById("telefono").value;
  let direccion = document.getElementById("direccion").value;
  let ciudad = document.getElementById("ciudad").value;
  let pais = document.getElementById("pais").value;

    // Validar que todos los campos estén llenos
    if (!cedula || !nombre || !email || !telefono || !direccion || !ciudad || !pais || !genero) {
      alert("Por favor llene todos los campos.");
      return;
    }
    function validarEmail(email) {
      let re = /\S+@\S+\.\S+/;
      return re.test(email);
    }
    if (!validarEmail(email)) {
      alert("Por favor ingrese un email válido.");
      return;
    }
  

  // Verificar si la cédula ya existe en el array de usuarios
  let existeCedula = usuarios.some(function(usuario) {
    return usuario.cedula === cedula;
  });

  if (existeCedula) {
    // Mostrar alerta si la cédula ya existe
    alert("Ya existe un usuario con la cédula ingresada.");
  } else {
    let usuario = {
      cedula: cedula,
      nombre: nombre,
      genero: genero,
      email: email,
      telefono: telefono,
      direccion: direccion,
      ciudad: ciudad,
      pais: pais      
    };

    usuarios.push(usuario);

    document.getElementById("agregar-usuario-form").reset();

    actualizarTablaUsuarios();
  }
}

function actualizarTablaUsuarios() {
  let tablaUsuarios = document.getElementById("usuarios-table");

  tablaUsuarios.innerHTML = "";

  let encabezado = "<tr><th>Cédula</th><th>Nombre</th><th>Genero</th><th>Email</th><th>Teléfono</th><th>Dirección</th><th>Ciudad</th><th>País</th></tr>";
  tablaUsuarios.innerHTML += encabezado;

  for (let i = 0; i < usuarios.length; i++) {
    let usuario = usuarios[i];
    let fila = "<tr>";
    fila += "<td class='table-cell'>" + usuario.cedula + "</td>";
    fila += "<td class='table-cell'>" + usuario.nombre + "</td>";
    fila += "<td class='table-cell'>" + usuario.genero + "</td>";
    fila += "<td class='table-cell'>" + usuario.email + "</td>";
    fila += "<td class='table-cell'>" + usuario.telefono + "</td>";
    fila += "<td class='table-cell'>" + usuario.direccion + "</td>";
    fila += "<td class='table-cell'>" + usuario.ciudad + "</td>";
    fila += "<td class='table-cell'>" + usuario.pais + "</td>";
    fila += "</tr>";
    tablaUsuarios.innerHTML += fila;
  }
}
// Mostrar usuarios con el boton mostrar todos los usuarios
function mostrarUsuarios() {
  var tabla = document.getElementById("usuarios-table");
  tabla.innerHTML = ""; // Limpiar la tabla antes de agregar los datos

  // Crear el encabezado de la tabla
  var encabezado = document.createElement("tr");

  var celdaEncabezadoCedula = document.createElement("th");
  celdaEncabezadoCedula.textContent = "Cédula";
  encabezado.appendChild(celdaEncabezadoCedula);

  var celdaEncabezadoNombre = document.createElement("th");
  celdaEncabezadoNombre.textContent = "Nombre";
  encabezado.appendChild(celdaEncabezadoNombre);

  var celdaEncabezadoGenero = document.createElement("th");
  celdaEncabezadoGenero.textContent = "Genero";
  encabezado.appendChild(celdaEncabezadoGenero);

  var celdaEncabezadoEmail = document.createElement("th");
  celdaEncabezadoEmail.textContent = "Email";
  encabezado.appendChild(celdaEncabezadoEmail);

  var celdaEncabezadoTelefono = document.createElement("th");
  celdaEncabezadoTelefono.textContent = "Teléfono";
  encabezado.appendChild(celdaEncabezadoTelefono);

  var celdaEncabezadoDireccion = document.createElement("th");
  celdaEncabezadoDireccion.textContent = "Dirección";
  encabezado.appendChild(celdaEncabezadoDireccion);

  var celdaEncabezadoCiudad = document.createElement("th");
  celdaEncabezadoCiudad.textContent = "Ciudad";
  encabezado.appendChild(celdaEncabezadoCiudad);

  var celdaEncabezadoPais = document.createElement("th");
  celdaEncabezadoPais.textContent = "País";
  encabezado.appendChild(celdaEncabezadoPais);

  tabla.appendChild(encabezado);
    
  for (var i = 0; i < usuarios.length; i++) {
    var usuario = usuarios[i];
    
    // Crear una fila para cada usuario
    var fila = document.createElement("tr");
    
    // Agregar las celdas con los datos del usuario
    var celdaCedula = document.createElement("td");
    celdaCedula.textContent = usuario.cedula;
    fila.appendChild(celdaCedula);
    
    var celdaNombre = document.createElement("td");
    celdaNombre.textContent = usuario.nombre;
    fila.appendChild(celdaNombre);

    var celdaGenero = document.createElement("td");
    celdaGenero.textContent = usuario.genero;
    fila.appendChild(celdaGenero);
    
    var celdaEmail = document.createElement("td");
    celdaEmail.textContent = usuario.email;
    fila.appendChild(celdaEmail);
    
    var celdaTelefono = document.createElement("td");
    celdaTelefono.textContent = usuario.telefono;
    fila.appendChild(celdaTelefono);
    
    var celdaDireccion = document.createElement("td");
    celdaDireccion.textContent = usuario.direccion;
    fila.appendChild(celdaDireccion);
    
    var celdaCiudad = document.createElement("td");
    celdaCiudad.textContent = usuario.ciudad;
    fila.appendChild(celdaCiudad);
    
    var celdaPais = document.createElement("td");
    celdaPais.textContent = usuario.pais;
    fila.appendChild(celdaPais);
    
    // Agregar la fila a la tabla
    tabla.appendChild(fila);
  }
}