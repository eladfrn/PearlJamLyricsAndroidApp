export default class albumsDetailsRetriever {
    static getAlbumsDetails(type) {
        switch (type) {
            case "Studio":
                return require('../data/albumsDetails');
            case "Singles":
                return require('../data/singlesDetails');
            default:
                return null;

        }
    }
}