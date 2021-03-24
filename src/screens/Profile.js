import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { ScrollView } from "react-native-gesture-handler";
import { Avatar, Title, Caption, TouchableRipple } from "react-native-paper";

export default class Profile extends React.Component {
  render() {
    return (
      <SafeAreaView style={style.container}>
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
          <View style={{ marginTop:0 }}>
            <Text style={{fontSize: 26, fontFamily:"Bold"}}>My Account</Text>
            <View style={{ marginTop: 20, flexDirection: "row" }}>
              <Avatar.Image
                source={require("../images/avatar.png")}
                size={60}
              />
              <View style={{marginLeft: 20}}>
                <Title style={style.title}>Chaiyapol Mahajan</Title>
                <Caption style={style.caption}>@titlestar</Caption>
              </View>
            </View>
            <View style={{marginTop: 50}}>

              {/* ดูรถเข็น */}
            <TouchableOpacity>
              <View style={style.button}>
                <Icon name="cart-outline" color="#000" size={30} style={{alignSelf: "center",}}/>
                <Text
                  style={{
                    color: "#000",
                    marginLeft: 10,
                    fontFamily: "Regular",
                    fontSize: 20,
                    alignSelf: "center",
                  }}
                >
                  My Cart
                </Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                marginTop: 10,
                width: "100%",
                height: 1,
                backgroundColor: "#E3E4E4",
                marginBottom: 10,
              }}
            />
            {/* จัดการที่อยู่ */}
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Address")}>
              <View style={style.button}>
                <Icon name="map-marker-radius" color="#000" size={30} style={{alignSelf: "center",}}/>
                <Text
                  style={{
                    color: "#000",
                    marginLeft: 10,
                    fontFamily: "Regular",
                    fontSize: 20,
                    alignSelf: "center",
                  }}
                >
                  Address
                </Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                marginTop: 10,
                width: "100%",
                height: 1,
                backgroundColor: "#E3E4E4",
                marginBottom: 10,
              }}
            />
            {/* ปุ่มล็อคเอาท์ */}
            <TouchableOpacity>
              <View style={style.button}>
                <Icon name="logout-variant" color="#000" size={30} style={{alignSelf: "center",}}/>
                <Text
                  style={{
                    color: "#000",
                    marginLeft: 10,
                    fontFamily: "Regular",
                    fontSize: 20,
                    alignSelf: "center",
                  }}
                >
                  Sign Out
                </Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                marginTop: 10,
                width: "100%",
                height: 1,
                backgroundColor: "#E3E4E4",
                marginBottom: 10,
              }}
            />
            </View>
          </View>
        </View>
      </SafeAreaView>
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
});
