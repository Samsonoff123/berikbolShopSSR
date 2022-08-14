import { cartActions } from './../slice/cart.slice';
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"

const allActions = {
    ...cartActions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(allActions, dispatch)
}