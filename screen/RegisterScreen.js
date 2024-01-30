import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Image,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import React from "react";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
const RegisterScreen = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name,setName] = useState("")
  const navigation = useNavigation();
  const handelsubmit = () => {
    console.log({ email });
    console.log({ password });
  };
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}
    >
      <View style={{ marginTop: 80 }}>
        <Image
          style={{
            width: 200,
            height: 100,
            objectFit: "contain",
            margin: "auto",
          }}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
          }}
        />
      </View>
      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text style={{ color: "grey", fontSize: 20 }}>
            Register to your account
          </Text>
        </View>
        <View style={{ marginTop: 60 }}>
          <View>
            <TextInput
              onChangeText={(text) => setName(text)}
              style={{
                backgroundColor: "white",
                borderWidth: 1,
                borderRadius: 10,
                width: 300,
                marginVertical: 17,
                fontSize: 20,
                paddingVertical: 10,
                paddingLeft: 10,
              }}
              placeholder="Enter your name"
            />
          </View>
        </View>
        <View style={{ marginTop: 5 }}>
          <View>
            <TextInput
              onChangeText={(text) => setEmail(text)}
              style={{
                backgroundColor: "white",
                borderWidth: 1,
                borderRadius: 10,
                width: 300,
                marginVertical: 17,
                fontSize: 20,
                paddingVertical: 10,
                paddingLeft: 10,
              }}
              placeholder="Enter your email"
            />
          </View>
        </View>
        <View style={{ marginTop: 5 }}>
          <View>
            <TextInput
              secureTextEntry
              onChangeText={(text) => setPassword(text)}
              style={{
                backgroundColor: "white",
                borderWidth: 1,
                borderRadius: 10,
                width: 300,
                marginVertical: 17,
                fontSize: 20,
                paddingVertical: 10,
                paddingLeft: 10,
              }}
              placeholder="Enter your password"
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            justifyContent: "space-between",
          }}
        >
          <Text>Keep me logged in</Text>
          <Text style={{ color: "#000fff" }}>Forget password</Text>
        </View>
        <Pressable
          onPress={handelsubmit}
          style={{
            backgroundColor: "#fac707",
            width: 200,
            alignItems: "center",
            marginLeft: "auto",
            marginRight: "auto",
            marginVertical: 20,
            paddingVertical: 10,
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "white", fontSize: 20 }}>Reguster</Text>
        </Pressable>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={{ textAlign: "center", color: "grey" }}>
            Already have an account ?
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
