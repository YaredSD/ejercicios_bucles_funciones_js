const capitals = {
    Spain: 'Madrid',
    France: 'Paris',
    Italy: 'Rome',
    Germany: 'Berlin',
    Portugal: 'Lisbon',
    Poland: 'Warsaw',
    Greece: 'Athens',
    Austria: 'Vienna',
    Hungary: 'Budapest',
    Ireland: 'Dublin'
  };
  
  function getCapital(country) {
    if (capitals[country]) {
      console.log("La capital de " + country + " es " + capitals[country]);
    } else {
      console.log("Este país no se encuentra en nuestra base de datos. Envíanos un email a desarrollowebfp@thepower.education con el país y su capital para incluirlo en nuestra lista.")
      return;
  }
}

// Dejaremos dos ejemplos por consola, uno con un país de nuestra lisra y otro que no figura en la misma:

console.log(getCapital("Spain"));
console.log(getCapital("Australia"));