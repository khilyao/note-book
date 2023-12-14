import { useContext } from 'react';
import { Formik, ErrorMessage } from 'formik';
import {
    StyledForm,
    StyledField,
    FieldWrapper,
    StyledBtn,
    StyledLabel,
    StyledErrorMsg,
} from './ClientForm.styled';
import { object, string, number } from 'yup';
import { v4 as uuidv4 } from 'uuid';
import notebookAPI from 'services/notebookAPI';
import { modalContext } from 'contexts/context';

const ClientForm = ({ formType }) => {
    const {
        toggleModal,
        setGetClients,
        setIsAddClientBtn,
        setIsEditClientBtn,
        clientInfo: { id, name, lessonsPerWeek, price },
    } = useContext(modalContext);

    const nameInputId = uuidv4();
    const lessonsPerWeekId = uuidv4();
    const priceId = uuidv4();

    const validationSchema = object({
        name: string().trim().required(),
        lessonsPerWeek: number().required(),
        price: number().required(),
    });

    const currentFormType =
        formType === 'addClient' ? 'addClient' : 'editClient';

    const handleSubmit = (client, { setSubmitting, resetForm }) => {
        if (formType === 'addClient') {
            notebookAPI.addClient(client).then(() => {
                setGetClients([]);
                resetForm();
                toggleModal();
                setIsAddClientBtn(false);
                setSubmitting(false);
            });
            return;
        }

        notebookAPI.updateClientInfo(id, client).then(() => {
            setGetClients([]);
            resetForm();
            toggleModal();
            setIsEditClientBtn(false);
            setSubmitting(false);
        });
    };

    const defineInitialValues = () => {
        if (currentFormType === 'addClient') {
            return {
                name: '',
                lessonsPerWeek: '',
                price: '',
            };
        }

        return {
            name,
            lessonsPerWeek,
            price,
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
                            {msg => (
                                <StyledErrorMsg>
                                    *required field*
                                </StyledErrorMsg>
                            )}
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
                            {msg => (
                                <StyledErrorMsg>*required field</StyledErrorMsg>
                            )}
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
                            {msg => (
                                <StyledErrorMsg>*required field</StyledErrorMsg>
                            )}
                        </ErrorMessage>
                    </FieldWrapper>
                    <StyledBtn type="submit">
                        {currentFormType === 'addClient'
                            ? 'Add Client'
                            : 'Apply'}
                    </StyledBtn>
                </StyledForm>
            </Formik>
        </>
    );
};

export default ClientForm;
