export interface TaskProps {
    taskName: string;
    id: string;
    timestamp: number;
}

export interface TaskComponentProps extends TaskProps {
    onDelete: (props: ManagerTaksParamsProps) => void;
    onDone: (props: ManagerTaksParamsProps) => void;
}

type HandleAddOptionalParms<Type> = {
    [Property in keyof Type]+?: Type[Property];
};

export type ManagerTaksParamsProps = HandleAddOptionalParms<TaskProps>;

export interface FunctionHandersParamsProps {
    id: string;
}
