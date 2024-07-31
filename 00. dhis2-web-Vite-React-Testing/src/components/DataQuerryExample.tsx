import React from 'react';
import { useDataQuery } from '@dhis2/app-runtime';
import { Pagination, CircularLoader } from '@dhis2/ui';

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

const DataQueryExample: React.FC = () => {

    const { loading, error, data, refetch } = useDataQuery(query);

    console.log('Data:', data);
    console.log('Loading:', loading);
    console.log('Error:', error);

    const pager = data?.dataElements?.pager;
    const hasNextPage = pager?.nextPage ? true : false;

    const handlePageChange = (nextPage) => {
        refetch({ page: nextPage });
    };

    return (
        <div>
            <h3>dataElements (paginated)</h3>
            {loading && <CircularLoader />}
            {error && <span>{`ERROR: ${error.message}`}</span>}
            {data && (
                <pre>
                    {data.dataElements.dataElements
                        .map((element) => element.displayName)
                        .join('\n')}
                </pre>
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
    );
};

export default DataQueryExample;
