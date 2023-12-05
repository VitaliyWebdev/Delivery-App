import SearchLoop from "@src/assets/icons/SearchLoop";
import React, { useRef, useState } from "react";
import { Animated, TextInput, TouchableOpacity, View } from "react-native";
import s from "./styles";
import { screenWidth } from "@constants/dimensions";

const INPUT_WIDTH = screenWidth * 0.6;

const ExpandableInput = () => {
  const [expanded, setExpanded] = useState(false);
  const inputWidth = useRef(new Animated.Value(0)).current;

  const animateInputWidth = (value, callback = () => {}) => {
    Animated.timing(inputWidth, {
      toValue: value,
      duration: 300,
      useNativeDriver: false,
    }).start(callback);
  };

  const handleSearchIconClick = () => {
    if (expanded) {
      animateInputWidth(0, () => setExpanded(false));
      return;
    }

    setExpanded(true);

    animateInputWidth(INPUT_WIDTH);
  };

  return (
    <View style={[s.container, expanded && s.expandedContainer]}>
      <TouchableOpacity onPress={handleSearchIconClick}>
        <SearchLoop />
      </TouchableOpacity>
      <Animated.View style={[s.inputContainer, { width: inputWidth }]}>
        {expanded && (
          <TextInput
            style={s.input}
            placeholder="Search..."
            underlineColorAndroid="transparent"
          />
        )}
      </Animated.View>
    </View>
  );
};

export default ExpandableInput;
