import fetchData from './fetchData.js';
import { getLikes } from './likesFetch.js';
import { appendCards } from './nodeCreation.js';

function mergeInfo(dataArray, likes) {
  dataArray.forEach((data) => {
    const temp = likes.find((e) => e.item_id === data.id);
    data.likes = temp.likes;
  });
}

export default async function renderSeries(serieList) {
  const dataArray = await Promise.all(
    serieList.map(async (serie) => fetchData(serie)),
  );
  const likes = await getLikes();
  mergeInfo(dataArray, likes);
  const container = appendCards(dataArray);
  return container;
}
