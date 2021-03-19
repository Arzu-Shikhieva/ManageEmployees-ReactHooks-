import {Button, Form} from 'react-bootstrap';
import {EmployeeContext} from "../context/EmployeeContext";
import {useContext, useState} from "react";

const AddForm = () => {

    const {dispatch} = useContext(EmployeeContext);

    const [newEmployee, setNewEmployee] = useState({
        name: '', email: '', address: '', phone: ''
    });

    const {name, email, address, phone} = newEmployee;

    const onChangeInput = (e) => {
        setNewEmployee({...newEmployee, [e.target.name] : e.target.value})
    }

    const onSubmitForm = (e) => {
        e.preventDefault();
        dispatch({
            type: 'add_employee', employee: {
                name, email, address, phone
            }
        })
    }

    return(
        <Form onSubmit={onSubmitForm}>
            <Form.Group>
                <Form.Control
                    type='Text'
                    placeholder='Name *'
                    name = 'name'
                    value= {name}
                    onChange={e => onChangeInput(e)}
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type='email'
                    placeholder='Email *'
                    name = 'email'
                    value= {email}
                    onChange={e => onChangeInput(e)}
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    as='textarea'
                    placeholder='Address *'
                    name = 'address'
                    value= {address}
                    onChange={e => onChangeInput(e)}
                    rows={3}
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type='Text'
                    placeholder='Phone *'
                    name = 'phone'
                    value= {phone}
                    onChange={e => onChangeInput(e)}
                />
            </Form.Group>

            <Button variant='success' type='submit' block>
                Add New Employee
            </Button>
        </Form>
    )
}

export default AddForm;
