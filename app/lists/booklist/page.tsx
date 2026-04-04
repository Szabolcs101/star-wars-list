import MyMediaList from "@/app/hooks/mymedia-list";
import bookData from "../../../data/books.json";

export default function MyBooksPage() {
    return (
        <MyMediaList
            data={bookData}
            href="books"
            allowedTypes={["book", "comic"]}
            getTotal={(item) => item.pageNumber ?? 0}
        />
    );
}