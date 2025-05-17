import mitt from "mitt";
import { type Message } from "../../components/snackbar";

const eventEmitter = mitt<{ showSnackbar: Message }>();
export default eventEmitter;
