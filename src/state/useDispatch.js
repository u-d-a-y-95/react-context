import {useContext} from "react"
import { context } from './context';
export default function(){
    const { dispatch } = useContext(context);
    return dispatch
}