import React, { Component, PropTypes } from 'react';
import { View, Text, ScrollView } from 'react-native';
import lyricsRetriever from '../common/lyricsRetriever';
import albumRetriever from '../common/albumRetriever';

export default class SongContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataSource: []
        }

    }    

    getLyrics() {
        debugger;
        const navParams = this.props.navigation.state.params;
        let lyrics = lyricsRetriever.getLyrics(navParams.album, navParams.songName);
        if (!lyrics.includes('#'))
            return lyrics;

        const originalAlbumName = lyrics.substring(1, lyrics.length);
        const originalAlbum = albumRetriever.getAlbum("Studio", originalAlbumName);
        lyrics = lyricsRetriever.getLyrics(originalAlbum, navParams.songName);
        return lyrics;
    }

    render() {
        let lyrics = this.getLyrics();
        return (
            <View>
                <Text style={{ paddingLeft: 20, fontSize: 30 }} >{this.props.songName}</Text>
                <ScrollView style={{ padding: 20 }}>
                    <Text style={{ marginBottom: 70 }} >{lyrics}</Text>
                </ScrollView >
            </View>
        );
    }
}