import ImagePicker from 'react-native-image-picker';

var options = {
  title: 'Select Avatar',
  storageOptions: {
    skipBackup: true, 
    path: 'images'
  }
};




let pick = (cb) => {

     ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
              console.log('User cancelled image picker');
            }
            else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            }
            else {
              let source = { uri: response.data };
              cb(source);
            }
          });

}

module.exports = pick;