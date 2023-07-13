'use client';

import { getOriginalUrl } from "@/src/utils/getOriginalUrl";
import { LinearProgress } from "@mui/material";
import { useEffect } from "react";

export default function Page() {
    const hash = window.location.pathname?.replace("/", "");

    const makeRedirect = async () => {
        try {
            const originalUrl: string = await getOriginalUrl(hash);
            window.location.replace(originalUrl);
        } catch (e) {
            console.error(e);
            window.location.replace(window.location.origin);
        }
    }

    useEffect(() => {
        makeRedirect();
    }, [])

    return (<>
        <div>
            <LinearProgress color="primary" />
        </div>
    </>)
}
