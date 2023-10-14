import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import Routes from './src/routes/Routes';

export default function App() {
  return (
    <View style={styles.container}>
      <Routes/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: 'rgba(7,26,93,255)',
  },
});
