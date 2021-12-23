export async function getLikes() {
  const url =
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DUygu2IA853rbrNq5k3K/likes';
  const response = await fetch(url, { method: 'GET' });
  const data = await response.json();
  return data;
}

export async function submitLike(id) {
  try {
    const body = JSON.stringify({ item_id: id });
    const url =
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DUygu2IA853rbrNq5k3K/likes';
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: body,
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
  return null;
}
