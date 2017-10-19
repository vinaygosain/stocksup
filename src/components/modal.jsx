import React from 'react';
import PropTypes from 'prop-types';

const ModalComponent = ({ text, id, imgSrc, onHandleEditTile, onHandleCancel }) => {

    let txtInput = null;

    const refHandler = (node) => {
        txtInput = node;
        if (node) {
            node.value = text;
        }
    };

    const onSave = (ev) => {
        ev.stopPropagation();
        ev.preventDefault();
        onHandleEditTile(id, { id, text: txtInput.value, imgSrc });
    };

    return (
        <div className="modal-window">
            <div className="modal-box">
                <button className="close-btn" onClick={onHandleCancel}>X</button>
                <form onSubmit={onSave}>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <label>Company Name:</label>
                                </td>
                                <td>
                                    <input type="text" ref={refHandler}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <button className="save-btn" type="submit">Save</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    );
};

ModalComponent.propTypes = {
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    imgSrc: PropTypes.string.isRequired,
    onHandleEditTile: PropTypes.func.isRequired,
    onHandleCancel: PropTypes.func.isRequired,
};

export default ModalComponent;
