import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { useState } from 'react';

// lazy loading
const AddToCartModal = dynamic(() => import('@/components/AddToCartModal'),
  { loading: () => <p>Loading...</p>, ssr: false }
)

export default function Product() {
  const router = useRouter()
  const [isAddToCartModalVisible, setIsAddToCartModalVisible] = useState(false)

  function handleToCart() {
    setIsAddToCartModalVisible(true)
  }

  return (
    <div>
      <h1>{router.query.slug}</h1>

      <button onClick={handleToCart}>Add to cart</button>

      {isAddToCartModalVisible && <AddToCartModal />}
    </div>
  )
}