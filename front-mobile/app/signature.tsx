import { useLocalSearchParams, useRouter } from 'expo-router';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { API_BASE_URL } from '../config';

export default function SignatureScreen() {
  const router = useRouter();
  const { firstName, lastName } = useLocalSearchParams();

  const handleOK = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/signature`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: 1,
          seance_id: 2,
          statut: true,
          date: new Date().toISOString(),
          // signature: '...', // tu peux l'ajouter plus tard
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        console.error('Erreur serveur :', error);
        Alert.alert('Erreur', 'Impossible d’enregistrer la signature');
        return;
      }

      const data = await response.json();
      console.log('Réponse du backend :', data);
      Alert.alert('Signature envoyée ✅');
      router.push('/scan');

    } catch (err) {
      console.error('Erreur de réseau :', err);
      Alert.alert('Erreur réseau', 'Serveur inaccessible');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bonjour {firstName} {lastName} 👋</Text>
      <TouchableOpacity style={styles.button} onPress={handleOK}>
        <Text style={styles.buttonText}>Envoyer signature</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF'
  },
  text: {
    fontSize: 20, marginBottom: 30
  },
  button: {
    backgroundColor: '#6200EE',
    padding: 16,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff', fontWeight: 'bold'
  }
});
