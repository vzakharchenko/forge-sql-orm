
export interface DynamicResponse {
    id: number,
    fields: Record<string, string>
}


export type ElementMetadata = {
    name: string,
    type: string,
};

export type MetadataProperties = {
    [key: string]: ElementMetadata
};

export interface Metadata {
    user: {
        id: ElementMetadata
        properties: MetadataProperties
    }
    duplicate: {
        properties: MetadataProperties
    }
}

export interface DuplicateResponse {
    fields: Record<string, string>
}