/**
 * A custom object class representing a store.
 *
 * @class
 * @param {string} name - The name of the store.
 * @param {number} rating - The rating of the store (out of 5).
 * @param {string} location - The location of the store.
 * @param {object} storeHours - The store hours for each day of the week.
 * @property {string} name - The name of the store.
 * @property {number} rating - The rating of the store (out of 5).
 * @property {string} location - The location of the store.
 * @property {object} storeHours - The store hours for each day of the week.
 */
class Store {
    constructor(name, rating, location, storeHours) {
        this.name = name;
        this.rating = rating;
        this.location = location;
        this.storeHours = storeHours;
    }
}

/**
 * Example usage of the Store class.
 */
const myStore = new Store(
    "My Store",
    4.5,
    "123 Main St, Anytown USA",
    {
        monday: "9:00 AM - 5:00 PM",
        tuesday: "9:00 AM - 5:00 PM",
        wednesday: "9:00 AM - 5:00 PM",
        thursday: "9:00 AM - 5:00 PM",
        friday: "9:00 AM - 5:00 PM",
        saturday: "10:00 AM - 3:00 PM",
        sunday: "Closed"
    }
);
