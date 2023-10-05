import React from 'react';
import './Information.css'
import {BsFillCartFill} from 'react-icons/bs'
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  Modal.setAppElement('#root');
  

const Information = (props) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const {name,img,bullet,action,price}=props.gun
    const {handleAddToCart}=props
    let subtitle;

    function openModal() {
        setIsOpen(true);
      }
    
      function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
      }
    
      function closeModal() {
        setIsOpen(false);
      }
    // console.log(props);
    return (
        <div className='info'>
           
           
            <div className='gun-image'><img src={img} alt="" /></div>
            <div className='gun-info'>
        <h1>{name}</h1>
        <p>Bullet Type : {bullet}</p>
        <p>Capacity : {props.gun.capacity}</p>
        <p>Action : {action}</p>
      </div>

      <button onClick={openModal}>See details</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>X</button>
        
        <h1>{name}</h1>
        <p>Bullet Type : {bullet}</p>
        <p>Capacity : {props.gun.capacity}</p>
        <p>Action : {action}</p>
        </Modal>
     <div className='add-to-cart'>
        <button  className='icons'onClick={()=>handleAddToCart(props.gun)}><BsFillCartFill/></button>
        <h1>{price}</h1>
        </div>


        </div>
    );
};

export default Information;