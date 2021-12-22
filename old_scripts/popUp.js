import { getAPI} from "./apiRequest";
import { createHTML } from "./render";
import { openPopUp } from "./openPopUs";

const main = document.querySelector('main')
const comments = {};
const popUp = document.createElement('section');
const showInfoArr = [];

const seriesArr = [
    {
        id: 43687,
        title: 'Squid Game',
        link: 'https://api.tvmaze.com/lookup/shows?imdb=tt10919420'
    },
    {
        id: 82,
        title: 'Game of Thrones',
        link: 'https://api.tvmaze.com/lookup/shows?imdb=tt0944947'
    },
    {
        id: 161,
        title: 'Dexter',
        link: 'https://api.tvmaze.com/lookup/shows?imdb=tt0773262'
    },
    {
        id: 67,
        title: 'Grey’s Anatomy',
        link: 'https://api.tvmaze.com/lookup/shows?imdb=tt0413573'
    },
    {
        id: 526,
        title: 'The Office',
        link: 'https://api.tvmaze.com/lookup/shows?imdb=tt0386676'
    },
    {
        id: 23470,
        title: 'Succession',
        link: 'https://api.tvmaze.com/lookup/shows?imdb=tt7660850'
    },
    {
        id: 216,
        title: 'Rick & Morty',
        link: 'https://api.tvmaze.com/lookup/shows?imdb=tt2861424'
    },
    {
        id: 73,
        title: 'The Walking Dead',
        link: 'https://api.tvmaze.com/lookup/shows?imdb=tt1520211'
    }
]

seriesArr.forEach(show => {
    const retrieveShowDetails = async () => {
        let showDetails = [];
        try {
            showDetails = await getAPI(show.link);
            // showInfoArr.push(showDetails);
            
            // const newObj = {
            //     name: showDetails.name,
            //     language: showDetails.language,
            //     link: showDetails.officialSite,
            //     rating: showDetails.rating,
            //     image: showDetails.image,
            //     premiered: showDetails.premiered
            // }
            // showInfoArr.push(newObj);
            // let newObject = Object.create(name, language, officialSite, rating, image, premiered);
            // showInfoArr.push(newObject);
        } catch (e) {
            console.log('Error!');
            console.log(e);
        }
    }
    retrieveShowDetails();
})

console.log(showInfoArr);

// for (const key in showInfoArr) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
//         console.log(element);
//     }
// }

// const show = showInfoArr.find(element => element.name = 'Squid Game')

// console.log(show);


const assignAttributes = (element, val1, val2, val3) => {
    Object.assign(element, {
        className: val1,
        src: val2,
        textContent: val3,
    })
}

const commentPopUp = () => {
    fetch('https://api.tvmaze.com/lookup/shows?imdb=tt10919420').
      then((response) => {
        return response.json();
      }).then(data => {
          const {name, language, officialSite, rating, image, premiered} = data;
          console.log(name, language, officialSite, rating, image.original, premiered);
          const popUp = document.createElement('section');

          // ADD CLOSE BUTTON
          const closeBtn = document.createElement('i');
        //   Object.assign(closeBtn, {
        //       className: 'fas fa-times '
        //   })
          assignAttributes(closeBtn, 'fas fa-times self-end py-6');

          // CREATE HEADER IMAGE
          const headerImg = document.createElement('img');
          assignAttributes(headerImg, 'w-2/4', image.medium);
          // CREATE TITLE ELEMENT
          const title = document.createElement('h2');
          assignAttributes(title, 'font-rockwell text-4xl font-bold py-6', '#', name);

          // CREATE UL
          const specs = document.createElement('ul');
          const specsArr = [ {Language: language}, {Rating: rating.average},{Link: officialSite}, {Premiered: premiered}];

          for (let i=0; i<4; i++) {
            const specItem = document.createElement('li');
            specItem.textContent = `${Object.keys(specsArr[i])}: ${Object.values(specsArr[i])}`;
            specs.appendChild(specItem);
          }

          // CREATE COMMENTS SECTION
          const titleSub = document.createElement('h3');
          assignAttributes(titleSub, 'font-rockwell text-2xl font-bold py-6', '#', 'Comments');
          const commentPrint = document.createElement('span');
          const titleAddComment = document.createElement('h3');
          assignAttributes(titleAddComment, 'font-rockwell text-2xl font-bold py-6', '#', 'Add a comment');
          const commentForm = document.createElement('form');
          assignAttributes(commentForm, 'flex flex-col self-start items-start');
          const inputName = document.createElement('input');
          Object.assign(inputName, {
              className: 'mb-4',
              placeholder: 'Your name',
              required: true
          })
          const inputText = document.createElement('textarea');
          Object.assign(inputText, {
              placeholder: 'Your insights',
              required: true
          })
          const submitBtn = document.createElement('input');
          Object.assign(submitBtn, {
              className: 'bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-4 rounded mt-4',
              value: 'Comment',
              type: 'button'
          })
          commentForm.append(inputName, inputText, submitBtn);
          fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DUygu2IA853rbrNq5k3K/comments?item_id=item1`).
            then((response) => {
                return response.json();
            }).then(data => {
                 const {creation_date, username, comment} = data[0];

               // CREATE COMMENT
                assignAttributes(commentPrint, 'self-start', '#', `${creation_date} ${username}: ${comment}`);

                // ADD NEW COMMENT
               submitFunction(submitBtn, inputName, inputText);
            }).catch(error => {
                console.log(error);
            })

          // APPEND ELEMENTS
          Object.assign(popUp, {
            className: 'flex flex-col overflow-y-scroll items-center border-2 border-gray-600 border-solid px-[20%] py-6 my-[50px]'
          })
          popUp.append(closeBtn, headerImg, title, specs, titleSub, commentPrint, titleAddComment, commentForm);
          main.appendChild(popUp);

          //
          closePopUp(closeBtn, popUp);
      }).catch(error => {
          console.log(error);
      })
}

export { commentPopUp };

const submitFunction = (submitBtn, inputName, inputText) => {
    submitBtn.addEventListener('click', () => {
        if (inputName.value !== '' && inputText.value !== '') {
            const postData = async () => {
                // Default options are marked with *
                const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DUygu2IA853rbrNq5k3K/comments?item_id=item1', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        item_id: "item1",
                        username: "Lilly",
                        comment: "Best series"
                    }) // body data type must match "Content-Type" header
                });
                return response.json(); // parses JSON response into native JavaScript objects
            };
            console.log('yes');
        } else {
            inputName.placeholder = 'Please enter your name!';
            inputText.placeholder = 'Please enter your message';
        }
    });
}
function closePopUp(closeBtn, popUp) {
    closeBtn.addEventListener('click', () => {
        {
            popUp.style.display = 'none';
        }
    });
}

