import { Link } from "react-router-dom";

function NotFoundPage() {
    return(
        <section>
            <h1>
                404 NOT FOUND
                <link to="/">Home from Link</link>
            </h1>
        </section>
    )
}


export default NotFoundPage;