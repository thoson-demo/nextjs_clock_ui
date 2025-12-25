/**
 * Format date to string
 */
export function formatDate(date: Date, format: string = "long"): string {
  if (format === "long") {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }
  return date.toLocaleDateString();
}

/**
 * Format time to HH:MM:SS
 */
export function formatTime(date: Date, is12Hour: boolean = false): string {
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: is12Hour,
  });
}
