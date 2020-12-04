import React from "react";
import { ScrollView, Text, StyleSheet, Image, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Header from "../components/Header";
import DATA from "../utils/Data";

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
  return (
    <View>
      <ScrollView>
        <Text style={{ textAlign: "center" }}>
          {item.trending ? <Title1 /> : <Title2 />}
        </Text>
        <Picture image={item.image} />
        <Text style={{ textAlign: "center", padding: 10 }}>{item.body}</Text>
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
          }}
          placeholderTextColor="gray"
          clearTextOnFocus={true}
          placeholder="Comment"
        />
      </ScrollView>
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
