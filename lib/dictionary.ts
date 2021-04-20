export class Dictionary<T, K = string> {
    private _items: Map<K, T> = new Map<K, T>();

    public has(key: K): boolean {
        return this._items.has(key);
    }


    public set(key: K, value: T) {

        this._items.set(key, value);
    }

    public delete(key: K): boolean {

        return this._items.delete(key);
    }

    public get(key: K): T {
        return this._items.get(key);
    }

    public get size(): number {
        return this._items.size;
    }

    public keys(): K[] {
        return Array.from(this._items.keys());
    }

    public values(): T[] {
        return Array.from(this._items.values());
    }

    public clear() {
        this._items.clear();
    }
}
