import { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import * as Linking from 'expo-linking';

export default function DetailScreen({ route, navigation }) {

  const [cour, setCour] = useState(false);

  const getCours = async () =>
  {
    try
    {
      const response = await fetch('https://lyoumapress.com/intelscience_api/api.php?id=' + route.params.id)
      const json = await response.json()

      setCour(json)

    }catch (error)
    {
      console.error(error);
    }
  }

  useEffect(() => {
    getCours()
  }, [])

  return (
    <ScrollView style={styles.container}>
        <View style={styles.insideContainer}>
            <Text style={{ width: 350, alignSelf: 'center', textAlign: 'center', fontSize: 18 }}>{ cour && cour.title }</Text>
            <TouchableOpacity onPress={() => {
              Linking.openURL(cour.pdf_link)
            }} style={{ backgroundColor: '#FFFFFF', alignItems: 'center' }}>
                <Icon name="download" size={40} style={{ marginTop: 20 }} color="#0FA7E8" />
                <Text style={{ color: '#0FA7E8', margin: 20, fontWeight: 'bold' }}>Télécharger</Text>
            </TouchableOpacity>
            <Image source={{ uri: cour.image_link }} style={{ height: 200, width: '100%' }} />
            <Text style={{ marginTop: 20 }}>{ cour && cour.description }</Text>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#74C004',
      height: 5000
    },
    insideContainer: {
      flex: 1,
      width: '100%',
      borderTopLeftRadius: 60,
      borderTopRightRadius: 60,
      backgroundColor: 'white',
      padding: 30,
    }
  });