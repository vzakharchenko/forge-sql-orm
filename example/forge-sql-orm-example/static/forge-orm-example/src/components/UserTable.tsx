import {DuplicateResponse, DynamicResponse} from "../utils/Constants";
import DynamicTable from "@atlaskit/dynamic-table";
import {createHead} from "../utils/TableUtils";
import {observer} from "mobx-react";
import {useRootStore} from "../store";
import {invoke} from "@forge/bridge";
import {RowCellType} from "@atlaskit/dynamic-table/types";

export default observer(() => {
    const {usersStore, usersMetadata, stateStore} = useRootStore();
    const head = createHead(true, true, usersMetadata.metadata.user.properties);
    const users: DynamicResponse[] = usersStore.users;
    if (!users || users.length === 0) {
        return <div>User Table is EMPTY</div>
    }
    return <div>
        <div>
            <DynamicTable
                head={head}
                onSort={async (data: { key: string, sortOrder: "ASC" | 'DESC' }) => {
                    let sortType = {
                        name: data.key,
                        sortType: data.sortOrder
                    };
                    usersStore.loading();
                    try {
                        const users = await invoke<DynamicResponse[]>('fetch', {sortType: sortType});
                        usersStore.saveUsers(users);
                        usersStore.saveSort(sortType)
                    } finally {
                        usersStore.stopLoading();
                    }
                }}
                rows={users.map((d, index) => {
                    const cells: Array<RowCellType> = Object.keys(d.fields).map(key => {
                        return {
                            key,
                            content: d.fields[key]
                        }
                    });
                    cells.push({
                        key: 'delete',
                        content: <div>
                            <button onClick={
                                async () => {
                                    try {

                                        usersStore.loading()
                                        await invoke('delete', {id: d.id});
                                        const users = await invoke<DynamicResponse[]>('fetch', {sortType: usersStore.sort});
                                        usersStore.saveUsers(users);
                                    } finally {
                                        usersStore.stopLoading();
                                    }

                                }
                            }>delete
                            </button>
                        </div>
                    })
                    return {
                        key: `row-${index}-${d.id}`,
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
            <button onClick={async () => {
                usersStore.loading();
                try {
                    const dynamicResponses = await invoke<DuplicateResponse[]>('duplicate');
                    usersStore.saveDuplicates(dynamicResponses)
                    stateStore.saveState('DUPLICATE')
                } finally {
                    usersStore.stopLoading();
                }

            }}>Search Duplicates
            </button>
        </div>
    </div>;
})