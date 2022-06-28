import Button from '../Button'

import { useContext } from 'react'

import { CatalogueContext } from '../../providers/catalogue'
import { CartContext } from '../../providers/cart'
import { ListProd } from './styles';

export const ProductList = ({ type }) => {
    
    const { catalogue } = useContext(CatalogueContext);
    const { cart } = useContext(CartContext);
  
    return (
        <ListProd>
          {type === "catalogue" &&
            catalogue.map((item, index) => (
              <li key={index}>
                <h2>{item.name}</h2> 
                <span>R$ {item.price.toFixed(2)}</span>
                <Button type={type} item={item} />
              </li>
            ))}
  
          {type === "cart" &&
            cart.map((item, index) => (
              <li key={index}>
                <h2>{item.name}</h2> 
                <span>R$ {item.price.toFixed(2)}</span>
                <Button type={type} item={item} />
              </li>
            ))}
        </ListProd>
    );
  };