import React, { useEffect, useState } from 'react';
import { Container, Jumbotron, Spinner } from 'react-bootstrap';
import Task from '../../components/Task';
import { ManagerTaksParamsProps, TaskProps } from '../../interfaces';
import Layout from '../../Layout';
import manifest from '../../manifest';
import CreateTask from '../../Modals/CreateTask';
import api from '../../services/api';

const Home = (): JSX.Element => {
    const [tasks, setTasks] = useState<TaskProps[]>();

    function handleDeleteTask({ id }: ManagerTaksParamsProps) {
        console.log('Delete task id: ', id);
    }

    function handleDoneTask({ id }: ManagerTaksParamsProps) {
        api.delete(`tasks/${id}`);
    }

    function handlerLoadData() {
        api.get<TaskProps[]>('tasks').then((response) => {
            setTasks(response.data);
        });
    }
    useEffect(handlerLoadData, []);

    if (!tasks) {
        return (
            <Container>
                <Spinner animation="grow" title="loading" />
                <span>loading</span>
            </Container>
        );
    }

    return (
        <Layout>
            <Jumbotron fluid>
                <Container>
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h1>{manifest.subTitle}</h1>
                            <p>{manifest.phrase}</p>
                        </div>
                        <CreateTask />
                    </div>
                </Container>
            </Jumbotron>
            {tasks?.map((task, index) => (
                <Task {...task} key={index} onDelete={handleDeleteTask} onDone={handleDoneTask} />
            ))}
        </Layout>
    );
};

export default Home;
