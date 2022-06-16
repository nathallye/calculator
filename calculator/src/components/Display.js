import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Display = (props) => {
  return (
    <View style={styles.display}>
      <Text style={styles.displayValue} 
        numberOfLines={1}>{props.value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  display: {
    backgroundColor: "rgba(0,0,0,0.6)",

    flex: 1, // permite o componente crescer 
    justifyContent: "center", // para trabalharmos com alinhamento em relação ao Eixo Principal/main axis(que nesse caso é a coluna/column)
    alignItems: "flex-end", // para trabalharmos no alinhamento dos elementos/flex items no eixo cruzado/cross axis(que nesse caso é no eixo da linha/row) 

    padding: 20 // espaçamento entre a borda e conteúdo
  },

  displayValue: {
    fontSize: 60, // altera o tamanho da font
    color: "#fff", // altera a cor da fonte
  }
})

export default Display;