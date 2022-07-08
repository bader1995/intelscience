import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default function DetailCardComponent({ onPress, title }) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress()}>
        <Text style={{ textAlign: "center"}}>{title}</Text>
        <Icon size={40} style={{ marginTop: 20 }} color="#74C004" name="rightcircleo" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: 'black',
      flex: 1,
      margin: 10,
      padding: 20,
      borderRadius: 20,
    },
});