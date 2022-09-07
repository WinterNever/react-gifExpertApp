import { useState } from 'react'
import { AddCategory, GifGrid} from './components'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState( ['Hayley Williams'] )
    const onAddCategory = ( newCategory ) => {

        if( categories.includes( newCategory ) ) return ;

        setCategories( [ newCategory, ...categories ] )

    }
    return (
        <>
            <h1>GiftExpertApp</h1>
            <AddCategory 
                onNewCategory={ (value) => onAddCategory(value)}
            ></AddCategory>
            { 
                categories.map( ( category ) => ( 
                    <GifGrid 
                        key={ category } 
                        category={ category }    
                    ></GifGrid>
                ))
            }
        </>
    )
}
