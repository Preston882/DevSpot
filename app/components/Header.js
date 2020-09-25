import React from "react"
import {Text, StyleSheet} from "react-native"

export default ({children}) => (
    <Text style={styles.header}>{children}</Text>
)
const styles = StyleSheet.create({
    header: {
        fontSize: 40,
    },

})