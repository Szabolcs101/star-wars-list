import seriesData from '../../data/series.json';
import MediaListPage from '../hooks/media-list-page';


export default function SeriesListPage() {
    return <MediaListPage data={seriesData} href='series' dateField='startDate'/>
}
