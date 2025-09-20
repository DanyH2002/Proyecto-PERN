import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { Text, Button, TextInput, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const styles = StyleSheet.create({
    titulo: {
      fontSize: 32,
      fontWeight: '700',
      textAlign: 'center',
      marginBottom: 30,
      color: 'dark',
    },
    entrada: {
      height: 45,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#cccccc',
      paddingHorizontal: 12,
      backgroundColor: '#ffffff',
      marginBottom: 20,
    },
    titulos: {
      fontSize: 18,
      fontWeight: '500',
      marginBottom: 8,
    },
    boton: {
      backgroundColor: '#007AFF',
      paddingVertical: 12,
      borderRadius: 8,
      alignItems: 'center',
      marginTop: 10,
    },
    botonTexto: {
      color: '#ffffff',
      fontSize: 18,
      fontWeight: '600',
    }
  })

  const [servicio, setServicio] = useState('');
  const [paciente, setPaciente] = useState('');

  let text = "hola";

  return (
    <>
      <SafeAreaView>
        <Text style={styles.titulo}>Hola Mundo</Text>
        {/* <Button title='Mostrar'>Holis</Button> */}
        <Text style={styles.titulos}>Servicio</Text>
        <TextInput
          style={styles.entrada}
          placeholder='Nombre derl servicio'
          value={servicio}
          onChangeText={setServicio}></TextInput>
        <Text style={styles.titulos}>Paciente</Text>
        <TextInput
          style={styles.entrada}
          placeholder='Nombre del paciente'
          value={paciente}
          onChangeText={setPaciente}></TextInput>
        <Pressable 
        style={styles.boton} 
        onPress={() => console.log("Servicio: " + servicio + " Paciente: " + paciente)}>
          <Text style={styles.botonTexto}>{text}</Text>
        </Pressable>
      </SafeAreaView>
    </>

    // <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
    //   <Stack>
    //     <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    //     <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
    //   </Stack>
    //   <StatusBar style="auto" />
    // </ThemeProvider>
  );
}
