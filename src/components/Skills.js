import '../css/Skills.css'

const Skills = () => {
    return(
        <div className='skills-container'>
            <h1>Skills</h1>
            <div className='list-container'>
                <div className='skill-list'>
                    <h2>Languages</h2>
                    <ul>
                        <li>JavaScript</li>
                        <li>Python</li>
                        <li>HTML5/CSS3</li>
                        <li>Sass/SCSS</li>
                        <li>SQL</li>
                        <li>ES6</li>
                        <li>VBA</li>
                    </ul>
                </div>
                <div className='skill-list'>
                    <h2>Databases</h2>
                    <ul>
                        <li>PostgreSQL</li>
                        <li>Sequelize</li>
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                    </ul>
                </div>
                <div className='skill-list'>
                    <h2>Libraries</h2>
                    <ul>
                        <li>Materialize</li>
                        <li>Bootstrap</li>
                        <li>Bcrypt</li>
                        <li>HTML5 Canvas</li>
                        <li>EJS</li>
                        <li>Axios</li>
                    </ul>
                </div>
                <div className='skill-list'>
                    <h2>Frameworks</h2>
                    <ul>
                        <li>React</li>
                        <li>Flask</li>
                        <li>Express</li>
                        <li>Node</li>
                    </ul>
                </div>
                <div className='skill-list'>
                    <h2>Design</h2>
                    <ul>
                        <li>Adobe Photoshop</li>
                        <li>Adobe Illustrator</li>
                        <li>Adobe InDesign</li>
                        <li>Adobe Premiere</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills