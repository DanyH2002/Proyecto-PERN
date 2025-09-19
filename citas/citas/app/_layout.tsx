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
      fontSize: 30,
      fontWeight: '600',
      textAlign: 'center',
      marginTop: 30
    },
    entrada: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    titulos: {
      fontSize: 20,
      fontWeight: '400',
      textAlign: 'center',
      marginTop: 20
    }
  })
  
  // const []
  let text = "hola";


  return (
    <>
      <SafeAreaView>
        <Text style={styles.titulo}>Hola Mundo</Text>
        {/* <Button title='Mostrar'>Holis</Button> */}
        <Text style={styles.titulos}>Servicio</Text>
        <TextInput style={styles.entrada} placeholder='Nombre derl servicio'></TextInput>
        <Text style={styles.titulos}>Paciente</Text>
        <TextInput style={styles.entrada} placeholder='Nombre del paciente'></TextInput>
        <Pressable onPress={()=>console.log('llega')}>
          <Text>{text}</Text>
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
