export default function removeSpaces(input) {
  const noSpaces = input.replace(/\s/g, "");
  return noSpaces;
}

export function convertToSentenceCase(str) {
  if (!str) {
    return "";
  }

  return str
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase().concat(word.substr(1));
    })
    .join(" ");
}
