import './styles.css'
import {initAuthBtnListener, initBtnEnterVK, initAuth} from "./oauth";
import {btnReturnMyPage, runInitions} from "./initProfile";
import {myStorage} from "./utils/storage";

initBtnEnterVK ()
initAuthBtnListener()

const isAuth = !!myStorage.hasItem('token');
if (isAuth) {
    btnReturnMyPage ()
    runInitions()
}

if (!isAuth) {
    new Promise((resolve, reject) =>
        initAuth(resolve, reject))
        .then(() => runInitions())
        .catch(() => alert('[Authorization ERROR]'))
}

