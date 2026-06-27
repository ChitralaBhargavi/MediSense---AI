export const playAlarm = () => {
  const audio = new Audio("/src/assets/alarm.mp3");
  audio.play();
};
