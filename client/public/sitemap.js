import Generator from 'react-router-sitemap-generator';
//import Router from './component/Router'; //import your react router component
import { Router } from 'react-router-dom';

const generator = new Generator(
    'https://istanbul-expert.site',
    Router(),
    {
        lastmod: new Date().toISOString().slice(0, 10),
        changefreq: 'monthly',
        priority: 0.8,
    }
);
generator.save('public/sitemap.xml');