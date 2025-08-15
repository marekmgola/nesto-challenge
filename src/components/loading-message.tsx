import Spinner from "./spinner/Spinnner";

function LoadingMessage({title, message} : {title:string, message:string}) {
    return (
        <div className="center">
                    <div className="center">
                        <h2>{title}</h2>
                        <p>{message}</p>
                        <Spinner />
                    </div>
        </div>
    );
}       
export default LoadingMessage;