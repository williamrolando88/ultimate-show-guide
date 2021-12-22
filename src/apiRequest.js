const getAPI = async (url) => {
  const response = await fetch(url);
  const seriesInfo = await response.json();
  const {
    name, language, officialSite, rating: { average }, image: { medium }, premiered,
  } = seriesInfo;

  return {
    name, language, officialSite, average, medium, premiered,
  };
};

export default getAPI;