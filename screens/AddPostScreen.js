import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  Platform,
  StyleSheet,
  Alert,
  ActivityIndicator,
  TextInput,
  ScrollView,
} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';
import FormInputt from '../components/FormInputt';
import Form from '../components/Form';
import NativeForms from 'native-forms';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import {LogBox} from 'react-native';
import SelectMultiple from 'react-native-select-multiple';
const fruits = [
  'webdeveloper',
  'appdeveloper',
  'animator',
  'photoshop/video editor',
  'logomaker',
  'advertiser',
];

LogBox.ignoreLogs(['Animated: `useNativeDriver`']);

import {
  InputField,
  InputWrapper,
  AddImage,
  SubmitBtn,
  SubmitBtnText,
  StatusWrapper,
} from '../styles/AddPost';

import {AuthContext} from '../navigation/AuthProvider';

const AddPostScreen = () => {
  const {user, logout} = useContext(AuthContext);

  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const [post, setPost] = useState(null);
  const [vision, setvision] = useState(null);
  const [require, setrequire] = useState(null);
  const [email, setemail] = useState(null);
  const [lookinfor, setlookinfor] = useState(null);

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 1200,
      height: 780,
      cropping: true,
    }).then((image) => {
      console.log(image);
      const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
      setImage(imageUri);
    });
  };

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 1200,
      height: 780,
      cropping: true,
    }).then((image) => {
      console.log(image);
      const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
      setImage(imageUri);
    });
  };

  const submitPost = async () => {
    const imageUrl = await uploadImage();
    console.log('Image Url: ', imageUrl);
    console.log('Post: ', post);

    firestore()
      .collection('posts', 'postts')
      .add({
        userId: user.uid,
        post: post,
        postImg: imageUrl,
        postTime: firestore.Timestamp.fromDate(new Date()),
        likes: null,
        comments: null,
        vision,
        require,
        lookinfor,
        email,
      })
      .then(() => {
        console.log('Post Added!');
        Alert.alert(
          'Post published!',
          'Your post has been published Successfully!',
        );
        setPost(null);
      })
      .catch((error) => {
        console.log(
          'Something went wrong with added post to firestore.',
          error,
        );
      });
  };

  const uploadImage = async () => {
    if (image == null) {
      return null;
    }
    const uploadUri = image;
    let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);

    // Add timestamp to File Name
    const extension = filename.split('.').pop();
    const name = filename.split('.').slice(0, -1).join('.');
    filename = name + Date.now() + '.' + extension;

    setUploading(true);
    setTransferred(0);

    const storageRef = storage().ref(`photos/${filename}`);
    const task = storageRef.putFile(uploadUri);

    // Set transferred state
    task.on('state_changed', (taskSnapshot) => {
      console.log(
        `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
      );

      setTransferred(
        Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) *
          100,
      );
    });

    try {
      await task;

      const url = await storageRef.getDownloadURL();

      setUploading(false);
      setImage(null);

      // Alert.alert(
      //   'Image uploaded!',
      //   'Your image has been uploaded to the Firebase Cloud Storage Successfully!',
      // );
      return url;
    } catch (e) {
      console.log(e);
      return null;
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {image != null ? <AddImage source={{uri: image}} /> : null}

        <FormInputt
          placeholderText="FAkt ikdach post madhe jaat aahe"
          multiline
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={post}
          onChangeText={(content) => setPost(content)}
        />
        {/* <Form /> */}
        <Text
          style={{
            marginBottom: 3,
            marginTop: 35,
            marginHorizontal: 20,
            marginVertical: 5,

            fontWeight: 'bold',
            textDecorationLine: 'underline',
          }}>
          Your Vision
        </Text>
        <TextInput
          placeholder="Enter your vision here"
          multiline={true}
          numberOfLines={4}
          keyboardType="default"
          style={{
            borderWidth: 1,
            borderColor: 'black',
            padding: 10,
            marginBottom: 3,
          }}
          value={vision}
          onChangeText={(content) => setvision(content)}
        />
        <Text
          style={{
            marginBottom: 3,
            marginHorizontal: 20,
            marginVertical: 5,
            fontWeight: 'bold',
            textDecorationLine: 'underline',
          }}>
          I Am Looking For
        </Text>
        <View>
          <SelectMultiple
            items={fruits}
            selectedItems={require}
            onSelectionsChange={setrequire}
          />
        </View>
        <Text
          style={{
            marginBottom: 3,
            marginTop: 35,
            marginHorizontal: 20,
            marginVertical: 5,
            fontWeight: 'bold',
            textDecorationLine: 'underline',
          }}>
          My Requiremnts
        </Text>
        <TextInput
          placeholder="Enter Here"
          multiline={true}
          numberOfLines={4}
          keyboardType="default"
          style={{
            borderWidth: 1,
            borderColor: 'black',
            padding: 10,
            marginBottom: 3,
          }}
          value={lookinfor}
          onChangeText={(content) => setlookinfor(content)}
        />
        <Text
          style={{
            marginBottom: 3,
            marginTop: 35,
            marginHorizontal: 20,
            marginVertical: 5,
            fontWeight: 'bold',
            textDecorationLine: 'underline',
          }}>
          Contact/Email
        </Text>
        <TextInput
          placeholder="Contacts"
          multiline={true}
          numberOfLines={4}
          keyboardType="default"
          style={{
            borderWidth: 1,
            borderColor: 'black',
            padding: 10,
            marginBottom: 3,
          }}
          value={email}
          onChangeText={(content) => setemail(content)}
        />

        {uploading ? (
          <StatusWrapper>
            <Text>{transferred} % Completed!</Text>
            <ActivityIndicator size="large" color="#0000ff" />
          </StatusWrapper>
        ) : (
          <SubmitBtn onPress={submitPost}>
            <SubmitBtnText>Post</SubmitBtnText>
          </SubmitBtn>
        )}
      </ScrollView>
      <ActionButton buttonColor="#483d8b">
        <ActionButton.Item
          buttonColor="#9b59b6"
          title="Take Photo"
          onPress={takePhotoFromCamera}>
          <Icon name="camera-outline" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="#3498db"
          title="Choose Photo"
          onPress={choosePhotoFromLibrary}>
          <Icon name="md-images-outline" style={styles.actionButtonIcon} />
        </ActionButton.Item>
      </ActionButton>
    </View>
  );
};

export default AddPostScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 5,
    flex: 1,
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
