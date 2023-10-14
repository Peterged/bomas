import React, { useState, useEffect } from 'react';
import { TextInput, Button, View, Text, Pressable,  } from 'react-native';
import Touchable from './Touchable';
import { useNavigation } from '@react-navigation/native';
import { FlashMessage } from 'react-native-flash-message';


const InputWithChecking = ({ placeholder, regularExpression, onSubmit, onChange, styleInput, styleButton, styleView, buttonText, buttonDisabledStyle = {} }) => {
  const [regex, setRegex] = useState('');
  const [disabledStyle, setDisabledStyle] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);
  const navigation = useNavigation();

  const validateRegex = (Regex) => {
    const regex = regularExpression;
    return regex.test(Regex);
  };



  useEffect(() => {
    setIsDisabled(!validateRegex(regex));
    if(validateRegex(regex)){
      setDisabledStyle({opacity: 1, backgroundColor: "#3DA5FF"} || buttonDisabledStyle);
    } else {
      setDisabledStyle({backgroundColor: "#D5D5D5"} || buttonDisabledStyle);
    }
  }, [regex]);

  return (
    <View style={{ flex: 1, margin: 0, marginTop: 15 }}>
      <TextInput
        placeholder={placeholder}
        value={regex}
        onChangeText={(regex) => {
          setRegex(regex)
          try {
            onChange(regex) 
          } catch(error) {
            console.log(error);
          }
        }}
        style={styleInput}
      />

      <Touchable
          disabled={isDisabled}
          onPress={() => onSubmit()}
          style={[styleView, disabledStyle]}
      >
        <View disabled={isDisabled}>
          <Text disabled={isDisabled} style={[styleButton, {opacity: 1}]}>{buttonText}</Text>
        </View>
      </Touchable>

    </View>
  );
};

export default InputWithChecking;
