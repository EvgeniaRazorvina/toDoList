import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import './toDoCardStyles.css';

type ToDoCardTypes = {
    title?: string;
    show?: boolean;
    disabled?: boolean;
    value?: string;
    onHide?: () => void;
    onPressSave?: () => void;
    onChangeText?: (text:any) => void;
    onHandleChange?: (text:any) => void;
};
const ToDoCard: React.FC<ToDoCardTypes> = props => {
    return (
        <Modal className="modal" show={props.show}>
            <Modal.Header closeButton onHide={props.onHide}>
                <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h6>Описание</h6>
                <div>
                <textarea
                    placeholder="Добавьте более подробное описание"
                    className="field"
                    disabled={props.disabled}
                    onChange={props.onChangeText}
                    value={props.value}
                />
                <input type="file" onChange={props.onHandleChange}/>
                </div>
                <div className="btn-container">
                    <button
                        type="button"
                        className="button"
                        onClick={props.onPressSave}
                    >
                        Сохранить
                    </button>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default ToDoCard;
