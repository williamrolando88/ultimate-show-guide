const main = document.querySelector('main');

const createHTML = ({
  name, language, officialSite, average, medium, premiered,
}) => `
    <i class="fas fa-times self-end py-4 text-4xl mr-8"></i>
    <section class="flex w-[70%]">
    <img src=${medium} class="mr-6 w-3/6" alt="cover Image">
    <div class="flex flex-col">
    <div class="flex flex-col mb-[50px]">
    <h2 class='font-rockwell text-5xl font-bold py-6'>${name}</h2>
    <ul>
      <li class="font-black text-lg">Language: <span class="font-normal">${language}</span></li>
      <li class="font-black text-lg">Official Site: <a class='font-normal underline hover:text-blue-600' href="${officialSite}">${officialSite}</a></li>
      <li class="font-black text-lg">Rating: <span class="font-normal">${average}</span></li>
      <li class="font-black text-lg">Premiered: <span class="font-normal">${premiered}</span></li>
    </ul>
    </div>

    <div class="flex flex-col">
    <h3 class='font-rockwell text-[2rem] font-bold py-6'>Add new comment</h3>
    <form class='w-[100%] flex flex-col self-start items-start'>
      <input id='username' class='mb-4 w-[100%]' placeholder='Your name here' required>
      <textarea id='message' class='mb-4 w-[100%]' placeholder ='Your insights here' required></textarea>
      <input class='bg-gray-300 commentBtn hover:bg-gray-400 text-gray-800 font-bold py-2 px-5 rounded mt-4' type='button' value='Comment'>
    </form>
    </div>
    </div>
    </section>
    <section class="py-[50px] flex justify-start w-[70%]">
   
    <div>
    <h3 class='font-rockwell text-2xl font-bold py-6'>Comments <span class="numComments">()</span></h3>
    <div class='commentCont text-lg self-start flex flex-col'>
    </div>
    </div>
    </section>
    `;

const openPopUp = (obj) => {
  const popUp = document.createElement('section');
  Object.assign(popUp, {
    className: 'flex flex-col overflow-y-scroll items-center rounded-md py-6 pb-6 my-[50px]',
  });
  popUp.setAttribute('style', 'position : absolute; top: 65px; width: 80vw; background-color: #e7e5e4');
  popUp.innerHTML = obj;
  main.appendChild(popUp);
  return popUp;
};

export { openPopUp, createHTML };

// export { createHTML }