import {View, Text, StyleSheet, StatusBar} from 'react-native';

export default function App() {
  return(
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={[styles.box, styles.lightblueBg]}>
        <Text>Lightblue box!</Text>
      </View>
      <View style={[styles.box, styles.lightgreenBg]}>
        <Text>Lightgreen box!</Text>
      </View>
      <Text style={styles.title}>Text</Text>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a8fff',
    padding: 60,
  },
  box: {
    width: 250,
    height: 250,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 5
  },
  boxShadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 10
  },
  lightblueBg: {
    backgroundColor: 'lightblue',
  },
  lightgreenBg: {
    backgroundColor: 'lightgreen',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  }
});