import RNFetchBlob from 'react-native-fetch-blob';

let upload = (data) => {

	return RNFetchBlob.fetch('POST', 'http://www.example.com/upload-form', {
    Authorization : "Bearer access-token",
    otherHeader : "foo",
    'Content-Type' : 'multipart/form-data',
  }, [
    // append field data from file path
    {
      name : 'avatar',
      filename : 'avatar.png',
      // Change BASE64 encoded data to a file path with prefix `RNFetchBlob-file://`.
      // Or simply wrap the file path with RNFetchBlob.wrap().
      data: RNFetchBlob.wrap(PATH_TO_THE_FILE)
    }
  ]).then((resp) => {
    console.log(resp);
  }).catch((err) => {
    console.log(err);
  });

}

module.exports = upload;