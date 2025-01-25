export function getTimeUntilTomorrow9PM(): {
  hours: number;
  minutes: number;
  seconds: number;
} {
  const now = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(21, 0, 0, 0);

  const diff = tomorrow.getTime() - now.getTime();
  
  return {
    hours: Math.floor(diff / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000)
  };
}

export function formatTime(hours: number, minutes: number, seconds: number): string {
  return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

export function isTimeToReveal(): boolean {
  const now = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(20, 45, 0, 0);
  return now >= tomorrow;
}