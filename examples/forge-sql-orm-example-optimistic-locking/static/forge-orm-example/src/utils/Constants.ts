
export type CreatedResponseDataType = { id: number, testDateColumn: Date, testNameColumn: string, version:number|Date };

export type CreatedResponse = {
  testDataId: CreatedResponseDataType,
  testDataOptimisticNumberId: CreatedResponseDataType,
  testDataOptimisticDateId: CreatedResponseDataType,
  testDataOptimisticTimeStampId: CreatedResponseDataType
};

export enum UPDATE_TYPE_ENUM {
  'WITHOUT_VERSIONING',
  'OPTIMISTIC_NUMBER',
  'OPTIMISTIC_DATE',
  'OPTIMISTIC_TIMESTAMP'}

export const UPDATE_TYPES: UPDATE_TYPE[] = Object.keys(UPDATE_TYPE_ENUM)
    .filter(key => isNaN(Number(key))) as UPDATE_TYPE[];

export type UPDATE_TYPE = keyof typeof UPDATE_TYPE_ENUM;




