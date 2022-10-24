// * NAV BAR DATE AREA --------------------------------------------
    const date = new Date(); // TR Date
    const month = date.getMonth(); var monthText;
    const year = date.getFullYear();
    const day = date.getDate();
    const hours = date.getHours()
    const minute = date.getMinutes();

    // MONTH CELENDAR
    switch(month){
        case 0: 
            monthText = 'January';
        break;

        case 1: 
            monthText = 'February';
        break;

        case 2: 
            monthText = 'March';
        break;

        case 3: 
            monthText = 'April';
        break;

        case 4: 
            monthText = 'May';
        break;

        case 5: 
            monthText = 'June';
        break;

        case 6: 
            monthText = 'July';
        break;

        case 7: 
            monthText = 'August';
        break;

        case 8: 
            monthText = 'September';
        break;

        case 9: 
            monthText = 'Octaber';
        break;

        case 10: 
            monthText = 'November';
        break;

        case 11: 
            monthText = 'December';
        break;
    }

    // HOURS    
    if(hours>=10 && minute>=10){
        var hours2 = String(hours) + '.' + String(minute) // Get TR Hours
    } else if(hours>=10 && minute<10) {
        var hours2 = String(hours) + '.0' + String(minute) // Get TR Hours
    } else if(hours<10 && minute<10){
        var hours2 = '0' + String(hours) + '.0' + String(minute) // Get TR Hours
    } else if(hours<10 && minute>=10){
        var hours2 = '0' + String(hours) + '.' + String(minute) // Get TR Hours
    }
    const documentHours = document.querySelector('#hours'); // HTML #hours Element
    documentHours.innerHTML = hours2;

    // DAY - MONTH - YEAR
    const fullDate =  `${day} ${monthText}, ${year}`
    const documentFullDate = document.querySelector('#year'); // HTML #year Element
    documentFullDate.innerHTML = fullDate;






