export type onboardingSlidesType = {
  bgImage: string;
  titleHeader: string;
  titleParagraph: string;
};

export const onboardingSlides: onboardingSlidesType[] = [
  {
    bgImage: require("@/assets/images/onboarding-screen1.png"),
    titleHeader: "Welcome To FasList",
    titleParagraph:
      "Simplify your life with FasList, your personal task manager.",
  },
  {
    bgImage: require("@/assets/images/onboarding-screen2.png"),
    titleHeader: "Plan Ahead",
    titleParagraph: "Use your calender to see your tasks for the month.",
  },
  {
    bgImage: require("@/assets/images/onboarding-screen3.png"),
    titleHeader: "Make it Fun",
    titleParagraph: "Earn points and badges as you complete your tasks.",
  },
];
