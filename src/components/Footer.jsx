import React from "react";
import '../css/footer/footer.css';

function Footer() {
    return (
        <footer className="containerDark footer">
            <ul className="fi_media">
                <li><a href="/null" className="i_media"><i className="media_i1"></i></a></li>
                <li><a href="/null" className="i_media"><i className="media_i2"></i></a></li>
                <li><a href="/null" className="i_media"><i className="media_i3"></i></a></li>
                <li><a href="/null" className="i_media"><i className="media_i4"></i></a></li>
                <li><a href="/null" className="i_media"><i className="media_i5"></i></a></li>
            </ul>
            <div className="text_footer">
                <p>© 2022 Dolzhenkov Andrii.
                    Not for commerce.
                    Made for educational purposes</p>
            </div>
        </footer>
    )
}

export default Footer;
