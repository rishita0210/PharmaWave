// import fetch from 'node-fetch';

// const headers = {
//   'x-rapidapi-key': 'b4ec816a14mshafaf367f51403dfp155087jsnaab5fb22aeeb',
//   'x-rapidapi-host': 'medicine-name-and-details.p.rapidapi.com'
// };

// const options = {
//   method: 'GET',
//   headers: headers
// };

// const url = 'https://medicine-name-and-details.p.rapidapi.com/?medicineName=prolyte';

// async function fetchMedicine() {
//   try {
//     const response = await fetch(url, options);

//     if (!response.ok) {
//       const errorDetails = await response.text();
//       console.error(`HTTP error! Status: ${response.status}, Details: ${errorDetails}`);
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     try {
//       const result = await response.json();
//       console.log(result);
//       return result;
//     } catch (jsonError) {
//       console.error('Error parsing JSON:', jsonError);
//       throw new Error('Failed to parse JSON response');
//     }
//   } catch (error) {
//     console.error('Fetch error:', error);
//     throw error;
//   }
// }

// async function main() {
//   try {
//     await fetchMedicine();
//   } catch (error) {
//     console.error('Main function error:', error);
//   }
// }

// main();

// export { fetchMedicine };


