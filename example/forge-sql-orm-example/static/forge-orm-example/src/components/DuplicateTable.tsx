import {DuplicateResponse, DynamicResponse, MetadataProperties} from "../utils/Constants";
import DynamicTable from "@atlaskit/dynamic-table";
import {createHead} from "../utils/TableUtils";
import {observer} from "mobx-react";
import {useRootStore} from "../store";
import {invoke} from "@forge/bridge";
import {RowCellType} from "@atlaskit/dynamic-table/types";

export default observer( () => {
    const {usersStore, usersMetadata} = useRootStore();
    const head = createHead(true,false, usersMetadata.metadata.duplicate.properties);
    const users:DuplicateResponse[] = usersStore.duplicates;
if (!users || users.length===0){
    return <div>User Table is EMPTY</div>
}
    return <div>
        <div>
            <DynamicTable
                head={head}
                onSort={async (data: { key: string, sortOrder: "ASC"|'DESC' }) => {
                    let sortType = {
                        name: data.key,
                        sortType: data.sortOrder
                    };
                    usersStore.loading();
                    try {
                        const users = await invoke<DynamicResponse[]>('fetch', {type: 'USER', sortType: sortType});
                        usersStore.saveUsers(users);
                        usersStore.saveSort(sortType)
                    } finally {
                        usersStore.stopLoading();
                    }
                }}
                rows={users.map((d, index) => {
                    const cells:Array<RowCellType> = Object.keys(d.fields).map(key => {
                        return {
                            key,
                            content: d.fields[key]
                        }
                    });
                    return {
                        key: `row-${index}-1`,
                        cells: cells
                    }
                })}
                rowsPerPage={5}
                defaultPage={1}
                loadingSpinnerSize="large"
                emptyView={<div>User Table is EMPTY</div>}
                isRankable
            />
            <br/>
            <br/>
        </div>
    </div>;
})