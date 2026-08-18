export {};

declare global {
  interface Window {
    gtag?: (
      command: "consent",
      action: "update",
      parameters: Record<string, "denied" | "granted">,
    ) => void;
  }
}
