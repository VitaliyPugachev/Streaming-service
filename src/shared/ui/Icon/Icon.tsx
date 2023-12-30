import {memo} from "react";
import cls from './Icon.module.scss';

interface SvgProps {
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>,
}

export const Icon = memo(({Svg}: SvgProps) => {
    return (
        <Svg className={cls.Icon}/>
    )
})
