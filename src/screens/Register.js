import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { ScrollView } from "react-native-gesture-handler";
import { Avatar, Title, Caption, TouchableRipple } from "react-native-paper";

export default class Register extends React.Component {
  render() {
    return (
      <ScrollView style={style.container}>
        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}
          style={{
            width: "50%",
            marginTop: 50,
            marginLeft: 30,
          }}
        >
          <Image
            source={require("../images/back.png")}
            style={{
              width: 15,
              height: 15,
            }}
          />
        </TouchableOpacity>
        <View style={style.userInfoSection}>
          <View style={{ marginTop: 0 }}>
            <Text style={{ fontSize: 26, fontFamily: "Bold" }}>Register</Text>
            <View style={{ marginTop: 10, flexDirection: "column" }}>
              <View style={{ marginLeft: 10, width: "90%", }}>
                <TextInput
                  style={[style.InputRegister]}
                  placeholder="Email"
                  //placeholderTextColor="#000"
                />
              </View>
              <View style={{ marginLeft: 10, width: "90%" }}>
                <TextInput
                  style={[style.InputRegister]}
                  placeholder="Password"
                  //placeholderTextColor="#000"
                />
              </View>
              <View style={{ marginLeft: 10, width: "90%" }}>
                <TextInput
                  style={[style.InputRegister]}
                  placeholder="Confirm Password"
                  //placeholderTextColor="#000"
                />
              </View>
              <View style={{ marginLeft: 10, width: "90%" }}>
                <TextInput
                  style={[style.InputRegister]}
                  placeholder="Name"
                  //placeholderTextColor="#000"
                />
              </View>
            </View>
            <View style={{ marginTop: 50 }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Home")}
                style={[style.btnregister]}
              >
                <Text
                  style={{ textAlign: "center", color: "#FFF", fontSize: 16 }}
                >
                  SIGN UP
                </Text>
              </TouchableOpacity>
              
              <View >
                  <Text style={{ textAlign: "center", fontSize: 16 ,fontFamily:"Regular"}}>Already have an account? <Text style={{fontFamily:"Medium"}}>Sign In</Text></Text>
                  
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginTop: 5,
    marginBottom: "10%",
    paddingTop: 10,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: "Medium",
    color: "#646464",
  },
  caption: {
    fontSize: 14,
    fontFamily: "Regular",
  },
  button: {
    flexDirection: "row",
    marginBottom: 5,
    marginTop: 5,
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: 50,
    borderRadius: 10,
    padding: 5,
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 10,
  },
  InputRegister: {
    marginTop: 50,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    paddingBottom: 10,
    fontSize: 16,
    
  },
  btnregister: {
    width: "100%",
    backgroundColor: "black",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    marginTop: 40,
    marginBottom: 30,
    
  },
});
