import { Link } from "react-router-dom";
import AnimatedPage from "./AnimatedPage";
import ProfilePage from "./library/profilePage/ProfilePage";

const TestPage = () => {
    return (
        <>
        <ProfilePage />
            {/* <AnimatedPage>
                <h1>Test Page</h1>
            </AnimatedPage> */}
        </>
    );
}

export default TestPage;