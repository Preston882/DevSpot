import React, { useState, useRef } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  Image,
  View,
  FlatList,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Header from "../components/Header";
import DATA from "../utils/Data";
import { LinearGradient } from "expo-linear-gradient";

const Picture = ({ image }) => (
  <Image
    style={styles.Touchable}
    source={{
      uri: image,
    }}
  />
);

function Page({ route }) {
  const Title1 = ({}) => (
    <Header style={styles.trending}>{item.title}🔥</Header>
  );
  const Title2 = ({}) => <Header>{item.title}</Header>;
  const item = DATA.find((item) => item.id === route.params.id);
  const [comments, setComments] = useState([""]);
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ height: "50%" }}>
        <Text style={{ textAlign: "center" }}>
          {item.trending ? <Title1 /> : <Title2 />}
        </Text>
        <Picture image={item.image} />
        <LinearGradient
          colors={[
            "#00FFFF",
            "#17C8FF",
            "#329BFF",
            "#4C64FF",
            "#6536FF",
            "#8000FF",
          ]}
          start={{ x: 0.0, y: 1.0 }}
          end={{ x: 1.0, y: 1.0 }}
          style={{ margin: 10, borderRadius: 10 }}
        >
          <Text
            style={{
              textAlign: "center",
              padding: 10,
              margin: 7,
              backgroundColor: "#fff",
              borderRadius: 10,
            }}
          >
            {item.body}
          </Text>
        </LinearGradient>
        {/* <Text>
          {comments.map((comment) => comment)}
        </Text> */}
      </ScrollView>
      <View>
        <FlatList
          data={comments}
          renderItem={({ item }) => (
            <View>
              <Text style={{ color: "#000" }}>{item}</Text>
            </View>
          )}
          keyExtractor={(index) => index}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
        }}
        placeholderTextColor="gray"
        clearTextOnFocus={true}
        placeholder="Comment"
        onSubmitEditing={(event) => {
          let newComment = event.nativeEvent.text;
          let oldComments = comments;
          let newComments = [...oldComments, newComment];
          setComments(newComments);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Touchable: {
    width: 300,
    height: 300,
    alignSelf: "center",
  },
  trending: {
    color: "#fc5603",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: 25,
    marginLeft: 9,
  },
});

export default Page;
