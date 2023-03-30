/**
 * A custom object class representing a list of stores.
 *
 * @class
 * @param {string} title - The title of the list.
 * @param {string} description - The description of the list.
 * @property {string} title - The title of the list.
 * @property {string} description - The description of the list.
 * @property {number} likeCount - The number of likes for the list.
 * @property {number} saveCount - The number of saves for the list.
 * @property {Array<Store>} stores - The stores in the list.
 */
class StoreList {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.likeCount = 0;
        this.saveCount = 0;
        this.stores = [];
    }

    /**
     * Adds a store to the list.
     *
     * @param {Store} store - The store to add to the list.
     */
    addStore(store) {
        this.stores.push(store);
    }

    /**
     * Increases the like count of the list by 1.
     */
    incrementLikeCount() {
        this.likeCount++;
    }

    /**
     * Increases the save count of the list by 1.
     */
    incrementSaveCount() {
        this.saveCount++;
    }
}

/**
 * Example
 */
const myStoreList = new StoreList(
    "My Store List",
    "A list of my favorite stores."
);

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

