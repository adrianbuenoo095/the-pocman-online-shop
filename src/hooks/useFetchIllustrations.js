import { useEffect, useState } from "react";

export const useFetchIllustrations = () => {
    const URL_API = "http://localhost:3000/illustrations";
    const [illustrations, setIllustrations] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(URL_API);
                const json = await response.json();
                setIllustrations(json);
            } catch (error) {
                console.error("Error fetching illustrations:", error);
            }
        };

        fetchData();
    }, []);

    return illustrations;
};