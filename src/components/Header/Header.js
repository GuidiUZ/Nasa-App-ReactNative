import { View, Text, Image, StyleSheet } from "react-native";

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Text style={styles.title}>Explore</Text>
            </View>
            <View style={styles.rigthContainer}>
                <Image style={styles.logoImage} source={require('../../../assets/nasa-logo.png')}/>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    title:{
        fontSize: 20,
        color: '#fff'
    },

    logoImage: {
        width: 60,
        height: 60,
    },

    leftContainer: {
        flex: 1,
        alignItems: "flex-start",
    },

    rigthContainer: {
        flex: 1,
        alignItems: "flex-end",
    }

});