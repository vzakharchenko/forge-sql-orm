import { EntitySchema, EntityProperty, EntityKey } from "..";
import {ComplexQuerySchemaBuilder} from "./ForgeSQLQueryBuilder";

export class DynamicEntity {
    [key: string]: unknown;

    /**
     * Retrieves a schema field by its original entity property.
     * @param field - The entity property to search for.
     * @returns The corresponding schema field or undefined if not found.
     */
    getSchemaBySchemaField<TYPE>(field: EntityProperty): TYPE | undefined {
        return this[field.name] as TYPE | undefined;
    }

    /**
     * Retrieves a schema field by its alias.
     * @param alias - The alias of the field.
     * @returns The corresponding schema field or undefined if not found.
     */
    getSchemaByAliasField<TYPE>(alias: string): TYPE | undefined {
        return this[alias] as TYPE | undefined;
    }
}

export class EntitySchemaBuilder<T> implements ComplexQuerySchemaBuilder<T> {
    private properties: Record<string, EntityProperty<T>> = {};

    constructor(private entityClass: new () => T) {}

    /**
     * Adds a field to the schema definition.
     * @param field - The entity property to add.
     * @param alias - (Optional) Custom alias for the field name.
     * @returns The current instance of EntitySchemaBuilder for method chaining.
     */
    addField<K>(field: Partial<EntityProperty<K>>, alias?: string): this {
        const fieldName = alias || field.name;
        const fieldNameType = fieldName as unknown as EntityKey<T>;
        this.properties[fieldNameType] = { ...field, name: fieldNameType } as unknown as EntityProperty<T>;
        return this;
    }

    /**
     * Creates and initializes a new EntitySchema based on the added fields.
     * @returns A new EntitySchema<T> instance.
     */
    createSchema(): EntitySchema<T> {
        const es = new EntitySchema<T>({
            class: this.entityClass,
            // @ts-ignore
            properties: this.properties,
        });
        es.init();
        return es;
    }
}

export class DynamicEntitySchemaBuilder extends EntitySchemaBuilder<DynamicEntity> {
    constructor() {
        super(DynamicEntity);
    }
}
