import {useState} from "react";
import React from "react";

export default function Inventory() {

    let [book, setBook] = useState(13);
    let [pen, setPen] = useState(10);
    let [notebook, setNotebook] = useState(44);
    let [inkpen, setInkpen] = useState(78);
    let [total, setTotal] = useState(book + pen + notebook + inkpen);

    function updateBook(value)
    {
        setBook(book + value);
        updateTotal();
    }
    function updatePen(value)
    {
        setPen(pen + value);
        updateTotal();
    }
    function updateNotebook(value)
    {
        setNotebook(notebook + value);
        updateTotal();
    }
    function updateInkpen(value)
    {
        setInkpen(inkpen + value);
        updateTotal();
    }

    function updateTotal()
    {
        setTotal(book + pen + notebook + inkpen);
    }

    return (

        
        <React.Fragment>

            <div className="items">
            <span>Books:</span>
            <button className="addBook" onClick={() => {
                updateBook(1);
            }}>+</button>
            <button className="remBook" onClick={()=>{
                if(book > 0)
                {
                    updateBook(-1);
                }
            }}>-</button>
            <span className="totalBooks">{book}</span>
            </div>
            
    

            <div className="items">
            <span>Pens:</span>
            <button className="addPen" onClick={() => {
                updatePen(1);
            }}>+</button>
            <button className="remPen" onClick={()=>{
                if(pen > 0)
                {
                    updatePen(-1);
                }
            }}>-</button>
            <span className="totalPens">{pen}</span>
            </div>
            
            
            

            <div className="items">
            <span>Notebooks:</span>
            <button className="addNotebook" onClick={() => {
                updateNotebook(1);
            }}>+</button>
            <button className="remNotebook" onClick={()=>{
                if(notebook > 0)
                {
                    updateNotebook(-1);
                }
            }}>-</button>
            <span className="totalNotebooks">{notebook}</span>
            </div>
            
    


            <div className="items">
            <span>Inkpens:</span>
            <button className="addInkpen" onClick={() => {
                updateInkpen(1);
            }}>+</button>
            <button className="remInkpen" onClick={()=>{
                if(inkpen > 0)
                {
                    updateInkpen(-1);
                }
            }}>-</button>
            <span className="totalInkpens">{inkpen}</span>
            </div>
            
           
    

            <div className="total">{total}</div>
        </React.Fragment>
            
            
    
        )
}

