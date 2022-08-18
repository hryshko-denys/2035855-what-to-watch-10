export const calculateLeftTime = (duration: number, currentTime: number) => {
  let timeToShow = '-';

  let adaptedTime = Math.trunc(duration - currentTime);
  const hoursToEnd = Math.trunc(adaptedTime / 3600);

  if (hoursToEnd > 0) {
    const adaptedHours = hoursToEnd < 10 ? `0${hoursToEnd}` : hoursToEnd;
    timeToShow += `${adaptedHours}:`;
    adaptedTime -= hoursToEnd * 3600;
  }

  const minutesToEnd = Math.trunc(adaptedTime / 60);
  if (minutesToEnd > 0) {
    const adaptedMinutes = minutesToEnd < 10 ? `0${minutesToEnd}` : minutesToEnd;
    timeToShow += `${adaptedMinutes}:`;
    adaptedTime -= minutesToEnd * 60;
  }

  const adaptedSeconds = adaptedTime < 10 ? `0${adaptedTime}` : adaptedTime;
  timeToShow += `${adaptedSeconds}`;

  return timeToShow;
};
