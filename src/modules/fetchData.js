export default async function fetchData(serie) {
  try {
    const response = await fetch(serie.url, { method: 'GET' });
    const data = await response.json();
    const {
      name,
      image: { medium: cover },
    } = data;
    return { name, cover };
  } catch (e) {
    console.error(e);
  }
}
