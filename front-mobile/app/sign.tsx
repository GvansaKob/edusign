import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function SignScreen() {
  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSign = () => {
    router.push({
      pathname: '/signature',
      params: {
        firstName,
        lastName,
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entrez vos informations</Text>

      <TextInput
        placeholder="Prénom"
        placeholderTextColor="#8888"
        style={styles.input}
        value={firstName}
        onChangeText={setFirstName}
      />

      <TextInput
        placeholder="Nom"
        placeholderTextColor="#8888"
        style={styles.input}
        value={lastName}
        onChangeText={setLastName}
      />

      <TouchableOpacity style={styles.button} onPress={handleSign}>
        <Text style={styles.buttonText}>Signer</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 40,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 20,
    fontSize: 16,
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
  },
  button: {
    backgroundColor: '#6200EE',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
