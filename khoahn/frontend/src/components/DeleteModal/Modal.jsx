import React from 'react';
import "./Modal.css";

function deleteModal() {
    return(
        <div className='delete-modal'>
            <div className='modal-inner'>
                <div className='modal-header'>
                    <h2>Delete Confirmation</h2>
                </div>
                <div className='modal-body'>
                    <p>Are you sure you want to delete this user ?</p>
                </div>
                <div className='modal-footer'>
                    <button className='cancel-button'>Cancel</button>
                    <button className='yes-button'>Yes</button>
                </div>
            </div>
        </div>
    )
}
export default deleteModal