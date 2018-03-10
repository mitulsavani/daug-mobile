import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import Rocco_DisplayPic from '../../assets/Rocco_displayPic.jpg';
import { SimpleLineIcons } from '@expo/vector-icons';

export default class CreatePost extends React.Component {
render() {
    return (
        <View style={styles.container}>
            <View style = {styles.infoContainer}>
                <View style = {styles.authorpicture}>
                    <Image style={styles.roccoDisplayPic} source = {Rocco_DisplayPic} />
                </View>
                <View style = {styles.authorInfo}>
                    <View style = {styles.authorName}>
                        <Text style = {{fontSize: 20, color: '#4045A8', fontWeight: 'bold'  }}> 
                            Rocco
                        </Text>
                    </View>
                    <View style = {styles.location}>
                    <TouchableOpacity style={styles.locationContainer}>
                        <SimpleLineIcons
                            name="location-pin"
                            size={12}
                        />
                        <Text style={styles.locationName}>Add Location</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style = {styles.postPara}>
                <TextInput
                    style={styles.content}
                    multiline
                    placeholder="What's on your mind?"
                    placeholderTextColor="#DDD"
                    underlineColorAndroid="rgba(0,0,0,0)"
                />
            </View>
        </View>
    );
}
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginTop: 30
},

infoContainer: {
    flex: 1,
    backgroundColor: '#EFEFF5', 
    flexDirection: 'row'

},

postPara: {
    flex: 9,
    backgroundColor: 'white',

},

authorpicture: {
    flex: 2,
},
authorInfo :{
    flex: 7,
    
},
roccoDisplayPic :{
    height:80,
    width: 80,
    borderRadius: 40,
},
authorName: {
    flex: 1.5,
    marginLeft: 10,
    justifyContent: 'center'
},
location : {
    flex: 1,
    //flexDirection: 'row',
    marginLeft: 10,
    justifyContent: 'center'
},
locationContainer: {
    flex: 1,
    flexDirection: 'row',
},
locationName: {
    marginLeft: 4,
    fontSize: 13,
},
content: {
    marginLeft: 12,
    marginRight: 12,
    fontWeight: 'bold',
    fontSize: 24,
}

});