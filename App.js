import { useState } from "react";
import { StyleSheet, View, Button, TextInput, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goalList, setGoalList] = useState([]);

  const addGoal = (goal) => {
    setGoalList((currentGoal) => [...currentGoal, goal]);
  };

  const deleteGoal = (e) => {
    console.log("delete", e.index);
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoal} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goalList}
          renderItem={(itemData, index) => {
            return <GoalItem text={itemData.item} onDelete={deleteGoal} />;
          }}
          keyExtractor={(itemData, index) => {
            return index;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 5,
  },
});
