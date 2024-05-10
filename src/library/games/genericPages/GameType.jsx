import { Link } from "react-router-dom";
import AnimatedPage from "../../../theme/AnimatedPage";
import { AwesomeButton } from "react-awesome-button";
import "./genericPages.css";

const RoomEnter = () => {
    return (
        <AnimatedPage>
            <div className="content">
                <h1 className="page-title">Choose your type:</h1>
                <div className="buttons-div">
                    <Link to="/settings">
                        <AwesomeButton type="pink" className="gametype" >
                            <div className="button-content">
                                <img className="base-image type-image1" src="https://i.ibb.co/V9gVwNV/globe-3.png" alt="quiz" />
                                <span>Countries</span>
                            </div>
                        </AwesomeButton>
                    </Link>
                    <Link to="/settings">
                        <AwesomeButton type="orange" className="gametype" >
                            <div className="button-content">
                                <img className="base-image type-image2" src="https://cdn-icons-png.flaticon.com/512/5234/5234625.png" alt="quiz" />
                                <span>Hisotry</span>
                            </div>
                        </AwesomeButton>
                    </Link>
                    <Link to="/settings">
                        <AwesomeButton type="primary" className="gametype" >
                            <div className="button-content">
                                <img className="base-image type-image3" src="https://i.ibb.co/r7Wt2xW/download-football-png-1-1.png" alt="quiz" />
                                <span>Sport</span>
                            </div>
                        </AwesomeButton>
                    </Link>
                    <Link to="/settings">
                        <AwesomeButton type="purple" className="gametype" >
                            <div className="button-content">
                                <img className="base-image type-image4" src="https://i.ibb.co/kc8xVKL/science-1.png" alt="quiz" />
                                <span>Science</span>
                            </div>
                        </AwesomeButton>

                    </Link>
                    <Link to="/settings">
                        <AwesomeButton type="green" className="gametype" >
                            <div className="button-content">
                                <img className="base-image type-image5" src="https://i.ibb.co/tJj0srQ/pngtree-real-monkey-vector-png-image-6914142-1.png" alt="quiz" />
                                <span>Animals</span>
                            </div>
                        </AwesomeButton>
                    </Link>
                </div>
            </div>
        </AnimatedPage>
    );
}

export default RoomEnter;
