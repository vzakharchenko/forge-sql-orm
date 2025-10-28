declare module "react-dom/client" {
  import { Root } from "react-dom/client";
  export function createRoot(container: Element | DocumentFragment): Root;
}
