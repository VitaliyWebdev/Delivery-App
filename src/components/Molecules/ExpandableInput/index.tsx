import SearchLoop from "@src/assets/icons/SearchLoop";
import React, { FC, useRef, useState, useEffect } from "react";
import {
  Animated,
  EmitterSubscription,
  Keyboard,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import s from "./styles";
import { screenWidth } from "@constants/dimensions";

const INPUT_WIDTH = screenWidth * 0.6;

type TExpandableInput = {
  textInputProps: TextInputProps;
};

const ExpandableInput: FC<TExpandableInput> = ({ textInputProps }) => {
  const [expanded, setExpanded] = useState(false);
  const inputWidth = useRef(new Animated.Value(0)).current;
  const inputRef = useRef<TextInput>(null); // Ref to the TextInput component

  const focusOnInput = () => inputRef.current?.focus();
  const animateInputWidth = (value: number, callback = () => {}) => {
    Animated.timing(inputWidth, {
      toValue: value,
      duration: 300,
      useNativeDriver: false,
    }).start(callback);
  };

  const handleSearchIconClick = () => {
    if (expanded) {
      animateInputWidth(0, () => setExpanded(false));
    } else {
      setExpanded(true);
      animateInputWidth(INPUT_WIDTH, () => {
        // Focus the input once the animation is complete
        focusOnInput;
      });
    }
  };

  useEffect(() => {
    // Focus the input when expanded
    if (expanded && inputRef.current) {
      focusOnInput();
    }
    let keyboardDidHideListener: EmitterSubscription | null = null;

    // Add listener for keyboard hide event
    keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      handleKeyboardHide
    );

    // Cleanup listener when component is unmounted
    return () => {
      if (keyboardDidHideListener) {
        keyboardDidHideListener.remove();
      }
    };
  }, [expanded]);

  const handleKeyboardHide = () => {
    animateInputWidth(0, () => setExpanded(false));
  };

  return (
    <View style={[s.container, expanded && s.expandedContainer]}>
      <TouchableOpacity onPress={handleSearchIconClick}>
        <SearchLoop />
      </TouchableOpacity>
      <Animated.View style={[s.inputContainer, { width: inputWidth }]}>
        {expanded && (
          <TextInput
            ref={inputRef} // Assign the ref to the TextInput
            style={s.input}
            placeholder="Search..."
            underlineColorAndroid="transparent"
            {...textInputProps}
          />
        )}
      </Animated.View>
    </View>
  );
};

export default ExpandableInput;
