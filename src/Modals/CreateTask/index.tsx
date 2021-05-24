import React, { useState } from 'react';
import { Form, FormControl } from 'react-bootstrap';
import ModalForm from '../../components/Modal';
import api from '../../services/api';

const CreateTask = (): JSX.Element => {
    const [nameTask, setNameTask] = useState('');
    function handleCreateTask() {
        try {
            api.post('tasks', { nameTask }).then();
        } catch (error) {
            console.log('Error post data');
        }
    }

    return (
        <ModalForm
            title="Criar Tarefa"
            nameButton="Criar Tarefa"
            nameButtonExecute="Criar"
            onExecute={handleCreateTask}
        >
            <Form.Group controlId="createTaskControl">
                <Form.Label>Nome da tarefa</Form.Label>
                <FormControl
                    type="text"
                    name="taskName"
                    value={nameTask}
                    onChange={(e) => setNameTask(e.target.value)}
                />
            </Form.Group>
        </ModalForm>
    );
};

export default CreateTask;
