const xMen = [
    { name: 'Wolverine', year: 1974 },
    { name: 'Cyclops', year: 1963 },
    { name: 'Storm', year: 1975 },
    { name: 'Phoenix', year: 1963 },
    { name: 'Beast', year: 1963 },
    { name: 'Gambit', year: 1990 },
    { name: 'Nightcrawler', year: 1975 },
    { name: 'Magneto', year: 1963 },
    { name: 'Professor X', year: 1963 },
    { name: 'Mystique', year: 1978 }
  ];

  function findOldestXMen(xMen) {
    const sorted = xMen.sort((a,b) => a.year - b.year);
    const OlderSuperhero = sorted[0].year;
    for (const superhero of xMen) {
      if (superhero.year < OlderSuperhero) {
        OlderSuperhero = superhero.year;
      }
    }
    let OlderXMen = xMen.filter((superhero) => superhero.year === OlderSuperhero);
    return OlderXMen;
  }
  console.log(findOldestXMen(xMen));