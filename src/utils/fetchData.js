const url = 'https://api.api-ninjas.com/v1/quotes?category=future';
const header = {
  headers: {
    'X-Api-Key': '2d9Z8r883IlkOi49C0+urA==C2tGNP2xebStztMD',
  },
};

const get = async () => {
  const response = await fetch(url, header);
  const data = await response.json();
  return data;
};

export default get;
