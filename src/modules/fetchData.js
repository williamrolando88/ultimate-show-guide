export default async function fetchData(serie) {
  const response = await fetch(serie.url, { method: 'GET' });
  const data = await response.json();
  const {
    name,
    image: { medium: cover },
  } = data;
  return { name, cover };
}
