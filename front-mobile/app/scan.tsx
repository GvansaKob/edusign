import { useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";

export default function ScanScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState<string | null>(null);

  const handleBarCodeScanned = ({ data }: { data: string }) => {
    setScanned(true);
    setScannedData(data);
    alert(`QR Code scanné : ${data}`);
  };

  if (!permission) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Chargement des permissions...</Text>
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Nous avons besoin de votre autorisation pour utiliser la caméra.</Text>
        <Button title="Autoriser" onPress={requestPermission} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {!scanned ? (
        <CameraView
          style={styles.camera}
          onBarcodeScanned={handleBarCodeScanned}
          barcodeScannerSettings={{ barcodeTypes: ["qr"] }}
        />
      ) : (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Code scanné : {scannedData}</Text>
          <TouchableOpacity style={styles.button} onPress={() => setScanned(false)}>
            <Text style={styles.buttonText}>Scanner à nouveau</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  camera: {
    flex: 1,
  },
  resultContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF7ED",
    padding: 20,
  },
  resultText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#FF7F50",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  text: {
    fontSize: 18,
    padding: 20,
    textAlign: "center",
    color: "#fff",
  },
});
