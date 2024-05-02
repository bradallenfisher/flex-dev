async function getJsonApiFooter() {
  const footerApi: any =
    process.env.NEXT_PUBLIC_FOOTER_API_URL || process.env.FOOTER_API_URL;

  const resultJson = fetch(footerApi)
    .then((response) => response.json())
    .then((json) => {
      return { json };
    })
    .catch(() => {
      footerApi && console.warn(`Couldn’t fetch header API at ${footerApi}.`);
    });
  return resultJson;
}

export { getJsonApiFooter };
