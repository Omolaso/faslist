import ContentLoader, { Circle, Rect } from "react-content-loader/native";
import { Colors } from "@/constants/Colors";

export const RectangleSkeletonLoader = () => {
  return (
    <ContentLoader
      height={140}
      speed={1}
      backgroundColor={Colors.faslist.gradientLight}
      foregroundColor={Colors.faslist.gradientDark}
    >
      <Rect width="400" height="100" />
    </ContentLoader>
  );
};

export const CircularSkeletonLoader = () => {
  return (
    <ContentLoader
      height={140}
      speed={1}
      backgroundColor={Colors.faslist.gradientLight}
      foregroundColor={Colors.faslist.gradientDark}
    >
      <Circle cx="20" cy="20" r="20" />
    </ContentLoader>
  );
};
