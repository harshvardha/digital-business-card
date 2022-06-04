const ProfessionalInfo = () => {
    return (
        <div className="professional-info">
            <img src={require("../images/profile-pic.png")} alt="" width="200px" />
            <h2 className="name">Laura Smith</h2>
            <h3 className="profession">Frontend Developer</h3>
            <h4 className="portfolio">laurasmith.website</h4>
            <a href="#" className="email-link">
                <img src={require("../images/mail-icon.png")} alt="" />
                Email
            </a>
            <a href="#" className="linkedin-link">
                <img src={require("../images/linkedin-icon.png")} alt="" />
                Linkedin
            </a>
        </div>
    )
}

export default ProfessionalInfo