import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

import data from "../Database/data"


import * as Action from '../redux/question_reducer'

export const  useFetchQuestion = () => {
    const dispatch=useDispatch();
    const [getData, setgetData] = useState({Loading:false, apiData:[], servererror:null})

    useEffect(() => {
        setgetData(prev => ({...prev, Loading:true}))
    
    (async () => {

        try {
            let question = await data;

            if(question.length>0){
                setgetData(prev => ({...prev, Loading:false}))
                setgetData(prev => ({...prev, apiData:question}))

                dispatch(Action.startExamAction(question))
            }else{
                throw new Error("No Question available!")
            }
        } catch (error) {
            setgetData(prev => ({...prev, Loading:false}))
            setgetData(prev => ({...prev, servererror:error}))
        }
    })();
    }, [dispatch]);

    return [getData, setgetData];
}



/** moveaction dispatch function */

export const MoveNextQuestion = () => async(dispatch) => {
    try {
        dispatch(Action.moveNextAction());
    } catch (error) {
        console.log(error)
    }
}


/**Prevaction dispatch function */
export const MovePrevQuestion = () => async(dispatch) => {
    try {
        dispatch(Action.movePrevAction());
    } catch (error) {
        console.log(error)
    }
}