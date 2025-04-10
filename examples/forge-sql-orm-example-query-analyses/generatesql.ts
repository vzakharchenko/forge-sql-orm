import { writeFileSync } from 'fs';
import { randomUUID } from 'crypto';

function generateInsertBatches(categoryCount: number, productCount: number, orderItemCount: number): string {
    const categoryIds: string[] = [];
    const productIds: string[] = [];
    const lines: string[] = [];

    for (let i = 0; i < categoryCount; i++) categoryIds.push(randomUUID());
    for (let i = 0; i < productCount; i++) productIds.push(randomUUID());

    let step = 4;
    chunk(categoryIds.map((id, i) => `UUID_TO_BIN('${id}'), 'Category ${i + 1}'`), 100)
        .forEach((chunk) => {
            lines.push(`.enqueue("v1_MIGRATION${step++}", "INSERT INTO category (id, name) VALUES ${chunk.map(v => `(${v})`).join(', ')}")`);
        });

    chunk(productIds.map((id, i) => `UUID_TO_BIN('${id}'), 'Product ${i + 1}', UUID_TO_BIN('${categoryIds[i % categoryIds.length]}')`), 100)
        .forEach((chunk) => {
            lines.push(`.enqueue("v1_MIGRATION${step++}", "INSERT INTO product (id, name, category_id) VALUES ${chunk.map(v => `(${v})`).join(', ')}")`);
        });

    chunk(Array.from({ length: orderItemCount }, (_, i) => {
        const id = randomUUID();
        const productId = productIds[i % productIds.length];
        const quantity = Math.floor(Math.random() * 10) + 1;
        return `UUID_TO_BIN('${id}'), UUID_TO_BIN('${productId}'), ${quantity}`;
    }), 100).forEach((chunk) => {
        lines.push(`.enqueue("v1_MIGRATION${step++}", "INSERT INTO order_item (id, product_id, quantity) VALUES ${chunk.map(v => `(${v})`).join(', ')}")`);
    });

    return lines.join('\n');
}

function chunk<T>(arr: T[], size: number): T[][] {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
}

const output = generateInsertBatches(300, 300, 300);
writeFileSync('migration-queue-output.txt', output);
console.log('Generated migration file.');
