import Routing from "pages";
import { withHocs } from "./hocs";
import "./index.scss";

const App = () => {
    return <Routing />;
};

export default withHocs(App);
