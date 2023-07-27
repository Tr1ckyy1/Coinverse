export async function getCoins(id = "") {
  const url = `https://api.coingecko.com/api/v3/coins/${id}`;
  const res = await fetch(url);

  if (!res.ok)
    throw {
      message: "Failed to fetch coin data",
      status: res.status,
    };
  const data = await res.json();
  return data;
}
