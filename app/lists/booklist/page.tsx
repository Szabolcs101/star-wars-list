import MyMediaList from "@/app/hooks/mymedia-list";
import { getAllBooks } from "@/lib/db/queries/books";

export default async function MyBooksPage() {

    const books = await getAllBooks();

    const processedData = books.map(item => ({
        ...item,
        imageUrl: item.imageUrl ?? '/placeholder.svg',
        pageNumber: item.pageNumber ?? undefined,
        total: item.pageNumber ?? 0,
    }));

    return (
        <MyMediaList
            data={processedData}
            href="books"
            allowedTypes={["book", "comic"]}
        />
    );
}