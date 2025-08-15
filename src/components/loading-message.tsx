import { useTranslations } from "next-intl";
import Spinner from "./spinner/Spinnner";
import { title } from "process";

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