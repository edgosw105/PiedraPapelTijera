var btnPiedra = document.getElementById('btnPiedra');
var btnPapel = document.getElementById('btnPapel');
var btnTijera = document.getElementById('btnTijera');


var resMaquina = 0;
var resUsuario = 0;

btnPiedra.addEventListener("click", jugar);
btnPapel.addEventListener("click", jugar);
btnTijera.addEventListener("click", jugar);

function jugar(event)
{
    let marcador_sp = document.getElementById('marcador_sp');
    let elegidaUsuario = document.getElementById('elegidaUsuario');

    let opcionMaquina = Math.floor(Math.random()*(3-0)+1);
    cambiarDibujo(opcionMaquina);
    let opcionUsuario;
    let boton = event.path[0].id;
    if (boton == "btnPiedra") {
      opcionUsuario = 1;

    }
    else if (boton == "btnPapel") {
      opcionUsuario = 2;
    } else {
      opcionUsuario = 3; // es tijera
    }

    switch (opcionUsuario) {
      case 1:
      elegidaUsuario.src = "image/piedra.png";
        if (opcionMaquina == 1) {
        }
        else if (opcionMaquina == 2) {
          resMaquina += 1;
        } else {
          resUsuario += 1;
        }
        break;
        case 2:
        elegidaUsuario.src = "image/papel.png";
          if (opcionMaquina == 1) {
            resUsuario += 1;
          }
          else if (opcionMaquina == 2) {
          } else {
            resMaquina += 1;
          }
          break;
          case 3:
          elegidaUsuario.src = "image/tijera.png";
            if (opcionMaquina == 1) {
              resMaquina += 1;
            }
            else if (opcionMaquina == 2) {
              resUsuario += 1;
            } else {
            }
            break;
        default:

    }

    marcador_sp.innerText = resUsuario + " - " + resMaquina;
}

function cambiarDibujo(numero)
{
  let elegidaMaquina = document.getElementById('elegidaMaquina');
  if (numero == 1) {
    elegidaMaquina.src = "image/piedra.png";
  }
  else if (numero == 2) {
    elegidaMaquina.src = "image/papel.png";
  } else {
    elegidaMaquina.src = "image/tijera.png";; // es tijera
  }
}
