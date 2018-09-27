import React, { Component } from 'react';
import { View, ListView, Text, TouchableHighlight } from 'react-native';
import albumRetriever from '../common/albumRetriever';


export default class AlbumContainer extends Component {

    constructor(props) {
        super(props);
        this.navParams = this.props.navigation.state.params;
        this.displaySongDetails = this.displaySongDetails.bind(this);       
        this.state = {
            dataSource: []
        };
    }

    getAlbumDetails() {               
        const album = albumRetriever.getAlbum(this.navParams.albumType, this.navParams.albumName);
        return album;
    }

    getAlbumSongsList() {
        let albumSongs = [];
        let albumsDetails = this.getAlbumDetails();
        for (var i = 0; i < albumsDetails.Songs.length; i++) {
            var obj = albumsDetails.Songs[i];
            albumSongs.push(obj.Title);
        }

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(albumSongs)
        }
    } 
    
    displaySongDetails(songName) {
        let album = this.getAlbumDetails();
        this.props.navigation.navigate('SongContainer',{album: album, songName: songName})
    }

    render() {
        this.getAlbumSongsList();
        let songnumber = 1;
        return (
            <View style={{ paddingLeft: 20, flex: 1, flexDirection: 'column' }}>
                <View style={{ flexDirection: 'row', paddingBottom: 20, }}>                   
                    <Text style={{ fontSize: 30, paddingLeft: 10 }}>{this.props.albumName}</Text>
                </View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(songName) =>
                        <View>
                            <TouchableHighlight underlayColor="gray"
                                onPress={() =>
                                    this.displaySongDetails(songName)} >
                                <Text style={{ paddingBottom: 20, fontSize: 20 }}>{(songnumber++) + '. ' + songName}</Text>
                            </TouchableHighlight>
                        </View>
                    }
                />
            </View>
        );
    }
}