// * MOVIE SELECTED DYNAMICS --------------------------------------------
    
    // MOVIES CONTENT
    var movies = [
        {name : "The Dark Knight Rises", category: ['Action', 'Adventure', 'Thriller'], description: "Eight years after the Joker's reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane.", filmId : "movie1", srcImg: "img/film-covers/cover--the-dark-knight-rises.jpg",},
        {name : "Annihilation", category: ['Adventure','Drama', 'Harror'], description: "A biologist signs up for a dangerous, secret expedition into a mysterious zone where the laws of nature don't apply.", filmId : "movie2", srcImg: "img/film-covers/cover--annihilation.jpg",},
        {name : "Bird Box", category: ['Harror', 'Sci-Fi'], description: "Five years after an ominous unseen presence drives most of society to suicide, a mother and her two children make a desperate bid to reach safety.", filmId : "movie3", srcImg: "img/film-covers/cover--bird-box.jpg",},
        {name : "Bright", category: ['Action','Fantasy','Thriller'], description: "A detective must work with an Orc to find a powerful wand before evil creatures do.", filmId : "movie4", srcImg: "img/film-covers/cover--bright.jpg",},
        {name : "Extraction", category: ['Action','Thriller'], description: "Tyler Rake, a fearless black market mercenary, embarks on the most deadly extraction of his career when he's enlisted to rescue the kidnapped son of an imprisoned international crime lord.", filmId : "movie5", srcImg: "img/film-covers/cover--extraction.jpg",},
        {name : "I'm Legend", category: ['Action','Drama','Sci-Fi'], description: "Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.", filmId : "movie6", srcImg: "img/film-covers/cover--im-legend.jpg",},
        {name : "Interstellar", category: ['Adventure','Drama','Sci-Fİ'], description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.", filmId : "movie7", srcImg: "img/film-covers/cover--interstellar.jpg",},
        {name : "Red Notice", category: ['Action','Comedy','Thriller'], description: "An Interpol agent tracks the world's most wanted art thief.", filmId : "movie8", srcImg: "img/film-covers/cover--red-notice.jpg",},
        {name : "Sweet Tooth", category: ['Action', 'Adventure', 'Drama'], description: "A boy who is half human and half deer survives in a post-apocalyptic world with other hybrids.", filmId : "movie9", srcImg: "img/film-covers/cover--sweet-tooth.jpg",},
        {name : "World War Z", category: ['Action', 'Adventure', 'Harror'], description: "Former United Nations employee Gerry Lane traverses the world in a race against time to stop a zombie pandemic that is toppling armies and governments and threatens to destroy humanity itself.", filmId : "movie10", srcImg: "img/film-covers/cover--world-war-z.jpg",},
    ]


    // ONCLICK DYNAMIC

    const movie1 = document.querySelector('#movie1');
    const movie2 = document.querySelector('#movie2');
    const movie3 = document.querySelector('#movie3');
    const movie4 = document.querySelector('#movie4');
    const movie5 = document.querySelector('#movie5');
    const movie6 = document.querySelector('#movie6');
    const movie7 = document.querySelector('#movie7');
    const movie8 = document.querySelector('#movie8');
    const movie9 = document.querySelector('#movie9');
    const movie10 = document.querySelector('#movie10');

    const body = document.querySelector('body');
    const page = document.querySelector('.page');

    const selectedMovieName = document.querySelector('#selected-movie-name');
    const selectedMovieCategory = document.querySelector('#selected-movie-categorys')
    const selectedMovieDescription = document.querySelector('#selected-movie-description')

    var categoryItem = document.createElement('h2') // CREATED
    categoryItem.className='category-item';
    selectedMovieCategory.appendChild(categoryItem);



    // ONCLICK

        movie1.onclick = function(){
            body.style.background = 'url(img/film-bg/bg--the-dark-knight-rises.jpg)';
            body.style.backgroundPosition = 'center'
            body.style.backgroundSize = 'cover'

            selectedMovieName.innerHTML = movies[0].name;
            categoryItem.innerHTML = movies[0].category;
            selectedMovieDescription.innerHTML = movies[0].description;
        };

        movie2.onclick = function(){
            body.style.background = 'url(img/film-bg/bg--annihilation.jpg)';
            body.style.backgroundPosition = 'center'
            body.style.backgroundSize = 'cover'

            selectedMovieName.innerHTML = movies[1].name;
            categoryItem.innerHTML = movies[1].category;
            selectedMovieDescription.innerHTML = movies[1].description;
        };

        movie3.onclick = function(){
            body.style.background = 'url(img/film-bg/bg--bird-box.jpg)';
            body.style.backgroundPosition = 'center'
            body.style.backgroundSize = 'cover'

            selectedMovieName.innerHTML = movies[2].name;
            categoryItem.innerHTML = movies[2].category;
            selectedMovieDescription.innerHTML = movies[2].description;
        };

        movie4.onclick = function(){
            body.style.background = 'url(img/film-bg/bg--bright.jpg)';
            body.style.backgroundPosition = 'center'
            body.style.backgroundSize = 'cover'

            selectedMovieName.innerHTML = movies[3].name;
            categoryItem.innerHTML = movies[3].category;
            selectedMovieDescription.innerHTML = movies[3].description;
        };

        movie5.onclick = function(){
            body.style.background = 'url(img/film-bg/bg--extraction.jpg)';
            body.style.backgroundPosition = 'center'
            body.style.backgroundSize = 'cover'

            selectedMovieName.innerHTML = movies[4].name;
            categoryItem.innerHTML = movies[4].category;
            selectedMovieDescription.innerHTML = movies[4].description;
        };

        movie6.onclick = function(){
            body.style.background = 'url(img/film-bg/bg--im-legend.jpg)';
            body.style.backgroundPosition = 'center'
            body.style.backgroundSize = 'cover'

            selectedMovieName.innerHTML = movies[5].name;
            categoryItem.innerHTML = movies[5].category;
            selectedMovieDescription.innerHTML = movies[5].description;
        };

        movie7.onclick = function(){
            body.style.background = 'url(img/film-bg/bg--interstellar.jpg)';
            body.style.backgroundPosition = 'center'
            body.style.backgroundSize = 'cover'

            selectedMovieName.innerHTML = movies[6].name;
            categoryItem.innerHTML = movies[6].category;
            selectedMovieDescription.innerHTML = movies[6].description;
        };

        movie8.onclick = function(){
            body.style.background = 'url(img/film-bg/bg--red-notice.jpg)';
            body.style.backgroundPosition = 'center'
            body.style.backgroundSize = 'cover'

            selectedMovieName.innerHTML = movies[7].name;
            categoryItem.innerHTML = movies[7].category;
            selectedMovieDescription.innerHTML = movies[7].description;
        };

        movie9.onclick = function(){
            body.style.background = 'url(img/film-bg/bg--sweet-tooth.jpg)';
            body.style.backgroundPosition = 'center'
            body.style.backgroundSize = 'cover'

            selectedMovieName.innerHTML = movies[8].name;
            categoryItem.innerHTML = movies[8].category;
            selectedMovieDescription.innerHTML = movies[8].description;
        };

        movie10.onclick = function(){
            body.style.background = 'url(img/film-bg/bg--world-war-z.jpg)';
            body.style.backgroundPosition = 'center'
            body.style.backgroundSize = 'cover'

            selectedMovieName.innerHTML = movies[9].name;
            categoryItem.innerHTML = movies[9].category;
            selectedMovieDescription.innerHTML = movies[9].description;
        };
    

    

    
