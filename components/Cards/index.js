// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.

// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const newcards = document.querySelector('.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then( element => {
        articletypes = element.data.articles
        //console.log(articletypes)

        const categories = Object.values( articletypes)
        //console.log('articletypes', categories)
        
        categories.forEach(typeclass => {
            //console.log('typeclass',typeclass)
            typeclass.forEach( oneobj=> {
                //console.log('oneobj', oneobj)

                // console.log('headline:',oneobj.headline)
                // console.log('authorPhoto:',oneobj.authorPhoto)
                // console.log('authorName:',oneobj.authorName)

                newcards.appendChild(createArticle(oneobj.headline, oneobj.authorPhoto, oneobj.authorName))



            })
        });
        

    })






function createArticle(headline, authorPhoto, authorName){
    const carddiv = document.createElement('div');
    const headlinediv = document.createElement('div');
    const authordiv = document.createElement('div');
    const imgdiv = document.createElement('div');
    const imgsrc = document.createElement('img');
    const namespan = document.createElement('span');

    //place elements
    carddiv.appendChild(headlinediv);
    carddiv.appendChild(authordiv);
    authordiv.appendChild(imgdiv);
    imgdiv.appendChild(imgsrc)
    authordiv.appendChild(namespan)

    //add classes
    carddiv.classList.add('card');
    headlinediv.classList.add('headline');
    authordiv.classList.add('author');
    imgdiv.classList.add('img-container');

    //add content
    headlinediv.textContent = headline;
    imgsrc.src = authorPhoto;
    namespan.textContent = `By ${authorName}`;

    return carddiv

}