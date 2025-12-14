// Returns a short, reasonably-unique id: time-based prefix + small random suffix
export default function generateShortId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}
