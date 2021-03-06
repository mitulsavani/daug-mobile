import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Vibration, 
  Image, 
  ScrollView,
  Dimensions,
  DeviceEventEmitter,
  ActivityIndicator,
  TouchableOpacity,
  Alert
} from 'react-native';
import { MaterialCommunityIcons, SimpleLineIcons, Entypo } from '@expo/vector-icons';
import { Button } from 'react-native-elements';
import { Font } from 'expo';
import { onSignOut, ENV_URL, getUserId } from '../utils/helpers';

const DEVICE_WIDTH = Dimensions.get('window').width;

export default class ProfileScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerVisivle: navigation.state.params ? navigation.state.params.isHeaderShow : false,
      title: 'Profile',
      headerTintColor: '#C83E70',
      headerTitleStyle: {
        fontSize: 20,
        fontFamily: 'Comfortaa'
      },
      headerStyle: {
        backgroundColor: '#FAFAFA',
      },
    }
  }
  constructor(props) {
    super(props);

    const userId = props.navigation.state.params && props.navigation.state.params.userId
    const isHeaderShow = props.navigation.state.params && props.navigation.state.params.isHeaderShow

    this.state = {
      fontLoaded: false,
      isProfileLoading: false,
      userId: userId || null,
      user: null,
      isHeaderShow: isHeaderShow || false
    };
  }


  async componentDidMount() {
    await Font.loadAsync({
      'Comfortaa': require('../../assets/fonts/Comfortaa.ttf'),
      'ComfortaaBold': require('../../assets/fonts/ComfortaaBold.ttf')
    });

    const{ userId } = this.state;

    if(userId === null)
    {
      getUserId()
        .then(res => {
          this.setState({userId: res})
          this.state.user === null && this.fetchUser()
        })
        .catch(err => {
          alert("An error occurred")
        });  
    }
    else {
      this.fetchUser()

      getUserId()
        .then(res => {
          this.setState({ post_detail_home_user_id: res })
        })
        .catch(err => {
          alert("An error occurred")
        });
    }
    this.setState({ fontLoaded: true });
  }

  componentWillMount() {
    DeviceEventEmitter.addListener('user_profile_updated', (e) => {
      this.fetchUser()
    })
  }

  async fetchUser() {
    this.setState({ isProfileLoading: true });

    try {
      let response = await fetch(`https://daug-app.herokuapp.com/api/users/${this.state.userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
      });

      let responseJSON = null

      if (response.status === 200) {
        responseJSON = await response.json();

        
        console.log(responseJSON);

        this.setState({ 
          user: responseJSON, 
          isProfileLoading: false 
        })
      } else {
        responseJSON = await response.json();
        const error = responseJSON.message

        console.log("failed" + error);
      }
    } catch (error) {
      this.setState({ isProfileLoading: false, response: error })

      console.log(error)

      Alert.alert('Unable to get the profile info. Please try again later')
    }
  }

  async followUser() {
    const { post_detail_home_user_id, userId } = this.state

    try {
      let response = await fetch(`https://daug-app.herokuapp.com/api/users/${post_detail_home_user_id}/follow/${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: null
      });

      let responseJSON = null

      if (response.status === 201) {
        responseJSON = response.json();

        console.log(responseJSON)

        this.fetchUser()
        this.setState({ following: true })

        Alert.alert(
          'Following user!',
          '',
          [
            {
              text: "Dismiss", onPress: () => {
                console.log("User followed!")
              }
            }
          ],
          { cancelable: false }
        )
      } else {
        responseJSON = await response.json();
        const error = responseJSON.message

        console.log(responseJSON)

        this.setState({ isProfileLoading: false, errors: responseJSON.errors, following: false })

        Alert.alert('Unable to follow user', `${error}`)
      }
    } catch (error) {
      this.setState({ isProfileLoading: false, error, following: false })

      Alert.alert('Unable to follow user', `${error}`)
    }
  }

  displayPost(post, index) {
    const { navigate } = this.props.navigation

    return (
      <TouchableOpacity
        style={[styles.postIconContainer, { width: DEVICE_WIDTH / 3, height: DEVICE_WIDTH / 3 }]}
        key={index}
        onPress={() => navigate('Post', { postId: post.id })}
        activeOpacity={1}
      >
        {post.image && <Image source={{ uri: post.image || '' }} style={styles.postImage} resizeMode="cover" />}
      </TouchableOpacity>
    )
  }

  renderPosts() {
    const { posts } = this.state.user

    return (
      <View style={styles.postsContainer}>
        {
          posts.map((post, index) => {
            return this.displayPost(post, index)
          })
        }
      </View>
    )
  }

  loadingView() {
    return(
      <View style={styles.loadingView}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  contentView()
  {
    const { user, isHeaderShow } = this.state;
    const { navigate } = this.props.navigation;
    
    return (
      <ScrollView style={{ backgroundColor: '#fff' }} >
        <View style={styles.mainContainer}>
          <View style={styles.userCoverPic}>
            <Image
            style={styles.coverImage}
            source={{ uri: user && user.banner_image || '' }}
            resizeMode='cover'
            />
          </View>

          <View style={styles.infoContainer}>
            <View style={styles.logs}>
              <View style={styles.displayPicContainer} >
              <Image
                style={styles.displayPic}
                source={{ uri: user && user.profile_image || '' }}
                resizeMode = 'cover'
              />
              </View>
              <View style={styles.activityContainer} >
                <View style={styles.postAndFollowContainer} >
                  <View style={styles.posts} >
                    <Text style={{ fontWeight: 'bold', fontFamily: 'Comfortaa' }} >  {user.posts ? user.posts.length : '0'}   </Text>
                    <Text style={{ fontWeight: 'bold', fontFamily: 'Comfortaa' }}> Post </Text>
                  </View>
                  <View style={styles.followers} >
                    <Text style={{ fontWeight: 'bold', fontFamily: 'Comfortaa' }}> {user.followers && user.followers.length || 0} </Text>
                    <Text style={{ fontWeight: 'bold', fontFamily: 'Comfortaa' }}> Followers </Text>
                  </View>
                  <View style={styles.following} >
                    <Text style={{ fontWeight: 'bold', fontFamily: 'Comfortaa' }}> {user.following && user.following.length || 0} </Text>
                    <Text style={{ fontWeight: 'bold', fontFamily: 'Comfortaa' }}> Following </Text>
                  </View>
                </View>

                <View style={styles.editProfileContainer} >
                  <View style={styles.editButton}>
                  {  
                    !isHeaderShow ?
                    <Button
                      onPress={() => navigate('EditProfile', {user : user})}
                      title='Edit'
                      titleStyle={{ 
                        fontSize: 13, 
                        color: 'black', 
                        fontFamily: 'Comfortaa' 
                      }}
                      buttonStyle={{
                        backgroundColor: 'white',
                        width: 100,
                        height: 20,
                        borderColor: 'black',
                        borderWidth: 1,
                        borderRadius: 5
                      }}
                      icon={
                        <MaterialCommunityIcons
                          name='account-edit'
                          size={20}
                          color='black'
                        />
                      }
                    />
                    :
                        <Button 
                        title={this.state.following ? 'Following' : 'Follow'}
                        containerStyle={{ marginBottom: -5 }}
                        buttonStyle={this.state.following ? styles.followingButton : styles.followButton}
                        titleStyle={this.state.following ? styles.followingText : styles.followText}
                        onPress={() => this.followUser()}
                        />
                  }        
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.bioData} >
              <View style={styles.name} >
              <Text style={{ fontSize: 20, fontWeight: 'bold', fontFamily: 'Comfortaa' }}> {user && user.name} </Text>
              </View>
              <View style={styles.status} >
              <Text style={{ fontSize: 15, fontStyle: 'italic', fontFamily: 'Comfortaa' }} > {user && user.bio} </Text>
              </View>
            </View>
          </View>
          
          {
            !isHeaderShow ? 
            <View style={styles.logOutContainer}>
              {this.renderPosts()}
              <Button
                title='LOGOUT'
                titleStyle = {{fontFamily: 'Comfortaa'}}
                buttonStyle={{
                  backgroundColor: '#3B8AB8',
                  width: 200,
                  height: 45,
                  borderColor: "transparent",
                  borderWidth: 0,
                  borderRadius: 5
                }}
                icon={
                  <MaterialCommunityIcons
                    name='logout'
                    size={24}
                    color='white'
                  />
                }
                onPress={() =>onSignOut().then(() => this.props.navigation.navigate('Intro')) }
              />
            </View>
            :
            this.renderPosts()
          }

        </View>
      </ScrollView> 
    )
  }
  render() {
    const { isProfileLoading, user, fontLoaded, isHeaderShow } = this.state;
    const { navigate } = this.props.navigation;

    return (
      this.state.fontLoaded && ( isProfileLoading || user === null ? this.loadingView() : this.contentView() ) 
    );
  }
}

const styles = StyleSheet.create({

  mainContainer: {
    flex: 1,
  },
  loadingView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  userCoverPic: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },

  infoContainer: {
    height: 120,
    flexDirection: 'column',
    backgroundColor: 'pink'
  },

  logOutContainer: {
    height: 320,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logs: {
    flex: 2,
    backgroundColor: 'red',
    flexDirection: 'row'
  },
  bioData: {
    flex: 1.5,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: '#aaaaaa'
  },
  displayPicContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  activityContainer: {
    flex: 3,
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  daugcover: {
    width: 400,
    height: 180,
    marginLeft: 25
  },
  name: {
    flex: 1.5,
    justifyContent: 'center',
    marginLeft: 5
  },
  status: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 5
  },
  displayPic: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginTop: -20
  },
  postAndFollowContainer: {
    flex: 2,
    flexDirection: 'row',
  },
  editProfileContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  editButton: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  posts: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  followers: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  following: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  coverImage: {
    height: 200,
    width: '100%'
  },
  defaultCoverImage: {
    height: 200,
    width: '100%',
    backgroundColor: '#e1e8f2'
  },
  followButton: {
    backgroundColor: '#28ABEC',
    width: 100,
    height: 20,
    borderRadius: 5
  },
  followingButton: {
    backgroundColor: '#28ABEC',
    borderColor: '#aaaaaa',
    borderWidth: 2,
    width: 100,
    height: 20,
    borderRadius: 5
  },
  followText: {
    color: 'white',
    fontSize: 13,
    fontFamily: 'Comfortaa'
  },
  followingText: {
    color: 'black',
    fontSize: 13,
    fontFamily: 'Comfortaa'
  },
  postsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 10,
    paddingBottom: 20
  },
  postIconContainer: {
    borderWidth: 1.5,
    borderColor: 'white',
    backgroundColor: 'grey'
  },
  postImage: {
    flex: 1
  }
});
