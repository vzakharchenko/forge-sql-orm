export interface DynamicResponse {
  id: number;
  fields: Record<string, string>;
}

export interface DuplicateResponse {
  fields: Record<string, string>;
}

export type SortType = {
  name: string;
  sortType: "ASC" | "DESC";
};

export type ElementMetadata = {
  name: string;
  type: string;
};
export type MetadataProperties = {
  [key: string]: ElementMetadata;
};

export interface Metadata {
  user: {
    id: ElementMetadata;
    properties: MetadataProperties;
  };
  duplicate: {
    properties: MetadataProperties;
  };
}
