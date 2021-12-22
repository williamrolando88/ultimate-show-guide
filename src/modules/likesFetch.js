export async function getLikes() {
  const url =
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DUygu2IA853rbrNq5k3K/likes';
  const response = await fetch(url, { method: 'GET' });
  const data = await response.json();
  return data;
}

export async function submitLike(id) {
  const url =
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DUygu2IA853rbrNq5k3K/likes';
  const response = await fetch(url, {
    method: 'POST',
    body: id,
  });
  const data = await response.json();
  return data;
}
