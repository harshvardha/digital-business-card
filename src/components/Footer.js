const Footer = () => {
    return (
        <div className="footer">
            <a href="#" className="twitter">
                <img src={require("../images/twitter-icon.png")} alt="" />
            </a>
            <a href="#" className="facebook">
                <img src={require("../images/facebook-icon.png")} alt="" />
            </a>
            <a href="#" className="instagram">
                <img src={require("../images/instagram-icon.png")} alt="" />
            </a>
            <a href="#" className="github">
                <img src={require("../images/github-icon.png")} alt="" />
            </a>
        </div>
    )
}

export default Footer