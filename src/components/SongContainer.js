import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import lyricsRetriever from '../common/lyricsRetriever';
import albumRetriever from '../common/albumRetriever';
import ZoomLyricsContainer from "./ZoomLyricsContainer";

export default class SongContainer extends Component {
    constructor(props) {
        super(props);

        this.increaseFontSize = this.increaseFontSize.bind(this);
        this.decreaseFontSize = this.decreaseFontSize.bind(this);
        this.state = {
            dataSource: [],
            fontSize: 15
        }
    }

    getLyrics() {
        const navParams = this.props.navigation.state.params;
        let lyrics = lyricsRetriever.getLyrics(navParams.album, navParams.songName);
        if (!lyrics.includes('#'))
            return lyrics;

        const originalAlbumName = lyrics.substring(1, lyrics.length);
        const originalAlbum = albumRetriever.getAlbum("Studio", originalAlbumName);
        lyrics = lyricsRetriever.getLyrics(originalAlbum, navParams.songName);
        return lyrics;
    }

    increaseFontSize() {
        const fontSize = this.state.fontSize += 2;
        this.setState({ fontSize: fontSize })

    }

    decreaseFontSize() {
        const fontSize = this.state.fontSize -= 2;
        this.setState({ fontSize: fontSize })
    }

    render() {
        const lyrics = this.getLyrics();
        const fontSize = this.state.fontSize;      
        return (
            <View>
                <ScrollView>
                    <Text style={{ margin: 20, fontSize: fontSize }} >{lyrics}</Text>
                </ScrollView >
                <ZoomLyricsContainer increaseFontSize={this.increaseFontSize} decreaseFontSize={this.decreaseFontSize} />
            </View>
        );
    }
}