// Rover Object Goes Here

var rover = {
  roverDir: "N",
  posicionFila: 1,
  posicionColumna: 1,
  }

// ======================
 var matriz = [10][10] ;
 var orden = "";


// ======================
function turnLeft(rover){
  
  switch (rover.roverDir){
    case "N": rover.roverDir= "W";break;
    case "W": rover.roverDir= "S";break;
    case "S": rover.roverDir= "E";break;
    case "E": rover.roverDir= "N";break;
    };
    console.log("El Rover ha girado a la izquierda. Nueva direccion: " + rover.roverDir);
}

function turnRight(rover){
  switch (rover.roverDir){
    case "N": rover.roverDir= "E";break;
    case "W": rover.roverDir= "N";break;
    case "S": rover.roverDir= "W";break;
    case "E": rover.roverDir= "S";break;
  };
  console.log("El Rover ha girado a la derecha. Nueva direccion: " + rover.roverDir);
}


function moveForward(rover){

  comprobarLimites (rover);

  console.log("El Rover ha avanzado a: " + rover.posicionFila  +"," + rover.posicionColumna) ;

  function comprobarLimites (rover){
    
      switch(rover.roverDir) {
        case "N":
          if (rover.posicionFila>0){
          rover.posicionFila -= 1; }
          else console.log(" El rover no puede moverse");
          break;

        case "E":
          if(rover.posicionColumna<9){
          rover.posicionColumna += 1; }
          else console.log(" El rover no puede moverse");
          break;

        case "S":
          if (rover.posicionFila<9){
          rover.posicionFila += 1; }
          else console.log(" El rover no puede moverse");
          break;
          
        case "W":
          if(rover.posicionColumna>0){
          rover.posicionColumna -= 1; }
          else console.log(" El rover no puede moverse");
          break;
      };
    
      
    };
    
  
}

function moveBackward(rover){

  comprobarLimites (rover);

  console.log("El Rover ha retrocedido a: " + rover.posicionFila  +"," + rover.posicionColumna) ;

  function comprobarLimites (rover){
    
      switch(rover.roverDir) {
        case "N":
          if (rover.posicionFila<9){
          rover.posicionFila += 1; }
          else console.log(" El rover no puede moverse");
          break;

        case "E":
          if(rover.posicionColumna>0){
          rover.posicionColumna -= 1; }
          else console.log(" El rover no puede moverse");
          break;

        case "S":
          if (rover.posicionFila>0){
          rover.posicionFila -= 1;}
          else console.log(" El rover no puede moverse");
          break;
          
        case "W":
          if(rover.posicionColumna<9){
          rover.posicionColumna += 1;}
          else console.log(" El rover no puede moverse");
          break;
      };
    
      
    }
  }


function goForward (orden){

console.log (" Tu cadena de ordenes es: " + orden.length)

for (i=0; i<orden.length; i++) {
   
  console.log ("Orden dada: " + orden[i]);
   
   switch (orden[i]){
     
    case "f": moveForward (rover);
     break;

    case "b": moveBackward (rover);
     break;

    case "l": turnLeft (rover);
     break;
     
    case "r": turnRight (rover); 
     break;

     default: console.log ("Esa orden no la reconoce el Rover");
   }

  }

}