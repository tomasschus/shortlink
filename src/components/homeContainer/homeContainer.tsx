import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useMutation } from 'react-query';
import Form from '../form/form';

const HomeContainer = () => {
    const mutation = useMutation("generate-url", async (url: string) => {
        const res = await fetch('/api/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ originalUrl: url }),
        })
        return await res.json();
    });

    async function onSubmit(url: string) {
        mutation.mutate(url);
    }

    return (
        <Container maxWidth="sm">
            <Box my={4}>
                {!mutation.isLoading &&
                    !mutation.isError &&
                    !mutation.isSuccess &&
                    <Form onSubmit={onSubmit} />
                }
                {mutation.isLoading && <div>Generating...</div>}
                {mutation.isError && (
                    <div>An error occurred: {(mutation.error as Error).message}</div>
                )}
                {mutation.isSuccess && <div>{mutation.data}</div>}
            </Box>
        </Container>
    )
}

export default HomeContainer;