import React, { useState } from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

function SignUp() {
  const [focused, setFocused] = useState(false);
  const height = Dimensions.get("window").height;
  return (
    <ScrollView style={{ backgroundColor: "white", height: height }}>
      <View
        style={{
          padding: 10 * 2,
        }}
      >
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 30,
              color: "#1F41BB",
              //   fontFamily: Font["poppins-bold"],
              marginVertical: 10 * 3,
            }}
          >
            Create account
          </Text>
          <Text
            style={{
              //   fontFamily: Font["poppins-regular"],
              fontSize: 14,
              maxWidth: "80%",
              textAlign: "center",
            }}
          >
            Create an account so you can explore all the existing jobs
          </Text>
        </View>
        <View
          style={{
            marginVertical: 10 * 3,
          }}
        >
          <TextInput
            // onFocus={() => setFocused(true)}
            // onBlur={() => setFocused(false)}
            placeholder="Email"
            showSoftInputOnFocus={false}
            placeholderTextColor={"#626262"}
            style={[
              {
                // fontFamily: Font["poppins-regular"],
                fontSize: 14,
                padding: 10 * 2,
                backgroundColor: "#f1f4ff",
                borderRadius: 10,
                marginVertical: 10,
              },
              focused && {
                borderWidth: 3,
                borderColor: "#1F41BB",
                shadowOffset: { width: 4, height: 10 },
                shadowColor: "#1F41BB",
                shadowOpacity: 0.2,
                shadowRadius: 10,
              },
            ]}
          />
          <TextInput
            // onFocus={() => setFocused(true)}
            // onBlur={() => setFocused(false)}
            placeholder="Password"
            showSoftInputOnFocus={false}
            secureTextEntry={true}
            placeholderTextColor={"#626262"}
            style={[
              {
                // fontFamily: Font["poppins-regular"],
                fontSize: 14,
                padding: 10 * 2,
                backgroundColor: "#f1f4ff",
                borderRadius: 10,
                marginVertical: 10,
              },
              focused && {
                borderWidth: 3,
                borderColor: "#1F41BB",
                shadowOffset: { width: 4, height: 10 },
                shadowColor: "#1F41BB",
                shadowOpacity: 0.2,
                shadowRadius: 10,
              },
            ]}
          />
          <TextInput
            // onFocus={() => setFocused(true)}
            // onBlur={() => setFocused(false)}
            placeholder="Confirm Password"
            showSoftInputOnFocus={false}
            secureTextEntry={true}
            placeholderTextColor={"#626262"}
            style={[
              {
                // fontFamily: Font["poppins-regular"],
                fontSize: 14,
                padding: 10 * 2,
                backgroundColor: "#f1f4ff",
                borderRadius: 10,
                marginVertical: 10,
              },
              focused && {
                borderWidth: 3,
                borderColor: "#1F41BB",
                shadowOffset: { width: 4, height: 10 },
                shadowColor: "#1F41BB",
                shadowOpacity: 0.2,
                shadowRadius: 10,
              },
            ]}
          />
        </View>

        <TouchableOpacity
          style={{
            padding: 10 * 2,
            backgroundColor: "#1F41BB",
            marginVertical: 10 * 3,
            borderRadius: 10,
            shadowColor: "#1F41BB",
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.3,
            shadowRadius: 10,
          }}
        >
          <Text
            style={{
              //   fontFamily: Font["poppins-bold"],
              color: "#fff",
              textAlign: "center",
              fontSize: 20,
            }}
          >
            Sign up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          //   onPress={() => navigate("Login")}
          style={{
            padding: 10,
          }}
        >
          <Text
            style={{
              //   fontFamily: Font["poppins-semiBold"],
              color: "#000",
              textAlign: "center",
              fontSize: 14,
            }}
          >
            Already have an account
          </Text>
        </TouchableOpacity>

        <View
          style={{
            marginVertical: 10 * 3,
          }}
        >
          <Text
            style={{
              //   fontFamily: Font["poppins-semiBold"],
              color: "#1F41BB",
              textAlign: "center",
              fontSize: 14,
            }}
          >
            Or continue with
          </Text>

          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={{
                padding: 10,
                backgroundColor: "#ECECEC",
                borderRadius: 10 / 2,
                marginHorizontal: 10,
              }}
            >
              <Ionicons name="logo-google" color={"#000"} size={10 * 2} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 10,
                backgroundColor: "#ECECEC",
                borderRadius: 10 / 2,
                marginHorizontal: 10,
              }}
            >
              <Ionicons name="logo-apple" color={"#000"} size={10 * 2} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 10,
                backgroundColor: "#ECECEC",
                borderRadius: 10 / 2,
                marginHorizontal: 10,
              }}
            >
              <Ionicons name="logo-facebook" color={"#000"} size={10 * 2} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default SignUp;
