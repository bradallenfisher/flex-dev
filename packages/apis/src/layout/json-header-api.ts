async function getJsonApiHeader() {
  const headerApi: any =
    process.env.NEXT_PUBLIC_HEADER_API_URL || process.env.HEADER_API_URL;

  const resultJson = fetch(headerApi)
    .then((response) => response.json())
    .then((json) => {
      return { json };
    })
    .catch(() => {
      headerApi && console.warn(`Couldn’t fetch header API at ${headerApi}.`);
    });
  return resultJson;
}

export { getJsonApiHeader };
