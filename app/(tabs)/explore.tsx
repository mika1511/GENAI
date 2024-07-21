import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useState } from 'react';
import { ThemedText, } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeadphonesAlt, faMessage, faMicrophone, faMicrophoneSlash, faPhone, faRecordVinyl, faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import { scale } from 'react-native-size-matters';
export default function TabTwoScreen() {
  const [recorder, setRecorder] = useState(false);
  const [text,setText] = useState(false);
  const [speech, setSpeech] = useState(false);
  const [speaker, setSpeaker] = useState(false);
  const [mute, setMute] = useState(false);

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.profile}>
        <Image style={styles.profilePicture} source={require("./../../assets/images/profile.jpeg")} />
        <ThemedText>Racheal zane</ThemedText>
      </ThemedView>
      <ThemedView style={styles.optBox}>
        <ThemedView style={styles.Box}>
          <TouchableOpacity onPress={()=>setRecorder(!recorder)} style={{...styles.buttons, backgroundColor:recorder?"grey":"transparent"}}><FontAwesomeIcon icon={faRecordVinyl} size={25} color={'white'} />
            <ThemedText>Recorder</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setText(!text)}style={{...styles.buttons, backgroundColor:text?"grey":"transparent"}}><FontAwesomeIcon icon={faHeadphonesAlt} size={25} color={'white'} />
            <ThemedText>Speech-text</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setSpeech(!speech)}style={{...styles.buttons, backgroundColor:speech?"grey":"transparent"}}><FontAwesomeIcon icon={faMessage} size={25} color={'white'} />
            <ThemedText>Text-speech</ThemedText>
          </TouchableOpacity>
        </ThemedView>
        <ThemedView style={styles.Box}>
        <TouchableOpacity onPress={()=>setSpeaker(!speaker)}style={{...styles.buttons, backgroundColor:speaker?"grey":"transparent"}}><FontAwesomeIcon icon={faVolumeHigh} size={25} color={"white"} />
            <ThemedText>Speaker</ThemedText></TouchableOpacity>
          <TouchableOpacity style={{ ...styles.buttons, backgroundColor: "red" }}><FontAwesomeIcon style={{ transform: [{ rotate: '135deg' }] }} icon={faPhone} size={35} color={"white"} /></TouchableOpacity>
          <TouchableOpacity onPress ={()=>setMute(!mute)}style={{...styles.buttons,backgroundColor:mute?"grey":"transparent"}}><FontAwesomeIcon icon={mute? faMicrophoneSlash: faMicrophone} size={25} color={"white"} />
            <ThemedText>Mute</ThemedText></TouchableOpacity>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around"
  },

  buttons: {
    alignItems: "center",
    justifyContent: "center",
    width: 82,
    height: 80,
    borderRadius: 80,

  },

  optBox: {
    display: 'flex',
    width: "80%",
    gap: scale(50),
    alignSelf: "center"
  },

  Box: {
    alignContent: 'stretch',
    flexDirection: 'row',
    height: 'auto',
    alignItems: 'center',
    justifyContent: "space-between",

  },

  profile: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,


  },
  profilePicture: {
    height: 90,
    width: 90,
    borderRadius: 80,
  },
});
