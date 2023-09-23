import React, { useState } from 'react';
import '../styles/Home.css';
import projects_list from '../components/projectData';
import otherProjects from '../components/otherProjects';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const [displayDetails, setDisplayDetails] = useState(false);
    const [toggleMandarin, setToggleMandarin] = useState(false);



    return (
        <div className="home--container">
            <div className="home--intro">
                <h1>Hello, I'm <span id='name'>Jack</span>.</h1>
                {toggleMandarin ?
                    <>
                        <p>我是一位前端網頁開發者，具備從建立簡單的 Landing Page 到後端伺服器和連接資料庫的CRUD網站的能力。且精通英文與熟悉國際職場文化。</p>

                        <p>我個性沉穩，遇到困境時可以保持冷靜。在之前的職業領域培養出良好溝通與協調能力，善於專案時間管理。</p>

                        <p>對於終身學習的理念，我堅持不懈。過去的十年中，我嘗試涉足了兩個不同的行業，並且對每一個行業都充滿熱情。如今，我希望選擇一個讓我終生熱愛的事業。雖然一開始出於興趣開始學前端程式語言，但很快的就喜歡上這領域，因為在這行業學習永不止盡，並且總是可以帶來新的挑戰。</p>
                    </>
                    :
                    <>
                        <p>I'm a front-end web developer. I can create anything from simple one-page landing page to more complex CRUD websites with a backend server and connected database.</p>

                        <p>I am calm and collected and stay composed under pressure. In my previous jobs, I developed skills for team communication and time management in a work environment.</p>
                        <p>I am committed to the idea of life-long learning. In the past ten years, I've dabbled in two different industries and enjoyed both of them. Now, I would like to choose and stay in a career that I could enjoy for a life time. For me, that would be coding. It started out as a hobby quickly grew into something much more because the learning never stops and there are always new challenges ahead.</p>
                    </>
                }

                <button onClick={() => setToggleMandarin(prev => !prev)} >{toggleMandarin ? 'Switch to English' : '切換中文'}</button>
                <h2 className='home--subText'>skills</h2>
            </div>
            <div className="home--skills">
                <section>
                    <p>HTML5</p>
                    <p>CSS3</p>
                    <p>JavaScript</p>
                    <p>TypeScript</p>
                </section>
                <section>
                    <p>React.js</p>
                    <p>Bootstrap5</p>
                    <p>Vue.js</p>
                    <p>UnoCSS</p>
                    <p>Tailwind</p>
                    <p>Axios</p>
                    <p>SASS</p>
                    <p>D3</p>
                </section>
                <section>
                    <p>Node.js</p>
                    <p>Express.js</p>
                    <p>MongoDB</p>
                    <p>MySQL</p>
                </section>
                <section>
                    <p>Git</p>
                    <p>Github</p>
                    <p>Sourcetree</p>
                    <p>Figma</p>
                    <p>VScode</p>
                    <p>Postman</p>
                </section>
                <h2 className='home--subText'>projects</h2>
            </div>
            <div className="home--projects">
                {projects_list.map(project => (
                    <section
                        key={project.id}
                        onClick={() => { navigate(`/project/${project.id}`); }}
                        onMouseEnter={() => setDisplayDetails(project.id)}
                        onMouseLeave={() => setDisplayDetails(false)}
                    >
                        <h3>{project.text}</h3>
                        <p className={displayDetails === project.id ? 'none' : ''}>{project.date_range}</p>
                        <p className={displayDetails === project.id ? 'home--projectHoverText' : 'none'}>{project.summary}</p>
                    </section>
                ))}
                <h2 className='home--subText'>other projects</h2>
                {otherProjects.map((project, index) => (
                    <a target='_blank' className='home--otherProjectsLinks' href={project.url} key={index} rel="noreferrer">{project.text}</a>
                ))}
            </div>
            <div className="home--work" id="work">
                <h2 className='home--subText'>works</h2>
                <section>
                    <p>Junior Front-End Web Developer ,StackCore Limited. Taipei, Taiwan.</p>
                    <p>AUG 23' - present</p>
                </section>
                <section>
                    <p>CSR, Bayview Hotel, Inc. Taipei, Taiwan.</p>
                    <p>JAN 19' - AUG 22'</p>
                </section>
                <section>
                    <p>Sales Manager, State Farm. Los Angeles, CA.</p>
                    <p>AUG 15' - AUG 18'</p>
                </section>
                <section>
                    <p>Tutor, Cal Poly Pomona. Pomona, CA.</p>
                    <p>SEP 11' - JUN 14'</p>
                </section>
            </div>
            <div className="home--work" id="education">
                <h2 className='home--subText'>educations</h2>
                <section>
                    <p>Scrimba</p>
                    <p>MAR 23' - present</p>
                </section>
                <section>
                    <p>freeCodeCamp</p>
                    <p>FEB 23' - present</p>
                </section>
                <section>
                    <p>California Polytechnic University of Pomona. Pomona, CA.</p>
                    <p>SEP 11' - JUN 14'</p>
                </section>
            </div>
        </div>
    );
};

export default Home;