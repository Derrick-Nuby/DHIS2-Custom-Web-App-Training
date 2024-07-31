import React from 'react';
import { useDataMutation } from '@dhis2/app-runtime';
import { Button } from '@dhis2/ui';


const mutation = {
    resource: 'dataElements',
    type: 'delete',
    id: ({ id }: { id: string; }) => id,
};

interface DeleteDataElementProps {
    id: string;
    onDelete: () => void;
}

const DeleteDataElement: React.FC<DeleteDataElementProps> = ({ id, onDelete }) => {
    const [mutate] = useDataMutation(mutation, {
        onComplete: onDelete,
        variables: {
            id,
        },
    });

    return <Button destructive onClick={() => mutate()}>Delete</Button>;
};

export default DeleteDataElement;
