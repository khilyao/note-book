import { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import { Formik, ErrorMessage } from 'formik';
import {
    StyledForm,
    StyledField,
    FieldWrapper,
    StyledBtn,
    CounterWrapper,
    StyledLabel,
    ButtonsWrapper,
    StyledErrorMsg,
    StyledPlusIcon,
    StyledMinusIcon,
} from './ClientForm.styled';
import { object, string, number, boolean } from 'yup';
import { v4 as uuidv4 } from 'uuid';
import { modalContext } from 'contexts/context';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import notebookAPI from 'services/notebookAPI';
import CounterButton from 'components/CounterButton/CounterButton';

const ClientForm = ({ formType }) => {
    const {
        toggleModal,
        setGetClients,
        setIsAddClientBtn,
        setIsEditClientBtn,
        clientInfo: {
            id,
            name,
            lessonsPerWeek,
            price,
            paidHours,
            lessonsPayment,
        },
    } = useContext(modalContext);
    const [previousPaidHoursValue] = useState(paidHours);
    const { pathname } = useLocation();
    const tutor = pathname.split('/').pop();

    const notifyUser = () => {
        const options = {
            theme: 'colored',
            autoClose: 1500,
            closeOnClick: true,
            hideProgressBar: true,
        };

        if (formType === 'addClient') {
            toast.success('Учень доданий!', options);
            return;
        }

        toast.success('Інформацію оновлено!', options);
    };

    const nameInputId = uuidv4();
    const lessonsPerWeekId = uuidv4();
    const priceId = uuidv4();
    const paidHoursId = uuidv4();
    const homeworkId = uuidv4();
    const reviewId = uuidv4();

    const validationSchema = object({
        name: string().trim().required(),
        lessonsPerWeek: number().required(),
        price: number().required(),
        paidHours: number(),
        review: number().min(1).max(5),
        homework: boolean(),
    });

    const currentFormType =
        formType === 'addClient' ? 'addClient' : 'editClient';

    const handleSubmit = (client, { setSubmitting, resetForm }) => {
        const newClient = {
            ...client,
            mentor: tutor,
        };

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
            ? notebookAPI.addClient(newClient, tutor).then(formActions)
            : notebookAPI.updateClientInfo(id, newClient).then(formActions);
    };

    const deleteClient = () => {
        notebookAPI.deleteClient(id).then(() => {
            toggleModal();
            setIsEditClientBtn(false);
            notifyUser();
            setGetClients([]);
        });
    };

    const defineInitialValues = () => {
        if (currentFormType === 'addClient') {
            return {
                name: '',
                lessonsPerWeek: '',
                price: '',
                paidHours: '',
            };
        }

        return {
            name,
            lessonsPerWeek,
            price,
            paidHours,
            lessonsPayment,
            previousPaidHoursValue,
            review: 5,
            homework: true,
        };
    };

    return (
        <>
            <Formik
                initialValues={defineInitialValues()}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ values: { paidHours }, setFieldValue }) => (
                    <StyledForm>
                        <FieldWrapper>
                            <StyledLabel htmlFor={nameInputId}>
                                Імʼя
                            </StyledLabel>
                            <StyledField
                                name="name"
                                id={nameInputId}
                                type="text"
                                placeholder="David"
                            />
                            <ErrorMessage name="name">
                                <StyledErrorMsg>
                                    *required field*
                                </StyledErrorMsg>
                            </ErrorMessage>
                        </FieldWrapper>
                        <FieldWrapper>
                            <StyledLabel htmlFor={lessonsPerWeekId}>
                                Кількість занять/тижд
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
                            <StyledLabel htmlFor={priceId}>Ціна</StyledLabel>
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
                        {currentFormType === 'editClient' && (
                            <>
                                <FieldWrapper style={{ marginBottom: '15px' }}>
                                    <StyledLabel htmlFor={paidHoursId}>
                                        Баланс годин
                                    </StyledLabel>
                                    <StyledField
                                        name="paidHours"
                                        id={paidHoursId}
                                        type="number"
                                        placeholder="0"
                                    />
                                    <CounterWrapper>
                                        <CounterButton
                                            onClick={() => {
                                                setFieldValue(
                                                    'paidHours',
                                                    Number(paidHours) + 1
                                                );
                                            }}
                                        >
                                            <StyledPlusIcon />
                                        </CounterButton>
                                        <CounterButton
                                            onClick={() => {
                                                setFieldValue(
                                                    'paidHours',
                                                    Number(paidHours) - 1
                                                );
                                            }}
                                        >
                                            <StyledMinusIcon />
                                        </CounterButton>
                                    </CounterWrapper>
                                    <FieldWrapper
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <StyledLabel
                                            htmlFor={homeworkId}
                                            style={{
                                                marginRight: 5,
                                                marginBottom: 0,
                                            }}
                                        >
                                            Домашня робота
                                        </StyledLabel>
                                        <Checkbox
                                            defaultChecked
                                            id={homeworkId}
                                            onChange={e =>
                                                setFieldValue(
                                                    'homework',
                                                    e.target.checked
                                                )
                                            }
                                            sx={{
                                                color: '#4f46e5',
                                                '&.Mui-checked': {
                                                    color: '#4f46e5',
                                                },
                                            }}
                                            name="homework"
                                        />
                                    </FieldWrapper>
                                    <FieldWrapper>
                                        <StyledLabel htmlFor={reviewId}>
                                            Відгук за заняття (1-5)
                                        </StyledLabel>
                                        <StyledField
                                            name="review"
                                            min="1"
                                            max="5"
                                            id={reviewId}
                                            type="number"
                                            placeholder="4"
                                        />
                                    </FieldWrapper>
                                </FieldWrapper>
                            </>
                        )}
                        <ButtonsWrapper>
                            <StyledBtn type="submit">
                                {currentFormType === 'addClient'
                                    ? 'Додати учня'
                                    : 'Зберегти'}
                            </StyledBtn>
                            {currentFormType === 'editClient' && (
                                <StyledBtn
                                    onClick={deleteClient}
                                    $delete
                                    style={{ marginLeft: '20px' }}
                                    type="button"
                                >
                                    Видалити
                                </StyledBtn>
                            )}
                        </ButtonsWrapper>
                    </StyledForm>
                )}
            </Formik>
        </>
    );
};

export default ClientForm;
