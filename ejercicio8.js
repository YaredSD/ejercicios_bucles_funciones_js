const artists = [
    { name: 'Kurt Cobain', influences: ['The Beatles', 'Pixies', 'Lead Belly'] },
    { name: 'David Bowie', influences: ['Little Richard', 'Chuck Berry', 'The Velvet Underground'] },
    { name: 'Eddie Vedder', influences: ['The Who', 'Neil Young', 'Jim Morrison'] },
    { name: 'Freddie Mercury', influences: ['Liza Minnelli', 'Jimi Hendrix', 'Aretha Franklin'] },
    { name: 'John Lennon', influences: ['Elvis Presley', 'Chuck Berry', 'Buddy Holly'] }
  ];

  
  for (let a = 0; a < artists.length; a++) {
    const artist = artists[a];
    const name = artist.name;
    for (let b = 0; b < artist.influences.length; b++) {
      const influence = artist.influences[b];
      console.log(name + " fue influenciado por: " + influence);
    }
  }