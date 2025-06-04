export type ForgeFieldType =
    | 'text'
    | 'int'
    | 'float'
    | 'boolean'
    | 'date'
    | 'time'
    | 'timestamp';

type ForgeFieldDefinition = {
    name: string;
    type: ForgeFieldType;
    nullable?: boolean;
    default?: any;
};

export type DynamicColumnMetadata = {
    [fieldName: string]: ForgeFieldDefinition;
};
export type DynamicTableMetadata = {
    tableName: string,
    columns: DynamicColumnMetadata;
}


interface DynamicTableBuilder {
    createModel(DynamicColumnMetadata )
}
