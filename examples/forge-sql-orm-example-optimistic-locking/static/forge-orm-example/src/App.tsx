import React, {useEffect} from "react";
import {invoke} from "@forge/bridge";
import {observer} from "mobx-react";
import {useRootStore} from "./store";
import {CreatedResponse} from "./utils/Constants";
import Root from "./Root";
import UpdateForm from "./components/UpdateForm";


function App() {
    const {stateStore} = useRootStore();

    useEffect(() => {
        const load = async () => {
            try {
                stateStore.loading();
                const createdResponse = await invoke<CreatedResponse>("fetchOrCreateIfNotExists");
                stateStore.saveResponse(createdResponse);
            } finally {
                stateStore.stopLoading();
            }
        };
        load().catch(console.error);
    }, []);

    if (stateStore.isLoading) {
        return stateStore.message;
    }
    switch (stateStore.state) {
        case "ROOT":
            return (
                <Root/>
            );
        case "WITHOUT_VERSIONING":
        case "OPTIMISTIC_TIMESTAMP":
        case "OPTIMISTIC_DATE":
        case "OPTIMISTIC_NUMBER": {
            return <UpdateForm type={stateStore.state}/>
        }
        default: {
            return <div>ERROR: unsupprted state ${stateStore.state}</div>;
        }
    }
}

export default observer(App);
