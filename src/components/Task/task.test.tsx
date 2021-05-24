import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { formatRelative } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Task from '.';
const todayDate = new Date().getTime();
const taskMock = { taskName: 'task-01', id: '0x1', timestamp: todayDate };

describe('<Task />', () => {
    it('should render properties from Task component', () => {
        render(<Task {...taskMock} onDelete={() => null} onDone={() => null} />);
        expect(screen.getByText(taskMock.taskName)).toBeInTheDocument();
        const dateRelative = formatRelative(todayDate, new Date(), { locale: ptBR });
        expect(screen.getByText(`Registrado ${dateRelative}`)).toBeInTheDocument();
    });

    it('should call function from OnCLick when click on the button delete and done', () => {
        const fnOnDelete = jest.fn();
        const fnOnDone = jest.fn();
        render(<Task {...taskMock} onDelete={fnOnDelete} onDone={fnOnDone} />);
        const buttonDelete = screen.getByText(/excluir/i);
        const buttonDone = screen.getByText(/feito/i);
        expect(buttonDelete).toBeInTheDocument();
        expect(buttonDone).toBeInTheDocument();

        userEvent.click(buttonDelete);
        userEvent.click(buttonDone);

        expect(fnOnDone).toHaveBeenCalledTimes(1);
        expect(fnOnDelete).toHaveBeenCalledTimes(1);
    });
});
