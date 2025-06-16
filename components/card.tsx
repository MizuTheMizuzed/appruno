import { StyleSheet, View, Text } from "react-native"

export default function card(props:{texto:string}){
    return(
        <View style = {styles.card}>
            <Text style= {styles.cardText}>{props.texto}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'lightblue',
        padding: 20,
        margin: 18, 
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 20,
        borderColor: '#ccc'
    },
    cardText: {
        fontSize: 16,
        color: '#333', 
    },
})
