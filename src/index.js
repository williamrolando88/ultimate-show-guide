import './styles.css';
import './images/DummyLogoTV.png';
import movieList from './modules/variables';
import renderSeries from './modules/renderNodes';

const renderedContent = renderSeries(movieList);
