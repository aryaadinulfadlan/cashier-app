import React, { useEffect, useState } from 'react'
import { FaMinus, FaPlus, FaTimes } from 'react-icons/fa'
import { Item } from '../../data/Items'
import useAppStore from '../../stores/AppStore'
import { currencyFormatter } from '../../utils'
import { BtnWrap, Desc, ImgWrap, ProductCount, ProductCountWrapper, ProductDesc, ProductItemContainer } from './ProductItemStyle'

type ProductItemProps = {
    item: Item,
    handleRemoveProduct: (id: string, sum: number) => void
}
export default function ProductItem({ item, handleRemoveProduct }: ProductItemProps): React.ReactElement {
  const { id, name, image, price }: { id: number, name: string, image: string, price: number } = item
  const [count, setCount] = useState<number>(1)
  const { increaseTotalAmounts, decreaseTotalAmounts } = useAppStore()

  const sum = count * price
  const increase = () => {
    if (count < 5) {
        setCount(prev => prev + 1)
        increaseTotalAmounts(price)
    }
  }
  const decrease = () => {
    if (count === 1) {
        handleRemoveProduct(id.toString(), sum)
    }
    if (count > 1) {
        setCount(prev => prev - 1)
        decreaseTotalAmounts(price)
    }
  }

  useEffect(() => {
    increaseTotalAmounts(price)
  }, []);

  return (
    <ProductItemContainer>
        <ProductDesc>
            <ImgWrap>
                <img src={image} alt={name} />
            </ImgWrap>
            <Desc>
                <h3>{name}</h3>
                <p>Harga satuan: Rp {price}</p>
            </Desc>
        </ProductDesc>
        <ProductCountWrapper>
            <ProductCount>
                <BtnWrap gap='10px'>
                    <button onClick={decrease}>
                        <FaMinus />
                    </button>
                    <p>{count}</p>
                    <button onClick={increase}>
                        <FaPlus />
                    </button>
                </BtnWrap>
                <p>{currencyFormatter.format(sum)}</p>
            </ProductCount>
            <FaTimes onClick={() => handleRemoveProduct(id.toString(), sum)} />
        </ProductCountWrapper>
    </ProductItemContainer>
  )
}
