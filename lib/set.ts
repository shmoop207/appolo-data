export class SetItems<T> {
    private _items: Set<T> = new Set<T>();

    public has(item: T): boolean {
        return this._items.has(item);
    }

    public keys(): T[] {
        return Array.from(this._items.keys());
    }


    public add(value: T) {

        this._items.add(value);
    }

    public delete(item: T): boolean {

        return this._items.delete(item);
    }


    public get size(): number {
        return this._items.size;
    }


    public values(): T[] {
        return Array.from(this._items.values());
    }

    public clear() {
        this._items.clear();
    }

    public union(set: SetItems<T>): SetItems<T> {
        let union = new SetItems<T>();
        this.values().forEach(item => union.add(item));
        set.values().forEach(item => union.add(item));

        return union;
    }

    public intersection(set: SetItems<T>): SetItems<T> {
        let intersection = new SetItems<T>();

        this.values().forEach(item => set.has(item) && intersection.add(item));

        return intersection;
    }

    public difference(set: SetItems<T>): SetItems<T> {
        let difference = new SetItems<T>();

        this.values().forEach(item => !set.has(item) && difference.add(item));

        return difference;
    }

    public subset(set: SetItems<T>): boolean {
        return this.values().every(item => set.has(item));
    }
}
