import {EmployeeContext} from "../context/EmployeeContext";
import {useContext, useEffect, useState} from "react";
import {Button, Modal, OverlayTrigger, Tooltip} from "react-bootstrap";
import EditForm from "./EditForm";

const Employee = ({employee}) => {

    const {dispatch} = useContext(EmployeeContext);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        handleClose();
    }, [employee])

    return(
                <>
                    <td>{employee.name}</td>
                    <td>{employee.email}</td>
                    <td>{employee.address}</td>
                    <td>{employee.phone}</td>
                    <td>
                        <OverlayTrigger
                            overlay={
                                <Tooltip id={`tooltip-top`}>
                                    Edit
                                </Tooltip>
                            }>
                            <button onClick={handleShow} className='btn text-warning btn-act'>
                                <i className="material-icons"
                                   data-toggle="tooltip"
                                   title="Edit">&#xE254;</i>
                            </button>
                        </OverlayTrigger>

                        <OverlayTrigger
                            overlay={
                            <Tooltip id={`tooltip-top`}>
                                Delete
                            </Tooltip>
                            }>
                            <button onClick={() => dispatch({type: 'remove_employee', id: employee.id})} className='btn text-danger btn-act'>
                                <i className="material-icons"
                                   data-toggle="tooltip"
                                   title="Delete">&#xE872;</i>
                            </button>
                        </OverlayTrigger>
                    </td>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header className='modal-header' closeButton>
                            <Modal.Title>
                                Update Employee
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <EditForm theEmployee={employee} />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant='danger' onClick={handleClose}>
                                Close Modal
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>
    )
}

export default Employee;
