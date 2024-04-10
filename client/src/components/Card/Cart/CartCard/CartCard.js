import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useContext, useState } from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import './CartCard.css';
import { CartItemsContext } from '../../../../Context/CartItemsContext';
import { IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

const CartCard = (props) => {
    let cartItems  = useContext(CartItemsContext)
    const [size, setSize] = useState(props.item.size[0]);

    const handelQuantityIncrement = (event) => {
        cartItems.quantity(props.item.id, 'INC');
    };

    const handelQuantityDecrement = (event) => {
        if(props.item.itemQuantity >1){
            cartItems.quantity(props.item.id, 'DEC');
        }
    };

    const handelRemoveItem = () => {
        cartItems.removeItem(props.item)
    }

    const handleSizeChange = (event) => {
        setSize(event.target.value);
    };

    return (
        <div className='cart_item_card'>
            <div className="cart_item_detail">
                <div className="cart_item_image">
                    {console.log(props.item.image[0])}
                    {/* client\src\asset\Products\cloth\men\suits\zegna-1.jpg */}
                    <img src={`https://shema-backend.vercel.app/public/${props.item.category}/${props.item.image[0].filename}`} alt="item" className="item__image"/>
                </div>
                <div className="cart_item_name">{props.item.name}</div>
            </div>
            <div className="cart_item_quantity">
                <IconButton onClick={handelQuantityIncrement}>
                    <AddCircleIcon />
                </IconButton>
                <div type="text" name="quantity" className="quantity__input">{props.item.itemQuantity}</div>
                <IconButton onClick={handelQuantityDecrement}>
                    <RemoveCircleIcon fontSize='medium'/>
                </IconButton>
            </div>
            <div className="product size">
                <Box sx={{ minWidth: 80} }>
                    <FormControl fullWidth size="small">
                        <InputLabel>Size</InputLabel>
                        <Select
                        value={size}
                        label="size"
                        onChange={handleSizeChange}
                        >
                        {props.item.size.map((size) => <MenuItem value={size}>{size}</MenuItem>)}
                        </Select>
                    </FormControl>
                </Box>
            </div>
            <div className="cart_item_price">${props.item.price}</div>
            <div className="remove_item_icon">
                <IconButton>
                    <HighlightOffIcon onClick={handelRemoveItem}/>
                </IconButton>
            </div>
        </div>
     );
}
 
export default CartCard;
