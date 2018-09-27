export default class albumsListRetriever {
    static getAlbumsList(type) {
        switch (type) {
            case "Studio":
                return require('../data/albumsList');
            case "Singles":
                return require('../data/singlesList');
            default:
                return null;

        }
    }
}