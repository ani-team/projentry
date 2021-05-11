import styles from "./styles.module.scss";
import { withHocs } from "./hocs";
const App = () => {
    return <div className={styles.root}>Hello, Projentry!</div>;
};

export default withHocs(App);
