import fetchData from './fetchData.js';
import { appendCards, cardNode, cardStructure } from './nodeCreation.js';

export default async function renderSeries(serieList) {
  try {
    const dataArray = await Promise.all(
      serieList.map(async (serie) => fetchData(serie)),
    );
    dataArray.forEach((data) => {
      data.alt = data.name.toLowerCase().split(' ').join('-');
    });
    const structures = dataArray.map((d) => cardStructure(d));
    const nodes = structures.map((s) => cardNode(s));
    const container = appendCards(nodes);
    return container;
  } catch (e) {
    console.error(e);
  }
}
