const getCours = () => {
    return fetch('https://lyoumapress.com/api_intelscience/index.php')
      .then((response) => response.json())
      .then((json) => {
        return json.movies;
      })
      .catch((error) => {
        console.error(error);
      });
  };

export default getCours