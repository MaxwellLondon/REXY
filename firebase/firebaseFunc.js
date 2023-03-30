/**
 * Adds a store to Firebase Firestore.
 *
 * @param {firebase.firestore.CollectionReference} storesCollectionRef - A reference to the stores collection in Firebase Firestore.
 * @param {Store} store - The store to add to Firebase Firestore.
 */
async function addStoreToFirestore(storesCollectionRef, store) {
    await storesCollectionRef.add({
        name: store.name,
        rating: store.rating,
        location: store.location,
        hours: store.hours
    });
}

/**
 * Deletes a store from Firebase Firestore.
 *
 * @param {firebase.firestore.DocumentReference} storeDocRef - A reference to the store document in Firebase Firestore.
 */
async function deleteStoreFromFirestore(storeDocRef) {
    await storeDocRef.delete();
}

/**
 * Updates a store in Firebase Firestore.
 *
 * @param {firebase.firestore.DocumentReference} storeDocRef - A reference to the store document in Firebase Firestore.
 * @param {Object} storeData - An object containing the updated store data.
 */
async function updateStoreInFirestore(storeDocRef, storeData) {
    await storeDocRef.update(storeData);
}

/**
 * Adds a store list to Firebase Firestore.
 *
 * @param {firebase.firestore.CollectionReference} storeListsCollectionRef - A reference to the store lists collection in Firebase Firestore.
 * @param {StoreList} storeList - The store list to add to Firebase Firestore.
 */
async function addStoreListToFirestore(storeListsCollectionRef, storeList) {
    await storeListsCollectionRef.add({
        title: storeList.title,
        description: storeList.description,
        likeCount: storeList.likeCount,
        saveCount: storeList.saveCount,
        stores: storeList.stores.map((store) => store.id)
    });
}

/**
 * Deletes a store list from Firebase Firestore.
 *
 * @param {firebase.firestore.DocumentReference} storeListDocRef - A reference to the store list document in Firebase Firestore.
 */
async function deleteStoreListFromFirestore(storeListDocRef) {
    await storeListDocRef.delete();
}

/**
 * Updates a store list in Firebase Firestore.
 *
 * @param {firebase.firestore.DocumentReference} storeListDocRef - A reference to the store list document in Firebase Firestore.
 * @param {Object} storeListData - An object containing the updated store list data.
 */
async function updateStoreListInFirestore(storeListDocRef, storeListData) {
    await storeListDocRef.update(storeListData);
}
