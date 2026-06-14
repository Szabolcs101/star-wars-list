import { getAllSeries } from '@/lib/db/queries/series';
import MediaListPage from '../hooks/media-list-page';
import { Suspense } from 'react';

export default async function SeriesListPage({ searchParams, }: { searchParams: Promise<{ [key: string]: string | undefined }>; }) {
    const params = await searchParams;
    const series = await getAllSeries();
    const normalized = series.map(s => ({
        ...s,
        imageUrl: s.imageUrl ?? '/placeholder.svg',
    }));
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <MediaListPage data={normalized} href='series' searchParams={params} />
        </Suspense>
    )
}
