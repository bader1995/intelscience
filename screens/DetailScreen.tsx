import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import ForstJPEG from '../assets/forest.jpeg';

export default function DetailScreen() {
  return (
    <ScrollView style={styles.container}>
        <View style={styles.insideContainer}>
            <Text style={{ width: 350, alignSelf: 'center', textAlign: 'center', fontSize: 18 }}>La planète Terre, l'environnement et l'action humaine</Text>
            <TouchableOpacity style={{ backgroundColor: '#FFFFFF', alignItems: 'center' }}>
                <Icon name="download" size={40} style={{ marginTop: 20 }} color="#0FA7E8" />
                <Text style={{ color: '#0FA7E8', margin: 20, fontWeight: 'bold' }}>Télécharger</Text>
            </TouchableOpacity>
            <Image source={ForstJPEG} style={{ height: 200, width: '100%' }} />
            <Text style={{ marginTop: 20 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget tempor eros. Fusce dictum rhoncus lectus ac accumsan. Integer fermentum vel orci sit amet imperdiet. Vivamus velit augue, mollis ut pulvinar non, porttitor nec justo. Aliquam in sollicitudin lorem, eu iaculis ante. Nam sollicitudin semper orci, a maximus leo ullamcorper a. Fusce porttitor a velit et tempus. Nullam augue nisi, efficitur sit amet venenatis sollicitudin, ultrices in purus.
            Duis augue massa, mollis quis auctor id, vulputate nec mi. Phasellus a pulvinar lectus. Nullam sapien dolor, fringilla quis tempor vel, rutrum ut purus. In ut molestie nisl. Nulla faucibus ante arcu, eget pellentesque mauris tincidunt euismod. Vestibulum dignissim, sem in ornare lobortis, tortor odio congue erat, sed semper velit nisi in orci. Nunc aliquam et lorem congue condimentum. Sed nec nulla tempor, iaculis leo ut, sollicitudin purus. Proin nec risus at nisi aliquam ornare condimentum sit amet justo. Praesent id diam laoreet nulla pretium mollis. Curabitur et nulla et mi facilisis eleifend non id lacus. Fusce enim odio, suscipit nec neque nec, commodo venenatis mi. Cras sodales, enim sit amet interdum mattis, erat est efficitur arcu, nec elementum ligula est in mauris. Morbi rutrum est sapien, consequat rhoncus nulla iaculis at. Cras non nisi nisi. Vivamus viverra ipsum sit amet gravida vehicula.
            </Text>
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
      padding: 30
    }
  });