const main = document.querySelector('main');

const createHTML = ({
  name, language, officialSite, average, medium, premiered,
}) => `
    <i class="fas fa-times self-end py-6 text-4xl"></i>
    <img src=${medium} alt="cover Image">
    <h2 class='font-rockwell text-4xl font-bold py-6'>${name}</h2>
    <ul>
      <li>Language: ${language}</li>
      <li>Official Site: <a class='underline' href="${officialSite}">${officialSite}</a></li>
      <li>Rating: ${average}</li>
      <li>Premiered: ${premiered}</li>
    </ul>
    <h3 class='font-rockwell text-2xl font-bold py-6'>Comments</h3>
    <div class='commentCont flex flex-col'>
    </div>
    <h3 class='font-rockwell text-2xl font-bold py-6'>Add new comment</h3>
    <form class='flex flex-col self-start items-start'>
      <input class='mb-4' placeholder='Your name here' required>
      <textarea placeholder ='Your insights here' required></textarea>
      <input class='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-4 rounded mt-4' type='button' value='Comment'>
    </form>
    `;

const openPopUp = (obj) => {
  const popUp = document.createElement('section');
  Object.assign(popUp, {
    className: 'flex flex-col overflow-y-scroll items-center border-2 border-gray-600 border-solid px-[20%] py-6 my-[50px]',
  });
  popUp.setAttribute('style', 'position : absolute; top: 65px; left: 20%; background-color: white');
  popUp.innerHTML = obj;
  main.appendChild(popUp);
  return popUp;
};

export { openPopUp, createHTML };

// export { createHTML }