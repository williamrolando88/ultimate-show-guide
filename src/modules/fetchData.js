export default async function fetchData(serie) {
  const response = await fetch(serie.url, { method: 'GET' });
  const data = await response.json();
  const {
    name,
    image: { medium: cover },
  } = data;
  const id = name
    .toLowerCase()
    .split(/[^A-Za-z0-9]/)
    .join('-');
  return { name, cover, id };
}
