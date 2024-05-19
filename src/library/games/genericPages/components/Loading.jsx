import { InfinitySpin } from "react-loader-spinner";

const Loading = () => {
    return (
        <div className="loading-indicator">
            <InfinitySpin color="white" />
        </div>
    );
}

export default Loading;