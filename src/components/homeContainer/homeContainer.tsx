import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useMutation } from 'react-query';
import Form from '../form/form';
import { linkResponse } from '@/src/types/linkResponse.interface';

const HomeContainer = () => {  
    const mutation = useMutation("generate-url", async (url: string) => {
        const res = await fetch('/api/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ originalUrl: url }),
        })
        const newLinkData: linkResponse = await res.json();
        return newLinkData;
    });

    async function onSubmit(url: string) {
        mutation.mutate(url);
    }

    const finalUrl = mutation.isSuccess ? `${window.location.href}${mutation.data.data.shortUrl}` : "";

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
                {mutation.isSuccess &&
                    <div>
                        <p className='text-center'>{finalUrl}</p>
                        <button onClick={() => mutation.reset()}>Volver</button>
                        <button onClick={() => window.location.replace(finalUrl)}>Ir</button>
                    </div>
                }
            </Box>
        </Container>
    )
}

export default HomeContainer;
