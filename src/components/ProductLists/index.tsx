import React from 'react'
import { Item } from '../../data/Items'
import ProductItem from '../ProductItem'
import {  ProductListContainer, ProductWrap } from './ProductListStyle'

type ProductListProps = {
  addedProducts: Item[],
  handleRemoveProduct: (id: string, sum: number) => void
}

export default function ProductLists({ addedProducts, handleRemoveProduct }: ProductListProps): React.ReactElement {

  return (
    <ProductListContainer>
        <h2>Product Lists:</h2>
        <ProductWrap>
            {
              addedProducts.length === 0 ? (
                <p>No Item Available</p>
              ) : addedProducts.map((el: Item) => (
                <ProductItem handleRemoveProduct={handleRemoveProduct} key={el.id} item={el} />
              ))
            }
        </ProductWrap>
    </ProductListContainer>
  )
}
