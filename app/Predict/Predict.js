import React, { PureComponent } from "react";
import { FlatList, View } from "react-native";

import PredictItem from "./Predict.Item";
import styles from "./Predict.styles";

export default class Predict extends PureComponent {
  _keyExtractor = (item, index) => item;
  render() {
    const { words, onPress } = this.props;
    return words.length > 0 && (
      <View style={styles.container}>
        <FlatList
          horizontal
          data={words}
          showsHorizontalScrollIndicator={false}
          keyExtractor={this._keyExtractor}
          renderItem={({ item }) => (
            <PredictItem onPress={onPress}>{item}</PredictItem>
          )}
        />
      </View>
    );
  }
}

Predict.defaultProps = {
  words: []
};
