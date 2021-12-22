import fetchData from './fetchData.js';
import appendCards from './nodeCreation.js';

export default async function renderSeries(serieList) {
  const dataArray = await Promise.all(
    serieList.map(async (serie) => fetchData(serie)),
  );
  const container = appendCards(dataArray);
  return container;
}
