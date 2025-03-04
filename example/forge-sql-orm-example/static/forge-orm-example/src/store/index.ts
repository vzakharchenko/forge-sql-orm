import { createContext, useContext } from "react";

import UsersStore from "./UsersStore";
import MetadataStore from "./MetadataStore";
import StateStore from "./StateStore";

export class RootStore {
    usersStore = UsersStore;
    usersMetadata = MetadataStore;
    stateStore = StateStore;
}

export const store = new RootStore();

export const RootStoreContext = createContext<RootStore>(store);

export const useRootStore = () => useContext(RootStoreContext);
