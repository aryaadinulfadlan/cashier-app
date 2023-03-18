import React, { useMemo } from 'react'
import Items, { Item } from '../../data/Items'
import { ResultItem, ResultsContainer } from './SearchResultStyle'

type SearchResultsProps = {
    term: string,
    addedProducts: Item[],
    handleAddProduct: (product: Item) => void,
}
export default function SearchResults({ term, addedProducts, handleAddProduct }: SearchResultsProps): React.ReactElement {
  
    const itemLists = useMemo(() => {
    const results = Items.filter((el: Item) => {
        return el.name.toLowerCase().includes(term.toLowerCase())
    }).filter((elByAdded: Item) => {
        if (addedProducts.length > 0) {
            const addedProductIds = addedProducts.map((el: Item) => el.id)
            return !addedProductIds.includes(elByAdded.id)
        } else {
            return true
        }
    })
    return results
  }, [term, addedProducts, Items])

  return (
    <ResultsContainer>
        {
            itemLists.length === 0 ? (
                <p>Not Found</p>
            ) : itemLists.map((el: Item) => (
                <ResultItem justify='space-between' key={el.id}>
                    <span>{el.name}</span>
                    <button onClick={() => handleAddProduct(el)}>Add Product</button>
                </ResultItem>
            ))
        }
    </ResultsContainer>
  )
}
