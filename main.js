
        const shows = [
            {
                "title": "Title : Bojack Horseman",
                "year": 2014,
                "description" : "BoJack has been shown to be caring and insightful, but his insecurities, loneliness, desperate need for approval, and guilt over his own actions often result in self-destructive and selfish actions that devastate those around him.",
                "creator": [
                  "Raphael Bob-Waksberg"
                ],
                "image": "https://m.media-amazon.com/images/M/MV5BYWQwMDNkM2MtODU4OS00OTY3LTgwOTItNjE2Yzc0MzRkMDllXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
                "id": 5
              },

            
            {
                "title": "Title : The Simpsons",
                "year": 1999,
                "creator": ["Matt Groening"],
                "description" : "The series is a satirical depiction of American life, epitomized by the Simpson family, which consists of Homer, Marge, Bart, Lisa, and Maggie. Set in the fictional town of Springfield, it caricatures society, Western culture, television, and the human condition.", 
                
                
               
                "image": "https://m.media-amazon.com/images/M/MV5BYjFkMTlkYWUtZWFhNy00M2FmLThiOTYtYTRiYjVlZWYxNmJkXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
                "id": 2
            },
            {
                "title": "Title : Pokemon",
                "year": 1997,
                "creator": [
                  "Junichi Masada",
                  "Ken Sugimori",
                  "Satoshi Tajiri"
                ],
                "description" : "Pokémon is a Japanese media franchise consisting of video games, animated series and films, a trading card game, and other related media. The franchise takes place in a shared universe in which humans co-exist with creatures known as Pokémon, a large variety of species endowed with special powers.", 
                "image": "https://m.media-amazon.com/images/M/MV5BNjU1YjM2YzAtZWE2Ny00ZWNiLWFkZWItMDJhMzJiNDQwMmI4XkEyXkFqcGdeQXVyNTU1MjgyMjk@._V1_.jpg",
                "id": 8
              },
              {
                "title": "Title : Ed, Edd n Eddy",
                "year": 1999,
                "creator": [
                  "Danny Antonucci"
                ],
                "description" : "Ed, Edd n Eddy follows the lives of the Eds, three scheming boys who all share variations of nicknames of the name Edward, but differ greatly in their personalities: Ed (Matt Hill) is the strong and dim-witted yet kind-hearted dogsbody of the group; Edd (Samuel Vincent), called Double D, is an inventor, neat frea.",
                "image": "https://m.media-amazon.com/images/M/MV5BMGFiZGI4Y2ItMzkzOC00OTE5LThlZDgtNzE1YTdmNTA5ZTZkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTEwMTkwOTI@._V1_.jpg",
                "id": 12
              },
              {
                "title": "Title : Courage the Cowardly Dog",
                "year": 1999,
                "creator": [
                  "John Dilworth"
                ],
                "description" : "Courage is a timid pink dog with paranoia problems. His owners are an old couple living on a farm full of bizarre adversaries. Courage must overcome his fear and help save his owners, Eustace and Muriel, from ghosts and paranormal spirits living on the farm.",
                "image": "https://m.media-amazon.com/images/M/MV5BMTU4MGEyNTItNzg5ZS00ZGU0LTk4NmEtODM0Y2UxYTY2YTUyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_CR0,0,680,1000_AL_.jpg",
                "id": 13
              },
        ];

        const showList = document.getElementById('show-list');

        shows.forEach(show => {
            const showDiv = document.createElement('div');
            showDiv.classList.add('show');

            const showImage = document.createElement('img');
            showImage.src = show.image;
            showImage.alt = show.title;

            const showInfo = document.createElement('div');
            showInfo.classList.add('show-info');

            const title = document.createElement('h2');
            title.textContent = show.title;

            const year = document.createElement('p');
            year.textContent = `Year: ${show.year}`;


            const creator = document.createElement('p');
            creator.textContent = `Creator: ${show.creator.join(', ')}`;

            const description = document.createElement('p');
            description.textContent = `Description: ${show.description}`;

            
            showInfo.appendChild(title);
            showInfo.appendChild(year);
            showInfo.appendChild(creator);
            showInfo.appendChild(description);
            showDiv.appendChild(showImage);
            showDiv.appendChild(showInfo);
            showList.appendChild(showDiv);
        });
