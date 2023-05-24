import DataTable from 'react-data-table-component';
import { useQuery } from 'react-query';
import styled from 'styled-components';

const List = () => {
    const columns = [
    {
        name: 'ID',
        selector: 'id',
        sortable: true,
    },
    {
        name: 'Nom',
        selector: 'full_name',
        sortable: true,
    },
    {
        name: 'Email',
        selector: 'email',
        sortable: true,
    },
    {
        name: 'Téléphone',
        selector: 'full_name',
        sortable: true,
    },
    {
        name: 'Nom de societe',
        selector: 'company',
        sortable: true,
    },
    {
        name: 'Fonction',
        selector: 'job_title',
        sortable: true,
    },
    {
        name: 'Produit Utilsé',
        selector: 'product',
        sortable: true,
    },
    {
        name: 'Date De création',
        selector: 'created_at',
        sortable: true,
    },
   

    ];

    const TableContainer = styled.div`
    padding: 1rem;
    `;

    const { isLoading, error, data } = useQuery('leads', () =>
        fetch(`${import.meta.env.VITE_BACK_END_URL}/leads`).then(res =>
        res.json()
        )
    )

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

  return (
    <div className='min-h-screen'>
        <div className="mx-auto mt-12">
            <TableContainer>
                <DataTable
                    title="Liste des participants"
                    columns={columns}
                    data={data.leads}
                    pagination
                />
            </TableContainer>
        </div>
    </div>
  )
}

export default List