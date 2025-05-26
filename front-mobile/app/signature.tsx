import React, { useRef } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import SignatureScreen from 'react-native-signature-canvas';

export default function SignaturePage() {
    const ref = useRef<any>(null);


    const handleOK = (signature: string) => {
        console.log('Signature enregistrée !');
        Alert.alert('Signature capturée ✅');
    };

    const handleEmpty = () => {
        Alert.alert('Signature vide', 'Veuillez signer dans le rectangle.');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Signez ci-dessous</Text>

            <View style={styles.signatureContainer}>
                <SignatureScreen
                    ref={ref}
                    onOK={handleOK}
                    onEmpty={handleEmpty}
                    autoClear={false}
                    descriptionText=""
                    webStyle={`
            .m-signature-pad {
              box-shadow: none; border: none;
            }
            .m-signature-pad--body {
              border: 2px dashed #ccc;
              background-color: #f2f2f2;
            }
            .m-signature-pad--footer {
              display: none;
              margin: 0px;
            }
            body,html {
              width: 100%; height: 100%;
            }
            canvas {
              background-color: #f2f2f2;
              color: #6200EE;
            }
          `}
                    penColor="#6200EE"
                    backgroundColor="#f2f2f2"
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={() => ref.current?.readSignature()}>
                <Text style={styles.buttonText}>Scanner</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 60,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 22,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 20,
    },
    signatureContainer: {
        height: 300,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        overflow: 'hidden',
    },
    button: {
        marginTop: 30,
        backgroundColor: '#6200EE',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 17,
    },
});
