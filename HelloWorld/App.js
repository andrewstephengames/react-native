import React, { useState } from 'react';
import {View, Text, Image, Button, Pressable, Modal, StatusBar, ActivityIndicator, Alert} from 'react-native';
import Greet from './components/Greet';

const logoImg = require('./assets/adaptive-icon.png');

export function TestPressable() {
  const [bgColor, setBgColor] = useState('white');
  return (
    <View style={{flex: 1, backgroundColor: '#fff', padding: 60}}>
      <Button title="Press" onPress={() => alert('Button Pressed!')} color='midnightblue'/>
      <Pressable onPress={() => alert('Image Pressed!')}>
        <Image source={logoImg} style={{width: 100, height: 100, marginTop: 20}} /> 
      </Pressable>
      <Pressable onPressIn={() => setBgColor('gray')} onLongPress={() => setBgColor('brown')} onPressOut={() => setBgColor('white')} onPress={() => alert('Text Pressed!')}>
        <Text style={{fontSize: 24, marginTop: 20, backgroundColor: `${bgColor}`}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.0
        </Text>
      </Pressable>
    </View>
  );
}

export function TestModal() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{flex: 1, backgroundColor: '#fff', padding: 60}}>
      <Button 
        title="Press"
        onPress={() => setModalVisible(true)}
        color='midnightblue'
      />
      <Modal 
        visible={modalVisible}
        animationType='slide'
        presentationStyle='pageSheet' //ios only
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{flex: 1, backgroundColor: '#fff', padding: 60}}>
          <Text>Modal content</Text>
          <Button title='Close' color='midnightblue' onPress={() => setModalVisible(false)}/>
        </View>
      </Modal>
    </View>
  );
}

export function TestStatus() {
  const [statusHidden, setStatusHidden] = useState(false);
  return (
    <Pressable onPressIn={() => setStatusHidden(true)} onPressOut={() => setStatusHidden(false)}>
      <StatusBar backgroundColor="lightgreen" barStyle="dark-content" hidden={statusHidden}/>
    </Pressable>
  );
}

export function TestActivity() {
  return (
    <View style={{flex: 1, backgroundColor: '#fff', padding: 60}}>
      <ActivityIndicator/>
      <ActivityIndicator size="large" color="midnightblue" animating={true}/>
    </View>

  );
}

export function TestAlert() {
  return (
    <View style={{flex: 1, backgroundColor: '#fff', padding: 60}}>
      <Button title="Alert1" onPress={() => Alert.alert('Title', 'Message', [{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'}, {text: 'OK', onPress: () => console.log('OK Pressed')}], {cancelable: true})} color='midnightblue'/>      
      <Button title="Alert2" onPress={() => Alert.alert('Title', 'Message', [{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'}, {text: 'OK', onPress: () => console.log('OK Pressed')}], {cancelable: true})} color='midnightblue'/>      
      <Button title="Alert3" onPress={() => Alert.alert('Title', 'Message', [{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'}, {text: 'OK', onPress: () => console.log('OK Pressed')}], {cancelable: true})} color='midnightblue'/>      
    </View>
  );
}

export default function App() {
  return (
    // <TestPressable />
    // <TestModal />
    // <TestStatus />
    // <TestActivity />
    // <TestAlert />
    <View style={{flex: 1, backgroundColor: '#fff', padding: 60}}>
      <Greet name="Alice" />
      <Greet name="Bob" />
    </View>
  );
}