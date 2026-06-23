async function getCountry() {
  const countryName = document.getElementById("countryInput").value.trim();
  const resultDiv = document.getElementById("result");

  if (!countryName) {
    resultDiv.innerHTML =
      `<p style="color:red;">Please enter a country name</p>`;
    return;
  }

  resultDiv.innerHTML = "Loading...";

  const response = await fetch(
  `http://127.0.0.1:5000/api/country?name=${encodeURIComponent(countryName)}`
);

    const data = await response.json();

    if (data.data.objects.length === 0) {
    resultDiv.innerHTML = "Country not found";
    return;
}

    const country = data.data.objects[0];

    resultDiv.innerHTML = `
      <h2>${country.names.common}</h2>
      <p><strong>Capital:</strong> ${country.capitals[0].name}</p>
      <p><strong>Region:</strong> ${country.region}</p>
      <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
      <img src="${country.flag.url_png}" width="150" alt="Flag">
    `;

  } 
