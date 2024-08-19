const mutants = [
    { name: 'Wolverine', power: 'regeneration' },
    { name: 'Magneto', power: 'magnetism' },
    { name: 'Professor X', power: 'telepathy' },
    { name: 'Jean Grey', power: 'telekinesis' },
    { name: 'Rogue', power: 'power absorption' },
    { name: 'Storm', power: 'weather manipulation' },
    { name: 'Mystique', power: 'shape-shifting' },
    { name: 'Beast', power: 'superhuman strength' },
    { name: 'Colossus', power: 'steel skin' },
    { name: 'Nightcrawler', power: 'teleportation' }
  ];
  
  function findMutantByPower(mutants, power) {
    for (const mutant of mutants) {
      if (power == mutant.power) {
        console.log("Hemos encontrado un mutante con ese poder: " + mutant.name)
      }
    } 
    if (power !== mutants.power) {
      console.log("No hemos encontrado un mutante con ese poder")
    }
  }

  console.log(findMutantByPower(mutants, 'magnetism'));
  console.log(findMutantByPower(mutants, 'transformation'));
