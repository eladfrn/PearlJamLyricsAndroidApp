
export default class lyricsRetriever {
    static getLyrics(album, songName) {
       for (var index = 0; index < album.Songs.length; index++) {
            var song = album.Songs[index];
            if (song.Title == songName) {               
                    return song.Lyrics;               
            }
        }
    }
}