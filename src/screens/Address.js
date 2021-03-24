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

export default class Address extends React.Component {
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
          <View style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 30, fontFamily: "Bold" }}>Address</Text>
            <View style={{ marginTop: 20 }}>
              {/* ที่อยู่1 */}

              <View style={style.textbox}>
                <Text style={style.title}>19/164 ซ.เวฬุวนาราม28</Text>
                <Text style={style.title}>แขวงดอนเมือง เขตดอนเมือง</Text>
                <Text style={style.title}>กรุงเทพมหานคร 10210</Text>
              </View> 
              <View
                style={{
                  marginTop: 10,
                  width: "100%",
                  height: 1,
                  backgroundColor: "#E3E4E4",
                  marginBottom: 10,
                }}
              />
              {/* ปุ่มเพิ่มที่อยู่ */}
              <TouchableOpacity>
                <View style={style.button}>
                  <Icon
                    name="pencil-outline"
                    color="#FFFFFF"
                    size={30}
                    style={{ alignSelf: "center" }}
                  />
                  <Text
                    style={{
                      color: "#FFFFFF",
                      marginLeft: 10,
                      fontFamily: "Regular",
                      fontSize: 16,
                      alignSelf: "center",
                    }}
                  >
                    แก้ไขที่อยู่
                  </Text>
                </View>
              </TouchableOpacity>
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
    fontFamily: "Regular",
    color: "#000000",
  },
  button: {
    flexDirection:"row",
    backgroundColor: "#000000",
    width: "100%",
    borderRadius: 0,
    padding: 5,
    height: 50,
    alignSelf: "flex-end",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 10,
  },
  textbox: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    borderRadius: 0,
    padding: 5,
    elevation: 2,
    padding: 10
    
  }
});
