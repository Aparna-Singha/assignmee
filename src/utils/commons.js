export function generateID(
  chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
  length = 8
) {
  let id = "";

  while (length--) {
    id += chars[Math.floor(Math.random() * chars.length)];
  }

  return id;
}

export async function copyToClipboard(content) {
  return await navigator.clipboard.writeText(content);
}
