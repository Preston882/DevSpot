import React from "react"
import {Text, StyleSheet} from "react-native"

export default ({children}) => (
    <Text style={styles.subHeader}>{children}</Text>
)
const styles = StyleSheet.create({
    subHeader: {
        fontSize: 25,
    },

})