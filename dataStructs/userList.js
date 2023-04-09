class YelpPlace {
    constructor(name, likeCount, saveCount, tags, places) {
      this.name = name;
      this.likeCount = likeCount;
      this.saveCount = saveCount;
      this.tags = tags;
      this.places = places;
    }
  
    addPlace(place) {
      this.places.push(place);
    }
  
    removePlace(placeId) {
      this.places = this.places.filter(place => place.id !== placeId);
    }
  
    incrementLikeCount() {
      this.likeCount += 1;
    }
  
    decrementLikeCount() {
      this.likeCount -= 1;
    }
  
    incrementSaveCount() {
      this.saveCount += 1;
    }
  
    decrementSaveCount() {
      this.saveCount -= 1;
    }
  }
  