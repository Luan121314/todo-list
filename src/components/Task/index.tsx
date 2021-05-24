import React from 'react';
import { formatRelative } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Alert, Button, ButtonGroup } from 'react-bootstrap';
import { TaskComponentProps } from '../../interfaces';

const Task = ({ id, taskName, timestamp, onDelete, onDone }: TaskComponentProps): JSX.Element => {
    const timestampRelative = formatRelative(timestamp, new Date(), { locale: ptBR });

    function handleOnDelete() {
        onDelete({ id });
    }
    function handleOnDone() {
        onDone({ id });
    }

    return (
        <Alert key={id} variant="primary" className="d-flex justify-content-between align-items-center">
            <div className="information-task">
                <span>{taskName}</span>
                <p>{`Registrado ${timestampRelative}`}</p>
            </div>
            <ButtonGroup aria-label={`ButtonGroup-${taskName}`}>
                <Button key={`ButtonDone-${taskName}`} onClick={handleOnDone} variant="success">
                    Feito
                </Button>
                <Button key={`ButtonDelete-${taskName}`} onClick={handleOnDelete} variant="danger">
                    Excluir
                </Button>
            </ButtonGroup>
        </Alert>
    );
};

export default Task;
