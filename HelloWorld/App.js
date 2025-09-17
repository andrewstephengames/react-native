import { StyleSheet, View } from 'react-native';

import Box from './components/Box';

export default function App() {
  return (
    // <View style={{ backgroundColor: 'plum', flex: 1}}>

    // </View>
    <View style={styles.container}>
      <Box style={{backgroundColor: '#669b00'}}>Box 1</Box>
      <Box style={{backgroundColor: '#999b01'}}>Box 2</Box>
      <Box style={{backgroundColor: '#dd9b01'}}>Box 3</Box>
      <Box style={{backgroundColor: '#ff9b01'}}>Box 4</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 64,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});