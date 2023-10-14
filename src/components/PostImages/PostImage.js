import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function PostImage({ title, date, url, explanation }) {
  const { navigate } = useNavigation();

  const handleViewPress = () => {
    navigate("Details", { date, title, url, explanation });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <TouchableOpacity onPress={handleViewPress} style={styles.button}>
        <Text style={styles.textButton}>View</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(18,39,113,255)",
    borderRadius: 20,
    marginBottom: 12,
    padding: 16,
  },

  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 12,
  },

  date: {
    color: "#fff",
  },

  button: {
    alignItems: "flex-end",
  },

  textButton: {
    color: "#fff",
  },
});
