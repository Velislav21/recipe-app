import ErrorMessage from "./ErrorMessage";
import { Link } from "react-router";

export default function ErrorPage() {
    return (
        <main>
            <div style={{marginTop: "10em"}}>
                <ErrorMessage>
                    Page not found!
                    <Link to="/">Go to home page.</Link>
                </ErrorMessage>
            </div>
        </main>
    );
}
