import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import {useRoute} from '@react-navigation/native'
import Header from "../../components/Header/Header";

const Details = () => {
    const { params: {title, url, explanation, date}} = useRoute();
    return (
        <View style={styles.container}>
            <Header/>
            <View style={styles.content}>
                <Image style={styles.image} source={{uri: url}} />
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.date}>{date}</Text>
                <ScrollView style={styles.explanationContainer}>
                    <Text style={styles.textExplanation}>
                        {explanation}
                    </Text>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: 'rgba(7,26,93,255)'
    },
    content: {
        backgroundColor: "#2c449d",
        borderRadius: 32,
        marginVertical: 24,
        padding: 16,
        flex: 1,
    },

    image: {
        width: "100%",
        height: "50%",
        borderColor: "#fff",
        borderRadius: 32,
        borderWidth: 2,
        marginBottom: 16
    }, 

    title: {
        color: "#fff",
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 16,
    },

    date: {
        color: "#fff",
        fontSize: 16
    },

    explanationContainer: {
        marginVertical: 16,
        
    },

    textExplanation: {
        color: "#fff",
        fontSize: 16
    }
})

export default Details;