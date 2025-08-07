import React from 'react'
import './AboutContentSection.css'

const AboutBlock = ({ title, imageUrl, imageLeft, children }) => { // Removed 'text' prop
    return (
        <div className={`about-block ${imageLeft ? 'image-left' : 'image-right'}`}>
            <div className="about-block-image-container">
                <img src={imageUrl} alt={title} className="about-block-image" />
            </div>
            <div className="about-block-content">
                <h2>{title}</h2>
                {/* Render children directly here */}
                {children}
            </div>
        </div>
    );
};




const AboutContentSection = () => {
    return (
        <section className="about-content-section">
            <AboutBlock
                title="What we believe"
                imageUrl="/images/about1.jpg"
                imageLeft={true}
            >
                {/* Now you can write your content directly here, with <br /> for line breaks */}
                <p>
                    We believe in one God who exists eternally as Father, Son, and Holy Spirit.<br />
                    We believe that Jesus Christ is the only way to salvation and new life.<br />
                    We believe the Holy Spirit equips each of us with unique gifts so that we can share the good news of Jesus with others.<br />
                    We believe the Church is the body of Christ — a diverse community of people worshiping, growing, and serving together in God’s mission.<br />
                    We believe that marriage is a covenant between one man and one woman.
                </p>
                {/* You can add more paragraphs or other elements here */}
            </AboutBlock>

            <AboutBlock
                title="Vision statements"
                imageUrl="/images/about2.jpg"
                imageLeft={false}
            >
                <p>
                    The ultimate goal of Jubilee Multicultural Church is to create an environment where everyone feels welcome, where the truth of God is proclaimed, and where grace and mercy abound.
                </p>
            </AboutBlock>

            <AboutBlock
                title="Pastor Daniel"
                imageUrl="/images/about3.jpeg"
                imageLeft={true}
            >
                <p>
                    Daniel grew up in South Korea and completed his Bachelor of Ministry at Laidlaw College in New Zealand.
                    He then earned a Master of Divinity from Coram Deo Seminary and also completed a two-year Intercultural Studies Diploma at Eastwest College.
                    He was ordained as a pastor in 2017 and has been serving Jubilee Multicultural Church since 2024.<br/>
                    Dayana grew up in Brazil and has been living in New Zealand since marrying Daniel in 2016.
                    Together, Daniel and Dayana carry a deep passion and calling to serve in a multicultural church context, desiring to see people from all nations worship and grow together in Christ.
                </p>
            </AboutBlock>
            {/* You can add more AboutBlock components here */}
        </section>
    );
};

export default AboutContentSection;
