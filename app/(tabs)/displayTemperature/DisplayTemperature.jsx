import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {styles} from './DisplayTemperature.style'

export function DisplayTemperature({temperature, unit}) {
  return (
    <View>
      <Text style={styles.temperatureText}>{temperature} {unit}</Text>
    </View>
  );
}
