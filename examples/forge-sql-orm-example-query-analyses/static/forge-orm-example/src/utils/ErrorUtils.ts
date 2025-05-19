import { showFlag } from "@forge/bridge";

export const showError = (title: string, message: string) => {
  showFlag({
    id: "error-flag",
    title: title,
    type: "error",
    description: message,
    isAutoDismiss: true,
  });
};
