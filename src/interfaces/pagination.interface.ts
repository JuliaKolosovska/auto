export interface IPagination<T> {
    results: any;
    total_items: number;
    total_pages: number;
    prev: number;
    next: number;
    items: T;

}