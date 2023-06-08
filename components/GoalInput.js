import { useState } from "react";
import {
  Button,
  Modal,
  StyleSheet,
  TextInput,
  View,
  Image,
} from "react-native";

function GoalInput(props) {
  const [newGoal, setNewGoal] = useState("");

  function goalInputHandler(enteredText) {
    setNewGoal(enteredText);
  }

  function addGoalHandler() {
    props.setGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: newGoal, id: Math.random().toString() },
    ]);
    props.onCancel();
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.textInput}
          placeholder="Set a goal"
        ></TextInput>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button onPress={addGoalHandler} title="Add goal" color="#b180f0" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    borderRadius: 6,
    backgroundColor: "#e4d0ff",
    width: "95%",
    marginRight: 8,
    padding: 16,
    color: "#120438",
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: "row",
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
});

export default GoalInput;
