/**
 * pages.config.js - Page routing configuration
 * 
 * This file defines all available pages and routing configuration.
 * Update the mainPage value to change which page loads as the landing page.
 */

import About from './src/pages/About';
import Calendar from './src/pages/Calendar';
import GetInvolved from './src/pages/GetInvolved';
import Home from './src/pages/Home';
import Team from './src/pages/Team';
import Layout from './src/Layout.jsx';

export const PAGES = {
    "About": About,
    "Calendar": Calendar,
    "GetInvolved": GetInvolved,
    "Home": Home,
    "Team": Team,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: Layout,
};
