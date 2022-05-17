import {useContext} from "react"
import { context } from './context';
export default function(){
    const { store } = useContext(context);
    return store
}