import fetchData from './fetchData.js';
import { appendCards, cardNode, cardStructure } from './nodeCreation.js';

export default async function renderSeries(serieList) {
  const dataArray = await Promise.all(
    serieList.map(async (serie) => fetchData(serie)),
  );
  const structures = dataArray.map((d) => cardStructure(d));
  const nodes = structures.map((s) => cardNode(s));
  const container = appendCards(nodes);
  return container;
}
