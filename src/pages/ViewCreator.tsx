import { useEffect } from "react"
import { supabase } from "../client"
import { useParams } from "react-router-dom"

export default function ViewCreator({}){

    const params = useParams()
    
    useEffect(() => {

        const getCreator = async () => {
            
        }

    }, [])
    


    return (
        <div>

            {params.id}
            view one
        </div>
    )
}