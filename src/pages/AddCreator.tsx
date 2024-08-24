import { useState } from "react"
import { supabase } from "../client"
import { CreatorProps } from "../components/creator"


export default function AddCreator({}){

    const [formData, setFormData] = useState<CreatorProps>({
        id: '',
        name: '',
        url: '',
        description: '',
        imageUrl: '',
    })

    return (
        <div>
            <button onClick={async () => {
                await supabase.from('creators').insert([
                    {
                        name: 'samedoesarts',
                        url: 'blah blah',
                        description: 'dadada',
                        imageUrl: 'asdasdsa'
                    }
                ])
                console.log('done')


            }}>Test Add</button>        
            
        </div>
    )
}