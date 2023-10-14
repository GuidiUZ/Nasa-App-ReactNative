import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function TodaysImage({ date, title, url, explanation }) {
  const { navigate } = useNavigation();
  
  const handleViewPress = () => {
    navigate("Details", {date, title, url, explanation});
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: url }} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleViewPress}>
          <Text style={styles.textButton}>View</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2c449d",
    marginVertical: 16,
    marginHorizontal: 24,
    borderRadius: 32,
    padding: 16,
  },

  image: {
    width: "100%",
    height: 190,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "#fff",
  },

  title: {
    color: "#fff",
    fontSize: 20,
    marginVertical: 12,
    fontWeight: "bold",
  },

  date: {
    color: "#fff",
    fontSize: 16,
  },

  buttonContainer: {
    alignItems: "flex-end",
  },

  textButton: {
    color: "#fff",
    fontSize: 16,
  },
});
