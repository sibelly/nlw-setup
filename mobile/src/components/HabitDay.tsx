import { TouchableOpacity, Dimensions } from "react-native";
import { Inter_500Medium } from "@expo-google-fonts/inter";

const WEEK_DAYS = 7;
const SCREEN_HORIZONTAL_PADDING = (32 * 2) / Inter_500Medium;

export const DAY_MARGIN_BETWEEN = 8;
export const DAY_SIZE = (Dimensions.get('screen').width / WEEK_DAYS) - (SCREEN_HORIZONTAL_PADDING + 5)

export function HabitDay() {
  return (
    <TouchableOpacity 
      className="bg-zinc-900 rounded-lg border-2 m-1 norder-zinc-800"
      style={{width: DAY_SIZE, height: DAY_SIZE}}
    />
  )
}