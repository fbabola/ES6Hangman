const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    
    if (response.status === 200) {
        const data = await response.json();
        return data.puzzle;
    } else if (!response.ok) {
        throw new Error('Unable to get puzzle data');
    };
};

// const getCurrentCountry = async () => {
//     const location = await getLocation();
//     const country  = await countryDetails(location.country);
//     return country;
// }

// const countryDetails = async (countryCode) => {
//     const response = await fetch(`https://restcountries.eu/rest/v2/all`);

//     if (response.status === 200) {
//         const data = await response.json();
//         return data.find((country) => country.alpha2Code === countryCode);
//     } else if (!response.ok) {
//         throw new Error('Unable to get country data');
//     };
// };
