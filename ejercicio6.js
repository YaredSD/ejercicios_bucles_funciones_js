const starWarsMovies = [
    { title: 'A New Hope', releaseYear: 1977 },
    { title: 'The Empire Strikes Back', releaseYear: 1980 },
    { title: 'Return of the Jedi', releaseYear: 1983 },
    { title: 'The Phantom Menace', releaseYear: 1999 },
    { title: 'Attack of the Clones', releaseYear: 2002 },
    { title: 'Revenge of the Sith', releaseYear: 2005 },
    { title: 'The Force Awakens', releaseYear: 2015 },
    { title: 'The Last Jedi', releaseYear: 2017 },
    { title: 'The Rise of Skywalker', releaseYear: 2019 },
    { title: 'Rogue One', releaseYear: 2016 },
    { title: 'Solo', releaseYear: 2018 }
  ];
  
  let Los70 = [];
  let Los80 = [];
  let Los90 = [];
  let Los00 = [];
  let Los10 = [];

  for (const film of starWarsMovies) {
    if (film.releaseYear >= 1970 && film.releaseYear < 1980) {
      Los70.push(film.title);
    } else if (film.releaseYear >= 1980 && film.releaseYear < 1990) {
      Los80.push(film.title);
    } else if (film.releaseYear >= 1990 && film.releaseYear < 2000) {
      Los90.push(film.title);
    } else if (film.releaseYear >= 2000 && film.releaseYear < 2010) {
      Los00.push(film.title);
    } else if (film.releaseYear >= 2010 && film.releaseYear < 2020) {
      Los10.push(film.title);
    } else {
      console.log ("No hay películas de Starwars para la década señalada")
    }
    }

  const StarWarsTroughYears= {
    Los70s: (Los70),
    Los80s: (Los80),
    Los90s: (Los90),
    Los00s: (Los00),
    Los10s: (Los10),
  }

  console.log(StarWarsTroughYears);