import albumsDetailsRetriever from './albumsDetailsRetriever';

export default class albumRetriever {
    static getAlbum(albumType, albumName) {
        const data = albumsDetailsRetriever.getAlbumsDetails(albumType);
         for (var index = 0; index < data.Albums.length; index++) {
            var album = data.Albums[index];
            if (album.Name == albumName)
                return album;
        }

    }
}