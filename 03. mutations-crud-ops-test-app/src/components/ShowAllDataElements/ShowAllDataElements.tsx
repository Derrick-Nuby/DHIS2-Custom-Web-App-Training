import React from 'react';
import { useDataQuery } from '@dhis2/app-runtime';
import { Pagination, CircularLoader } from '@dhis2/ui';
import styles from './ShowAllDataElements.module.css';
import DeleteDataElement from './../DeleteDataElement';
import CreateDataElement from './../CreateDataElement';


const PAGE_SIZE = 3;

const query = {
    dataElements: {
        resource: 'dataElements',
        params: ({ page }) => ({
            order: 'displayName:desc',
            pageSize: PAGE_SIZE,
            page,
        }),
    },
};


const ShowAllDataElements: React.FC = () => {


    const { loading, error, data, refetch } = useDataQuery(query);

    const pager = data?.dataElements?.pager;
    const hasNextPage = pager?.nextPage ? true : false;

    const handlePageChange = (nextPage) => {
        refetch({ page: nextPage });
    };

    const handleDelete = (id: string) => {
        refetch();
    };

    return (
        <div className={`${styles.middle}`}>
            <div>
                <h1>All the data elements</h1>
                {loading && <CircularLoader />}
                {error && <span>{`ERROR: ${error.message}`}</span>}
                {data && (
                    <ul>
                        {data.dataElements.dataElements.map((element, index) => (
                            <li key={index}>
                                {element.displayName}
                                <DeleteDataElement id={element.id} onDelete={() => handleDelete(element.id)} />
                            </li>
                        ))}
                    </ul>
                )}


                {pager && (
                    <Pagination
                        page={pager.page}
                        pageCount={pager.pageCount}
                        pageSize={PAGE_SIZE}
                        total={pager.total}
                        isLastPage={!hasNextPage}
                        onPageChange={handlePageChange}
                        hidePageSizeSelect={true}
                    />
                )}
            </div>

            <CreateDataElement refetch={refetch} />

        </div>
    );
};

export default ShowAllDataElements;
