export function padZeroToSeconds(seconds: number) {
  if (seconds === 0) {
    return `${seconds}0`;
  } else if (seconds < 10) {
    return `0${seconds}`;
  } else {
    return seconds;
  }
}
