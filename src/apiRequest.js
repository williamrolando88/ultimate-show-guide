const getAPI = async (url) => {
  const response = await fetch(url);
  const seriesInfo = await response.json();
  const {
    name,
    language,
    officialSite,
    rating: { average },
    image: { medium },
    premiered,
  } = seriesInfo;

  return {
    name,
    language,
    officialSite,
    average,
    medium,
    premiered,
  };
};

const getComments = async (name ) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DUygu2IA853rbrNq5k3K/comments?item_id=${name}`;
  const response = await fetch(url);
  const comments = await response.json();
  return comments.length;
};

const postComments = async (name, username, message) => {
  try {
    const post = {
      item_id: `${name}`,
      username: username.value,
      comment: message.value,
    };
    const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DUygu2IA853rbrNq5k3K/comments?item_id=${name}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error happened here!');
  }
  return null;
};

export { getAPI, postComments, getComments };
