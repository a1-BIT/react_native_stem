import { Text, StyleSheet, Pressable } from "react-native";

GoalItem = (props) => {
  return (
    <>
      <Pressable onPress={props.onDelete}>
        <Text style={styles.golaText}>{props.text}</Text>
      </Pressable>
    </>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  golaText: {
    backgroundColor: "black",
    color: "white",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 6,
    padding: 5,
    marginBottom: 5,
  },
});
