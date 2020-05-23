import React from 'react';
// faPaw, faGamepad, faBookOpen

import PortfolioCard from '../PortfolioCard';
import ProjectSwitch from '../ProjectSwitch';

import './style.css';

export default function DesktopPortfolio(props) {
    return (
        <div
            className={`${props.large ? '' : 'desktop-portfolio-small'}`}>

            {/* PortfolioCard */}
            <div id='desktop-yappe-div' style={{ height: '100vh', paddingTop: '7vh' }}>
                <PortfolioCard
                    project='yappe'
                    title='yappE'
                    des='An application to help pet owners track care and well-being of their pets.'
                    tech={['React.js','Node.js','Sequelize','Passport','Chart.js']}
                    siteLink='https://yappeapp.herokuapp.com/'
                    codeLink='https://github.com/anzook/yappe-app'
                    large={props.large}
                />
            </div>

            <div id='desktop-trivia-div' style={{ height: '100vh', paddingTop: '7vh' }}>
                <PortfolioCard
                    project='trivia'
                    title='Pop Trivia Culture'
                    des='A one-player jeopardy-style pop culture quiz game.'
                    tech={['JQuery','HTML','CSS','JSON','AJAX']}
                    siteLink='https://pmitch242.github.io/Pop-Culture-Trivia/'
                    codeLink='https://github.com/pmitch242/Pop-Culture-Trivia'
                    large={props.large}
                />
            </div>

            <div id='desktop-google-div' style={{ height: '100vh', paddingTop: '7vh' }}>
                <PortfolioCard
                    project='google'
                    title='Google'
                    des={`A simple application that searches and saves books through Google Books' API.`}
                    tech={['Node.js','Express.js','MySQL','Inquirer']}
                    siteLink='https://young-journey-33791.herokuapp.com/'
                    codeLink='https://github.com/pmitch242/google-books'
                    large={props.large}
                />
            </div>

            {/* ProjectSwitch */}
            <ProjectSwitch action={props.action} large={props.large} />

        </div>
    )
}


