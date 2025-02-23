declare global {
  interface String {
    toTitleCase(): string;
  }
}

String.prototype.toTitleCase = function (): string {
  return this.split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

export {};
