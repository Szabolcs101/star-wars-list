import MyMediaList from "@/app/hooks/mymedia-list";
import bookData from "../../../data/books.json";

export default function MyBooksPage() {

    const processedData = bookData.map(item => ({
        ...item,
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