import React from "react";
import { NavigationContainer } from "./node_modules/@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Tabs from "./app/screens/Main";
import BlockButton from "./app/components/BlockButton.js";
import Login from "./app/screens/Login";
import Main from "./app/screens/Main";
import Page from "./app/screens/Page";

const Stack = createStackNavigator();

export default (title, subbody) => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Main" component={Tabs} />
      <Stack.Screen name="List" component={BlockButton} />
      <Stack.Screen name="Page" component={Page} />
    </Stack.Navigator>
  </NavigationContainer>
);
