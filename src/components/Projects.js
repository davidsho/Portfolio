import Project from './Project'
import ToTopButton from './ToTopButton'
import FireflyLogo from './Images/FireflyLogo.png'

const Projects = () => {
    const cyberText = `I joined the Cybersole LTD team [Better known for their product, CyberAIO] around Spring 2017 after originally being hired via my freelance business, Divided Design, to produce branding for the company.

    After this initial contact I continued being a loyal supporter of Lucas and his work, over time we created a working relationship which resulted in him requesting I work on a retainer-basis helping with social media presence and general public relations along with design based assistance when needed.
    
    When I originally joined the team CyberAIO had a relatively small but respected presence in what's often referred to as "Sneaker Twitter", over the course of 3 years I helped grow the business to over 100,000 organic followers whilst maintaining other smaller but crucial roles such as customer support, release guides and legal notices.
    
    Over the last few years I've seen CyberAIO grow not only as a product but as a brand. I've also seen Lucas himself grow as a very capable and passionate developer with a great work ethic and a professional attitude towards business.
    
    Although my role at Cybersole LTD is no longer very "hands on" I still maintain a stance inside the business and handle odd-jobs, social media, PR and the occasional release guide.`
    const latinText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus arcu nulla, dapibus sit amet quam nec, accumsan viverra quam. Maecenas nec lobortis dolor. Pellentesque accumsan elementum vulputate. Vestibulum tempor ipsum urna, eu fermentum neque aliquet at. Aliquam ac vestibulum tellus. Vestibulum suscipit id justo in semper. Integer ut imperdiet metus, sit amet iaculis erat. Praesent nec justo purus. Vestibulum in odio non diam iaculis accumsan imperdiet et elit. Morbi et pellentesque metus, eu venenatis diam. Nunc quis nisl quis tellus mollis pellentesque eget vitae est. Nulla posuere tortor et turpis accumsan congue eu sit amet mauris. Mauris vel sagittis est.

    Aliquam gravida at erat sit amet interdum. Donec porttitor convallis ex vitae vulputate. Fusce nisl ex, imperdiet at mi vel, consectetur faucibus ligula. Praesent purus elit, pharetra ut ipsum quis, mollis commodo leo. Sed aliquam metus ac ipsum lacinia, id dignissim quam maximus. In mollis tortor non volutpat auctor. In eu libero a libero gravida elementum sed et erat. Cras vitae augue iaculis, congue tellus vel, tincidunt odio. Praesent cursus mattis blandit. Fusce nec erat in eros rhoncus luctus eu id elit. Vestibulum feugiat justo quis tempus fringilla. Duis rhoncus sollicitudin sagittis. Aenean malesuada sed velit non dictum. Nulla id tellus venenatis, dictum nisi id, vestibulum.`
    return (
        <div className='projects-container'>
            <Project id='firefly-companion' projectTitle='Firefly Companion' projectText={latinText} projectRole='founder | lead developer' projectImage={FireflyLogo} />
            {/* <Project id='table-tennis-league' projectTitle='Table Tennis League' projectText={cyberText} projectRole='founder | lead developer' projectImage={FireflyLogo} /> */}
            {/* <ToTopButton /> */}
        </div>
    )
}

export default Projects
