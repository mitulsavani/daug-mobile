<p align="center">
<a href="https://github.com/jkhusanov/daug-mobile/">
<img alt="daug" src="https://github.com/mitulsavani/daug-mobile/blob/master/assets/daugLogo.png" width="250">
</a>
</p>

<h3 align="center">
Daug mobile app
</h3>

<p align="center">
Daug is a social network for pets.
</p>

## What's Daug?

**Daug is a social network for pets.**

- Your pets can **sign up or login** using their paws.
- They can **upload selfies** or **post their thoughts** for other pets to see.
- They can also look at **other pets posts** and either **paw** (like) or **scratch** (dislike) it.

### [Demo - Try it on Expo](https://exp.host/@mitulsavani/daug-mobile)
![daug_demo](https://github.com/mitulsavani/daug-mobile/blob/master/assets/daug.gif)

## Getting started

```
git clone git@github.com:mitulsavani/daug-mobile.git

exp start

exp ios
```

## Functionality
- Daug is a fully functioning Social Network app
- Users can Sign up & Log into the app
- Users can create a new Posts
- Users can like and comments on Posts
- Users can follow each other

Used [React Native AWS3](https://github.com/benjreinhart/react-native-aws3)  library to let the users upload a new profile picture. Additionally, I used [React Native Elements](https://github.com/react-native-training/react-native-elements) library to build UI, [React Navigation](https://reactnavigation.org/) library to handle navigation, and packages such as react-native-modal and react-native-keyboard-aware-scroll-view to improve UI.

Would like to implement Redux in the future to better manage the state. Also would like to add themeing to the app to enable light/dark modes, and overall make the app more dynamic and functional.


## Milestones

Below you can see my main milestones and how I achieved them

## Designs

Intro, Login & Sign Up screens are based on **Robinhood App**.

Profile screen is based on **Instagram**.

Social Feed screen is based on **Facebook** and **Instagram**.

### Other design ideas

- [Login screen designs on Pinterest](https://www.pinterest.com/timoa/mobile-ui-logins/?lp=true)
- [Mobile UI on Dribble](https://dribbble.com/search?q=mobile+UI)
- [Instagram UI kit - Sketch file](https://www.sketchappsources.com/free-source/2023-instagram-based-ui-kit-sketch-freebie-resource.html)


## Milestone #1

### Objectives

- Learn how to build & organize screens in RN
- Learn advanced RN styling and use LinearGradient, Image, Icons & Custom Fonts
- Learn how to use mock data for prototyping UI screens
- Learn how to use NPM libaries such as React Native Elements, Expo & React Native Vector Icons


## Designs

Intro, Login & Sign up screen based on Robinhood App.

Profile screen based on Instagram.

Social feed screen based on Facebook.

### Other design ideas

- [Login screen designs on Pinterest](https://www.pinterest.com/timoa/mobile-ui-logins/?lp=true)
- [Mobile UI on Dribble](https://dribbble.com/search?q=mobile+UI)
- [Instagram UI kit - Sketch file](https://www.sketchappsources.com/free-source/2023-instagram-based-ui-kit-sketch-freebie-resource.html)

### TODO

- [x] Design & build an Intro Screen
- [ ] :star: **Bonus:** Add [Snap Carousel](https://github.com/archriss/react-native-snap-carousel) with [Lottie animations](https://docs.expo.io/versions/latest/sdk/lottie.html) to Intro Screen
- [x] Design & build an Signup Screen
- [ ] :star: **Bonus:** Add buttons to sign up with Facebook & Twitter
- [x] Design & build an Login Screen
- [ ] :star: **Bonus:** Add buttons to login with Facebook & Twitter
- [x] Design & build an Profile Screen
- [x] :star: **Bonus:** Add the Logout button
- [x] Design & build an Social Feed Screen with [Mock Data](https://raw.githubusercontent.com/mobilespace/daug-mobile/master/app/utils/constants.js?token=AHejrmtQeRKU4ntCxaYLoNiWDlF-kQdKks5am8vHwA%3D%3D)
- [x] Attach screenshots/gif of screens to `README.MD`

### Demo

<div style={{display: flex; flex-direction: row}}>
<img src="screenshots/Intro.png" width="250" />
<img src="screenshots/Login.png" width="250" />
<img src="screenshots/LoginFail.png" width="250" />
</div>
<div style={{display: flex; flex-direction: row}}>
<img src="screenshots/Signup.png" width="250" />
<img src="screenshots/SocialFeed.png" width="250" />
<img src="screenshots/SocialFeed2.png" width="250" />
<img src="screenshots/Profile.png" width="250" />
</div>


## Milestone #2

### Objectives

- Learn how to build navigation for Daug app using [React Navigation](https://reactnavigation.org/)
- Learn mobile design patterns for navigation & screen layouts
- Learn how to quickly build RN screens and hook them up using navigation

### TODO

- [x] Understand the 3 main navigation patterns for mobile apps:
- [x] [StackNavigator](https://reactnavigation.org/docs/hello-react-navigation.html#creating-a-stacknavigator)
- [x] [TabNavigator](https://reactnavigation.org/docs/tab-based-navigation.html)
- [x] [DrawerNavigator](https://reactnavigation.org/docs/drawer-based-navigation.html)
- [x] Setup a **IntroStack** (using StackNavigator) for the Intro Screen (root), Login Screen (push) & Sign Up Screen (push)
- [x] Setup a **HomeTabs** (using TabNavigator) for the Social Feed Screen (default) and Profile Screen
- [x] Setup a **RootNavigator** (using StackNavigator) with the **IntroStack** & **HomeTabs** with `mode: "modal"`
- [x] Design & build an Edit Profile Screen
- [x] Setup a **ProfileStack** (using StackNavigator) for the Profile Screen (root), Post Details Screen (push) & Edit Profile Screen (modal) with mode: "modal" and custom RNE header component
- [x] Design & build a Post Details Screen
- [x] Design & build a Create Post Screen
- [x] Setup a **SocialStack** (using StackNavigator) for the Social Feed Screen (root), Post Details Screen (push) & Create Post Screen (modal) with mode: "modal" and custom RNE header component
- [x] :star: **Bonus:** Display Posts on ProfileScreen
- [x] :star: **Bonus:** Setup a **HomeNavigator**(using DrawerNavigator) with the **HomeTabs** (as root) and update **RootNavigator** to use **HomeNavigator** instead of **HomeTabs**

## Milestone #3

### Objectives

- Learn how to make backend API calls and User Authentication
- Learn how to setup and use Redux and AsyncStorage
- Serve as an React Native app that you can showcase on your porfolio

#### URL: [https://daug-app.herokuapp.com](https://daug-app.herokuapp.com)

### API

- `/api` => `GET` => Used to check API endpoint status
- `/users/all` => `GET` => Lists of all users
- `/posts/all` => `GET` => Lists of all posts
- `/users/:userId` => `GET` => Returns a user
- `/users/:userId` => `PUT` => Updates a user
- `/posts/:postId` => `GET` => Returns a post
- `/posts/:postId` => `POST` => Creates a post
- `/posts/:postId` => `PUT` => Updates a post
- `/posts/:postId` => `DELETE` => Deletes a post
- `/feed` => `GET` => Returns the Social Feed
- `/auth` => `GET` => Used to check AUTH endpoint status
- `/signup` => `POST` = `( name, email, password )` => Used to create a new user
- `/login` => `POST` = `( email, password )` => Used to validate an existing user

```
**Namespace:** `/auth`

// User Authentication endpoints
router.post('auth/signup'); // CREATE
router.post('auth/login'); // VALIDATE / READ


**Namespace:** `/api`

// All data endpoints
router.get('api/users/all'); // READ
router.get('api/posts/all'); // READ

// Social Feed endpoints
router.get('api/feed'); // READ

// User data endpoints
router.get('api/users/:userId'); // READ
router.put('api/users/:userId'); // UPDATE

// Posts endpoints
router.get('api/posts/:postId'); // READ
router.post('api/users/:userId/posts'); // CREATE
router.put('api/users/:userId/posts/:postId'); // UPDATE
router.delete('api/users/:userId/posts/:postId'); // DELETE

// Follower endpoints
router.get('api/users/:userId/followers'); // READ
router.get('api/users/:userId/following'); // READ
router.post('api/users/:userId/follow/:followingId'); // CREATE
router.post('api/users/:userId/unfollow/:followingId'); // DELETE

// Like endpoints
router.get('api/posts/:postId/likes'); // READ
router.post('api/posts/:postId/like/:userId'); // CREATE
router.post('api/posts/:postId/unlike/:userId'); // DELETE

// Comment endpoints
router.get('api/posts/:postId/comments'); // READ
router.post('api/posts/:postId/comment/:userId'); // CREATE
router.post('api/posts/:postId/uncomment/:userId'); // DELETE
```

### TODO

- [x] Intro Screen - Make simple **`GET`** request to **`/api`** to check server status
- [x] Signup Screen - Make **`POST`** request to **`/auth/signup`** to create a new user
- [ ] :star: **Bonus:** Add UI validation to Signup Screen - name (not null), email (format) & password (min. 8 characters)
- [x] Login Screen - Make **`POST`** request to **`/auth/login`** to validate and login an existing user
- [ ] :star: **Bonus:** Add UI validation to Login Screen - email (format) & password (min. 8 characters)
- [x] Social Feed Screen - Make **`GET`** request to **`/api/feed/`** to get all posts for social feed
- [x] :star: **Bonus:** Use `ActivityIndicator` to show placeholder loading when fetching feed data
- [x] :star: **Bonus:** Use `DeviceEventEmitter` to trigger fetching posts when the `new_post_created` event is emitted
- [x] :star: **Bonus:** Use `timeSince()` utility function to show relative times for post creation
- [x] Create Post Screen - Make **`POST`** request to **`/api/users/:userId/posts`** to create a new post by the user
- [x] :star: **Bonus:** Use `DeviceEventEmitter` to emit `new_post_created` event once post is created
- [x] Profile Screen - Make **`GET`** request to **`/api/users/:userId`** to get all the profile data
- [x] :star: **Bonus:** Use `ActivityIndicator` to show placeholder loading when fetching profile data
- [x] :star: **Bonus:** Use `DeviceEventEmitter` to trigger fetching profile data when the `user_profile_updated` event is emitted
- [x] Edit Profile Screen - Make **`PUT`** request to **`/api/users/:userId`** to update a user's profile information
- [x] :star: **Bonus:** Use `DeviceEventEmitter` to emit `user_profile_updated` event once user data is updated
- [x] Setup Authentication flow for app using `AsyncStorage`. Once the user has logged in then take them to home page each time they open the app again
- [ ] Use Redux to share state between tab bar & screens
- [x] Add working gif of app to `README.MD`

## Wrap up

### Objectives

- Add UI polish, tie up loose end and add remaining functionality
- Update Readme with app details and publish Expo app for demo
- Serve as an React Native app that you can showcase on your porfolio

### TODO
- [x] Dynamically load user info
- [x] Fix photo upload and add take photo functionality
- [x] Add Like, Comment and Follow API functionality
- [x] Clean up and format `README.MD` to showcase app - [follow this template](https://github.com/mobilespace/MobileGuides/blob/master/showcase_app_readme.md#readme-template-for-showcasing-a-mobile-app)
- [ ] :star: **Bonus:** Add phone number UI to Edit Profile screen
- [x] :star: **Bonus:** Add Camera functionality to Create Post screen
- [ ] :star: **Bonus:** Use Redux to share state between tab bar & screens
- [x] Add working gif of app to `README.MD`


## Feedback

For any other questions about this repo in general please reach out to [**@mitulsavani**](https://github.com/mitulsavani) on Github. <br>
PS: Feel free to fork it if you find my app interesting.


