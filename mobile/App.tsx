import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ButtonProps{
  text: string;
}

function Button(props: ButtonProps){
  return(
    <TouchableOpacity>
      <Text>
        {props.text}
      </Text>
    </TouchableOpacity>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>IOS App!</Text>
      <Button text="Enviar" />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    text: '#0050FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 44,
    color: '#ff00f2'
  },
});
