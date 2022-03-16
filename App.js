import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from 'react-native'

export default function App() {
  const [item, setItem] = useState('')
  const [history, setHistory] = useState([])

  const addToList = () => {
    setHistory([...history, { key: `${item}` }])
    setItem('')
  }

  const clearList = () => {
    setHistory('')
    setItem('')
  }

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <TextInput
          style={{ width: 200, borderColor: 'gray', borderWidth: 1 }}
          value={String(item)}
          onChangeText={(text) => setItem(text)}
          //keyboardType="numeric"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title=" ADD " onPress={addToList} />
        <Button title=" CLEAR " onPress={clearList} />
      </View>
      <View style={styles.historyContainer}>
        <Text style={{ fontSize: 18 }}>History</Text>
        <FlatList
          data={history}
          renderItem={({ item }) => (
            <Text style={{ fontSize: 18 }}>{item.key}</Text>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    width: 150,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    padding: 20,
  },
  historyContainer: {
    flex: 4,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 30,
  },
})
