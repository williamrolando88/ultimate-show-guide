const main = document.querySelector('main');

const createHTML = ({
  name, language, officialSite, average, medium, premiered,
}) => `
    <i class="fas fa-times"></i>
    <img src=${medium} alt="cover Image">
    <h2>${name}</h2>
    <ul>
      <li>Language: ${language}</li>
      <li>Official Site: ${officialSite}</li>
      <li>Rating: ${average}</li>
      <li>Premiered: ${premiered}</li>
    </ul>
    <h3>Comments</h3>
    <form>
      <input placeholder='Your name here'>
      <textarea placeholder ='Your insights here'></textarea>
      <input type='button' value='Comment'>
    </form>
    `;

const openPopUp = (obj) => {
  const popUp = document.createElement('section');
  popUp.innerHTML = obj;
  main.appendChild(popUp);
  return popUp;
};

export { openPopUp, createHTML };

// export { createHTML }