import { useParams } from 'react-router-dom';

const ClientInfoPage = () => {
    const { clientId } = useParams();

    return <>{clientId}</>;
};

export default ClientInfoPage;
