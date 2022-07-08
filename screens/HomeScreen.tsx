import { ScrollView, StyleSheet, Text, View } from 'react-native';
import DetailCardComponent from '../components/DetailCardComponent';
import { useEffect, useState } from 'react';

export default function HomeScreen({ navigation }) {

  const [cours, setCours] = useState(null)

  const getCours = async () =>
  {
    try
    {
      const response = await fetch('https://lyoumapress.com/intelscience_api/api.php')
      const json = await response.json()

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
            <View style={{ display: 'flex', flex: 1 }}>
              {
                cours && cours.map(item => {
                  return (
                    <DetailCardComponent key={item.Id} title={item.title} onPress={() => navigation.navigate("Detail", {id: item.Id})} />
                  )
                })
              }
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
