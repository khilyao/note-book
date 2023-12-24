import { useContext } from 'react';
import { Formik, ErrorMessage } from 'formik';
import {
    StyledForm,
    StyledField,
    FieldWrapper,
    StyledBtn,
    StyledLabel,
    ButtonsWrapper,
    StyledErrorMsg,
} from './ClientForm.styled';
import { object, string, number } from 'yup';
import { v4 as uuidv4 } from 'uuid';
import notebookAPI from 'services/notebookAPI';
import { modalContext } from 'contexts/context';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const ClientForm = ({ formType }) => {
    const notifyUser = () => {
        const options = {
            theme: 'colored',
            autoClose: 1500,
            closeOnClick: true,
            hideProgressBar: true,
        };

        if (formType === 'addClient') {
            toast.success('Client was added', options);

            return;
        }

        toast.success('Information was updated', options);
    };

    const {
        toggleModal,
        setGetClients,
        setIsAddClientBtn,
        setIsEditClientBtn,
        clientInfo: { id, name, lessonsPerWeek, price, credit },
    } = useContext(modalContext);

    const nameInputId = uuidv4();
    const lessonsPerWeekId = uuidv4();
    const priceId = uuidv4();
    const creditId = uuidv4();

    const validationSchema = object({
        name: string().trim().required(),
        lessonsPerWeek: number().required(),
        price: number().required(),
        credit: number(),
    });

    const currentFormType =
        formType === 'addClient' ? 'addClient' : 'editClient';

    const handleSubmit = (client, { setSubmitting, resetForm }) => {
        const formActions = () => {
            setGetClients([]);
            resetForm();
            toggleModal();
            setIsAddClientBtn(false);
            setIsEditClientBtn(false);
            setSubmitting(false);
            notifyUser();
        };

        formType === 'addClient'
            ? notebookAPI.addClient(client).then(formActions)
            : notebookAPI.updateClientInfo(id, client).then(formActions);
    };

    const defineInitialValues = () => {
        if (currentFormType === 'addClient') {
            return {
                name: '',
                lessonsPerWeek: '',
                price: '',
                credit: '',
            };
        }

        return {
            name,
            lessonsPerWeek,
            price,
            credit: credit,
        };
    };

    return (
        <>
            <Formik
                initialValues={defineInitialValues()}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <StyledForm>
                    <FieldWrapper>
                        <StyledLabel htmlFor={nameInputId}>Name</StyledLabel>
                        <StyledField
                            name="name"
                            id={nameInputId}
                            type="text"
                            placeholder="David"
                        />
                        <ErrorMessage name="name">
                            <StyledErrorMsg>*required field*</StyledErrorMsg>
                        </ErrorMessage>
                    </FieldWrapper>
                    <FieldWrapper>
                        <StyledLabel htmlFor={lessonsPerWeekId}>
                            Lessons per week
                        </StyledLabel>
                        <StyledField
                            name="lessonsPerWeek"
                            id={lessonsPerWeekId}
                            type="number"
                            placeholder="4"
                        />
                        <ErrorMessage name="lessonsPerWeek">
                            <StyledErrorMsg>*required field</StyledErrorMsg>
                        </ErrorMessage>
                    </FieldWrapper>
                    <FieldWrapper>
                        <StyledLabel htmlFor={priceId}>Price</StyledLabel>
                        <StyledField
                            name="price"
                            id={priceId}
                            type="number"
                            placeholder="200"
                        />
                        <ErrorMessage name="price">
                            <StyledErrorMsg>*required field</StyledErrorMsg>
                        </ErrorMessage>
                    </FieldWrapper>
                    <FieldWrapper>
                        <StyledLabel htmlFor={creditId}>Credit</StyledLabel>
                        <StyledField
                            name="credit"
                            id={creditId}
                            type="number"
                            placeholder="0"
                        />
                    </FieldWrapper>
                    <ButtonsWrapper>
                        <StyledBtn type="submit">
                            {currentFormType === 'addClient'
                                ? 'Add Client'
                                : 'Apply'}
                        </StyledBtn>
                        {currentFormType === 'editClient' && (
                            <StyledBtn
                                onClick={() => {
                                    notebookAPI.deleteClient(id).then(() => {
                                        toggleModal();
                                        setIsEditClientBtn(false);
                                        notifyUser();
                                        setGetClients([]);
                                    });
                                }}
                                $delete
                                style={{ marginLeft: '20px' }}
                                type="button"
                            >
                                Delete
                            </StyledBtn>
                        )}
                    </ButtonsWrapper>
                </StyledForm>
            </Formik>
        </>
    );
};

export default ClientForm;
