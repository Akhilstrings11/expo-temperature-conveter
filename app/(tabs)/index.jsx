import { Text, View, ImageBackground } from "react-native";
import React, { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { sty } from "./Index.style";
import hotImage from "./assets/hot.png";
import { Input } from "./inputs/Input";
import { DisplayTemperature } from "./displayTemperature/DisplayTemperature";
import {
  UNITS,
  convertTemperatureTo,
  getOppositeUnit,
} from "../../utils/temperature";

export default function HomeScreen() {
  const [inputValue, setInputValue] = useState(0);
  const [currenrUnit, steCurrentUnit] = useState("°C");
  const oppositeUnit = getOppositeUnit(currenrUnit);

  return (
    <ImageBackground source={hotImage} style={sty.bgImg}>
      <SafeAreaProvider>
        <SafeAreaView style={sty.root}>
          <View style={sty.workSpace}>
            <DisplayTemperature
              unit={oppositeUnit}
              temperature={convertTemperatureTo(inputValue, oppositeUnit)}
            />
            <Input
              unit={currenrUnit}
              onChange={setInputValue}
              defaultValue={0}
            />
            <Text>Button</Text>
            <Text>Naveen</Text>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
