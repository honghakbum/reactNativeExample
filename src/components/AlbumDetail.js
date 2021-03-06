import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({album}) => {
    const {title, artist, thumbnail_image, image} = album;
    const {
        thumbnailStyle, 
        headerContainerStyle,
        thumbnailContainerStyle,
        headerTextStyle,
        imageStyle
    } = styles;
    console.log(image)
  return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image 
                        style={thumbnailStyle}
                        source={{uri: thumbnail_image}} 
                    />
                </View>
                <View style={headerContainerStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image 
                    style={imageStyle}
                    source={{uri: image}} 
                />
            </CardSection>

            <CardSection>
                <Button />
            </CardSection>
        </Card>
    );  
};
const styles = StyleSheet.create({
    headerContainerStyle:{
        flexDirection:'column',
        justifyContent:"space-around"
    },
    headerTextStyle:{
        fontSize:18
    },
    thumbnailStyle:{
        width:50,
        height:50
    },
    thumbnailContainerStyle:{
        justifyContent:"center",
        alignItems:'center',
        marginLeft:10,
        marginRight:10
    },
    imageStyle:{
        height: 300,
        flex:1,
        width:null
    }
});

export default AlbumDetail;