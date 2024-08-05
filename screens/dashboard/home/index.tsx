import CustomSafeAreaView from "@/components/CustomSafeAreaView";

import TodayTasks from "./todayTasks";

const MainDashboard = () => {
  return (
    <CustomSafeAreaView>
      <TodayTasks />
    </CustomSafeAreaView>
  );
};

export default MainDashboard;
