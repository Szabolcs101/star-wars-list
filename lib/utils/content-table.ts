export function getContentTable(type?: string): string {
    if (type === "book") return "books";
    if (type === "video game") return "games";
    if (type === "animation series") return "series";
    return "shows";
}