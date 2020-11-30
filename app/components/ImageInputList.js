import { View, StyleSheet } from "react-native";
import React from "react";

import ImageInput from "./ImageInput";

function ImageInputList({ imageUris = [], onRemoveImage, onAddImage }) {
  return (
    <View style={styles.container}>
      {imageUris.map((uri) => (
        <View style={styles.image} key={uri}>
          <ImageInput imageUri={uri} onChangeImage={onRemoveImage} />
        </View>
      ))}
      <ImageInput onChangeImage={onAddImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
  },
});
export default ImageInputList;
