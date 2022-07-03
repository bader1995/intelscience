import { ScrollView, StyleSheet, Text, View } from 'react-native';
import DetailCardComponent from '../components/DetailCardComponent';
import getCours from '../api/cours';
import { useEffect, useState } from 'react';

export default function HomeScreen({ navigation }) {

  const [cours, setCours] = useState(null)

  const getCours = async () =>
  {
    try
    {
      const response = await fetch('https://lyoumapress.com/api_intelscience/index.php');
      const json = await response.json();

      setCours(json)

    } catch (error) {
      console.error(error);
    }
 }

 useEffect(() => {
  getCours()
 }, [])

  return (
    <ScrollView style={styles.container}>
        <View style={styles.insideContainer}>
            <Text style={{ alignSelf: "center", fontSize: 18, marginBottom: 20 }}>Science de la vie et de la terre</Text>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <DetailCardComponent title="La planète Terre, l’environnement et l’action humaine" onPress={() => navigation.navigate("Detail")} />
              <DetailCardComponent title="Le corps humain et la santé" onPress={() => navigation.navigate("Detail")} />
            </View>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#74C004'
  },
  insideContainer: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    minHeight: 100,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    backgroundColor: 'white',
    flexWrap: 'wrap',
    padding: 20
  }
});
