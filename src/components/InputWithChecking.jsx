import React, { useState, useEffect } from 'react';
import { TextInput, Button, View } from 'react-native';
import Touchable from './Touchable';


const InputWithChecking = ({ regularExpression, styleInput, styleButton }) => {
  const [email, setEmail] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  const validateEmail = (email) => {
    const regex = regularExpression;
    return regex.test(email);
  };

  useEffect(() => {
    setIsDisabled(!validateEmail(email));
  }, [email]);

  return (
    <View style={{ flex: 1, margin: 0, marginTop: 15 }}>
      <TextInput
        placeholder="Enter your IP"
        value={email}
        onChangeText={(email) => setEmail(email)}
        style={styleInput}
      />

      {/* <Touchable style={}>
        <Text style={{ flex: 1, fontSize: 18 }}>Submit</Text>
      </Touchable> */}
      <Button
        title="Submit"
        disabled={isDisabled}
        onPress={() => {
          // Do something with the email address
        }}
        style={styleButton}
      />
    </View>
  );
};

export default InputWithChecking;
