import Header from "../../components/Header/Header";
import { View, StyleSheet } from "react-native";
import fetchApi from "../../utils/fetch";
import { useEffect, useState } from "react";
import TodaysImage from "../../components/TodaysImage/TodaysImage";
import format from "date-fns/format";
import { sub } from 'date-fns'
import LastFiveDaysImages from "../../components/LastFiveDaysImages/LastFiveDaysImages";

export default function Home() {
  const [todaysImage, setTodaysImage] = useState();
  const [lastFiveDaysImages, setLastFiveDaysImages] = useState([]);

  useEffect(() => {
    const loadImageToday = async () => {
      try {
        const todaysImageResponse = await fetchApi();
        setTodaysImage(todaysImageResponse);
      } catch (error) {
        console.error(error);
        setTodaysImage({});
      }
    };

    const loadLast5DaysImages = async () => {
      try {
        const date = new Date();
        const todaysDate = format(date, "yyyy-MM-dd");
        const fiveDaysAgoDate = format(sub(date, { days: 5 }), "yyyy-MM-dd"); 

        const lastFiveDaysImagesResponse = await fetchApi(
          `&start_date=${fiveDaysAgoDate}&end_date=${todaysDate}`
        );
        setLastFiveDaysImages(lastFiveDaysImagesResponse);
      } catch (error) {
        console.error(error);
      }
    };

    loadImageToday().catch(null);
    loadLast5DaysImages().catch(null);
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <TodaysImage {...todaysImage} />
      <LastFiveDaysImages postImages={lastFiveDaysImages} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(7,26,93,255)'
  },
});
