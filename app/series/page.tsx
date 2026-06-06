import { getAllSeries } from '@/lib/db/queries/series';
import MediaListPage from '../hooks/media-list-page';

export default async function SeriesListPage() {
    const series = await getAllSeries();
    const normalized = series.map(s => ({
        ...s,
        imageUrl: s.imageUrl ?? '/placeholder.svg',
    }));
    return <MediaListPage data={normalized} href='series' />
}
