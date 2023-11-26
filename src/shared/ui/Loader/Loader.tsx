import {ReactComponent as SvgLoader} from './assets/loading.svg';
import cls from './Loader.module.scss';

export const Loader = () => {
    return(
        <div className={cls.LoaderWrapper}>
            <SvgLoader width={60} height={60} className={cls.Loader}/>
        </div>
    )
}
