import CustomSafeAreaView from "@/components/CustomSafeAreaView";
import TodayTasks from "./todayTasks";
import { Colors } from "@/constants/Colors";

const MainDashboard = () => {
  return (
    <CustomSafeAreaView style={{ backgroundColor: Colors.faslist.white }}>
      <TodayTasks />
    </CustomSafeAreaView>
  );
};

export default MainDashboard;
