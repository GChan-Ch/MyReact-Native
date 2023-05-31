import React, {useState} from 'react';
import {View, Text, Image, ScrollView, TextInput, Button, StyleSheet} from 'react-native';

// kalau foto atau gambar tidak megambil dari link caranya
// ketik source code dibawah ini
import kobo from './assets/kobo.png'
// dan dibagain source jadi = source={NamaFile}

const CoreComponent = props => {
    const [isHungry, setIsHungry] = useState(true);

  return (
    <ScrollView>
      <Text style={styles.text}>KOBO KANAERU</Text>
    {/* flexDirection: row untuk membuat baris ke samping */}
      <View style> 
        <Text style={{textAlign: 'center'}}>Created by Goldi</Text>
        <Image 
        source={kobo}
        //   source={{
        //     uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
        //   }}
          style={styles.gambar}
        />

        <Text style={styles.text}>
          I am Kobo, and I am {isHungry ? '' : 'Kenyang'}!
        </Text>
{/* ------------------------------------------------------------------------- */}
        <Button style={styles.button}
          onPress={() => {
            setIsHungry(false);
          }}
          disabled={!isHungry}
          title={isHungry ? 'tekan tombol untuk beri makan!' : 'Thank you!'}
          />

      <TextInput
        style={{
          height: 60,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="Buat permohonan ketik disini!!"
      />
    </View>

    </ScrollView>
  );
};

const Cafe = () => {
    return (
      <>
        <Cat name="Munkustrap" />
        <Cat name="Spot" />
      </>
    );
  };

  export default CoreComponent; Cafe;

  const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    button:{
        marginBottom: 1
    },
    gambar: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        width: 200, 
        height: 200
    }
  })