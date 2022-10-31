function Footer() {
    return(
        <footer className="footer">
            <p>
                <a href="https://github.com/onnar" title="Github" target="_blank">
                    <svg><use href="#icon-github"></use></svg>
                </a>
                <a href="https://www.facebook.com/facebook_username" title="Facebook" target="_blank">
                    <svg><use href="#icon-facebook"></use></svg>
                </a> <a href="https://twitter.com/twitter_username" title="Twitter" target="_blank"> <svg>
                    <use href="#icon-twitter"></use>
                </svg> </a> <a href="https://medium.com/@medium_username" title="Medium" target="_blank"> <svg>
                    <use href="#icon-medium"></use>
                </svg> </a> <a href="https://www.instagram.com/instagram_username" title="Instagram" target="_blank"> <svg>
                    <use href="#icon-instagram"></use>
                </svg> </a> <a href="https://www.linkedin.com/in/linkedin_username" title="LinkedIn" target="_blank"> <svg>
                    <use href="#icon-linkedin"></use>
                </svg> </a> </p>
            <ul>
                <li> <a href="https://onnar.github.io/">Home</a> </li>
                <li> <a href="https://onnar.github.io/about">About</a> </li>
                <li> <a href="https://onnar.github.io/contact">Contact</a> </li>
                <li> <a href="https://onnar.github.io/feed.xml">Feed</a> </li>
            </ul>
            <p> <span>Jekflix</span> was made with
                <svg className="love"><use href="#icon-heart"></use></svg>
                by <a href="https://rossener.com" target="_blank" className="creator">Thiago Rossener</a>\
            </p>
        </footer>
    );
}

export default Footer;