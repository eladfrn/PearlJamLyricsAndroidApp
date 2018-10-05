import React, { Component } from 'react';
import { View, ListView } from 'react-native';
import albumsListRetriever from '../common/albumsListRetriever';
import AlbumItem from "./AlbumItem";

export default class AlbumsContainer extends Component {
    constructor(props) {
        super(props);
        this.getAlbumsList = this.getAlbumsList.bind(this);
        this.navigateToAlbum = this.navigateToAlbum.bind(this);

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(this.getAlbumsList())
        }
    }

    getAlbumsList() {
        const navParams = this.props.navigation.state.params;
        const albumType = navParams ? navParams.albumType : 'Studio';
        const albumsList = albumsListRetriever.getAlbumsList(albumType);
        return albumsList.Albums;
    }

    navigateToAlbum(albumName) {
        this.props.navigation.navigate('AlbumContainer', { title: albumName, albumName: albumName, albumType: 'Studio' });
    }

    render() {
        return (
            <View style={{ paddingTop: 5, paddingBottom: 80, }}>
                <ListView
                    showsVerticalScrollIndicator={false}
                    dataSource={this.state.dataSource}
                    style={{ marginBottom: 40, marginTop: 20, marginLeft: 10 }}
                    renderRow={(data) =>
                        <View>
                            <AlbumItem name={data.Name} year={data.Year}
                                onPress={this.navigateToAlbum} />
                        </View>
                    }
                />
            </View>
        );
    }
}