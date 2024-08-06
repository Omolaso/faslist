import Toast from "react-native-root-toast";
import { Colors } from "@/constants/Colors";

export const ToastNotification = (message: string) => {
  let toast = Toast.show(message, {
    duration: Toast.durations.LONG,
    position: Toast.positions.TOP,
    // shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
    backgroundColor: Colors.faslist.blue
  });
};
