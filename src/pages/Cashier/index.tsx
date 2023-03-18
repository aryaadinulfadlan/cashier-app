import React, { useState, useCallback, useEffect } from 'react'
import ProductLists from '../../components/ProductLists'
import SearchResults from '../../components/SearchResults'
import { Item } from '../../data/Items'
import useAppStore from '../../stores/AppStore'
import { currencyFormatter } from '../../utils'
import { CashierContainer, Content, TopContent, TotalPrice } from './CashierStyle'

export default function Cashier(): React.ReactElement {
  const [term, setTerm] = useState<string>('')
  const [addedProducts, setAddedProducts] = useState<Item[]>([])
  const { totalAmounts, decreaseTotalAmounts, resetAmounts } = useAppStore()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    setTerm(value)
  }
  const handleAddProduct = useCallback((product: Item) => setAddedProducts(prev => ([ ...prev, product ])), [])
  const handleRemoveProduct = useCallback((productId: string, sum: number) => {
    setAddedProducts(prev => prev.filter((el: Item) => el.id.toString() !== productId))
    decreaseTotalAmounts(sum)
  }, [])

  useEffect(() => {
    resetAmounts()
  }, [])
  return (
    <CashierContainer>
      <Content>
        <TopContent>
          <h1>Cashier App</h1>
          <h3>Search an Item:</h3>
          <input type="text" placeholder='Search here..' value={term} onChange={handleChange}/>
        </TopContent>
        {
          term !== '' && <SearchResults term={term} addedProducts={addedProducts} handleAddProduct={handleAddProduct}/> 
        }
        <ProductLists addedProducts={addedProducts} handleRemoveProduct={handleRemoveProduct} />
      </Content>
      <TotalPrice justify='space-between'>
        <h3>Total</h3>
        <h3>{currencyFormatter.format(totalAmounts)}</h3>
      </TotalPrice>
    </CashierContainer>
  )
}
