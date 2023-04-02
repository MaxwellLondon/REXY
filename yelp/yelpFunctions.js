import firebase from "firebase/compat";

const API_KEY = 'YELP_API_KEY';
const API_URL = 'https://api.yelp.com/v3/businesses/search';

const searchButton = document.querySelector('#search-button');
const searchInput = document.querySelector('#search-input');
const resultsContainer = document.querySelector('#results-container');

searchButton.addEventListener('click', search);

function search() {
    // Get the user's search query from the input field
    const query = searchInput.value;

    // Make a request to the Yelp API
    fetch(`${API_URL}?term=${query}&location=San+Francisco`, {
        headers: {
            Authorization: `Bearer ${API_KEY}`,
        },
    })
        .then((response) => response.json())
        .then((data) => {
            // Display the search results in the results container
            resultsContainer.innerHTML = '';

            data.businesses.forEach((business) => {
                const div = document.createElement('div');
                div.innerHTML = `<h2>${business.name}</h2><p>${business.rating} stars</p><p>${business.location.address1}</p>`;
                resultsContainer.appendChild(div);
            });
        });
}

function addPlaceToList(id, listID, userID) {

    let restaurantsList = [];

    fetch('https://api.yelp.com/v3/businesses/{id}', {
        headers: {
            Authorization: 'Bearer API_KEY'
        }
    })
        .then(response => response.json())
        .then(data => {
            // Create object to store restaurant information
            let restaurant = {
                name: data.name,
                rating: data.rating,
                price: data.price,
                phone: data.phone,
                location: data.location,
                photos: data.photos
            };

            // Add restaurant object to list
            restaurantsList.push(restaurant);

            // Add restaurant object to Firebase Firestore
            firebase.firestore().collection('users').doc(userID).collection("lists").document(listID).add(restaurant)
                .then(docRef => console.log('Document written with ID: ', docRef.id))
                .catch(error => console.error('Error adding document: ', error));
        })
        .catch(error => console.error(error));

}
