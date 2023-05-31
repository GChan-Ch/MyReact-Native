import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class DesainTampilan extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>DesainTampilan</Text>
        <View style={styles.garis} />
        
        {/* isi */}
      <View>
            <Text style={styles.isi}>INFOKAN LOKER MASSE!! (Vertikal)</Text>
            <View style={styles.flexVertikal}>
                <View style={styles.kotakMerah}/>
                <View style={styles.kotakBiru}/>
                <View style={styles.kotakKuning}/>
            </View>

            <Text style={styles.isi}>flex Direction Column (Horisontal)</Text>
            <View>
                <View style={styles.kotakMerah}/>
                <View style={styles.kotakBiru}/>
                <View style={styles.kotakKuning}/>
            </View>

            <Text style={styles.isi}>Justify Content</Text>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <View style={styles.kotakMerah}/>
                <View style={styles.kotakBiru}/>
                <View style={styles.kotakKuning}/>
            </View>

            <Text style={styles.isi}>Justify Content space-between</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={styles.kotakMerah}/>
                <View style={styles.kotakBiru}/>
                <View style={styles.kotakKuning}/>
            </View>
      </View>
      </View>
    ) 
  }
}

const styles = StyleSheet.create({
    container : { padding: 30},
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    garis: {
        borderBottomWidth: 1,
        marginTop: 10
    },
    isi: {
        marginTop: 20,
        textAlign: 'center'
    },
    flexVertikal: {
        flexDirection: 'row'
    },
    kotakBiru: {
        width: 50,
        height: 50,
        backgroundColor: 'blue'
    },
    kotakKuning: {
        width: 50,
        height: 30,
        backgroundColor: 'yellow'
    },
    kotakMerah: {
        width: 50,
        height: 30,
        backgroundColor: 'red'
    }
})