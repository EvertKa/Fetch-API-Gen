const baseUrl = "https://restcountries.com/v3.1";

fetch(`${baseUrl}/all`)
    .then((response) => response.json())
    .then((data) => console.log(data)); 


    const containerDiv = document.querySelector('.container');

    data.forEach((country) => {
        const countryButton = document.createElement('button');
        countryButton.classList.add('country-button');


        countryButton.innerHTML = `

        <img src="${country.flags.png}">
        <span>${country.name.official}</span>

        `

        containerDiv.append(countryButton);
    })
