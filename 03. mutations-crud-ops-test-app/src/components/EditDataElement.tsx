// import React, { useState, useEffect } from 'react';
// import { useDataMutation, useDataQuery } from '@dhis2/app-runtime';
// import { Button, InputField, CircularLoader } from '@dhis2/ui';

// const query = {
//     dataElement: {
//         resource: 'dataElements',
//         id: ({ id }: { id: string; }) => id,
//     },
// };

// const mutation = {
//     resource: 'dataElements',
//     type: 'update',
//     id: ({ id }: { id: string; }) => id,
//     data: ({ name, shortName }: { name: string; shortName: string; }) => ({
//         name,
//         shortName,
//     }),
// };

// interface EditDataElementProps {
//     id: string;
//     onClose: () => void;
//     refetch: () => void;
// }

// const EditDataElement: React.FC<EditDataElementProps> = ({ id, onClose, refetch }) => {
//     const [name, setName] = useState('');
//     const [shortName, setShortName] = useState('');
//     const { loading: queryLoading, error: queryError, data } = useDataQuery(query, { variables: { id } });
//     const [mutate, { loading: mutationLoading }] = useDataMutation(mutation);

//     useEffect(() => {
//         if (data) {
//             setName(data.dataElement.displayName || '');
//             setShortName(data.dataElement.shortName || '');
//         }
//     }, [data]);

//     const onSave = async () => {
//         await mutate({ variables: { id, name, shortName } });
//         refetch();
//         onClose();
//     };

//     if (queryLoading) return <CircularLoader />;
//     if (queryError) return <span>{`ERROR: ${queryError.message}`}</span>;

//     return (
//         <div>
//             <InputField
//                 label="Name"
//                 value={name}
//                 onChange={(e) => setName(e.value)}
//                 disabled={mutationLoading}
//             />
//             <InputField
//                 label="Short Name"
//                 value={shortName}
//                 onChange={(e) => setShortName(e.value)}
//                 disabled={mutationLoading}
//             />
//             <Button primary onClick={onSave} disabled={mutationLoading}>
//                 Save
//             </Button>
//             <Button onClick={onClose}>
//                 Cancel
//             </Button>
//         </div>
//     );
// };

// export default EditDataElement;