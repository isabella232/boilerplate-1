import { useTheme } from '@react-navigation/native';
import * as React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import AuthContext from '../AuthContext';
import Background from '../shared/Background';

export default function Login() {
  const { signIn } = React.useContext(AuthContext);
  const { colors } = useTheme();

  return (
    <Background style={styles.content}>
      <TextInput
        placeholder="Username"
        style={[
          styles.input,
          { backgroundColor: colors.card, color: colors.text },
        ]}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={[
          styles.input,
          { backgroundColor: colors.card, color: colors.text },
        ]}
      />
      <Button title="Sign in" onPress={signIn} />
    </Background>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  input: {
    margin: 8,
    padding: 10,
    borderRadius: 3,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(0, 0, 0, 0.08)',
  },
});
