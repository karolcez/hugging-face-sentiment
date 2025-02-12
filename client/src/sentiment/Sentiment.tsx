import React, { useState, useRef } from "react";
import axios from "axios";
import { Popup, SentimentView } from "./SentimentView.tsx";
import { MAX_INPUT_LENGTH, Result } from "./sentimentConstants.ts";

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;


type Response = {
    data: [[Result]],
    status: number
}
export interface SentimentService {
    query(text: string): Promise<Result>;
}
class SentimentAPI implements SentimentService {
    async query(text: string): Promise<Result> {
        try {
            const response: Response = await axios.post(API_URL, { inputs: text }, {
                headers: {
                    Authorization: `Bearer ${API_KEY}`,
                    "Content-Type": "application/json",
                },
            });
            return response.data[0][0];
        } catch (error) {
            console.error("Error fetching sentiment analysis:", error);
            throw error;
        }
    }
}

const initialStatus = {
    result: null,
    loading: false,
    error: null,
};

const validateInput = (text: string, setStatus, newStatus): boolean => {
    if (!text) {
        setStatus(newStatus({ error: "The text cannot be empty." }));
        return false;
    }
    if (text.length > MAX_INPUT_LENGTH) {
        setStatus(newStatus({ error: `The text cannot exceed ${MAX_INPUT_LENGTH} characters.` }));
        return false;
    }
    return true;
};

const Sentiment = () => {
    return (
        <SentimentController sentimentAPI={new SentimentAPI()} />
    );
};

interface SentimentControllerProps {
    sentimentAPI: SentimentService;
}

export const SentimentController: React.FC<SentimentControllerProps> = ({ sentimentAPI }) => {
    const inputRef = useRef<HTMLTextAreaElement>(null);
    const [status, setStatus] = useState(initialStatus);

    const newStatus = (change) => {
        return () => ({ ...status, ...change });
    };

    const analyzeSentiment = async () => {
        const text = inputRef.current?.value.trim() || "";

        if (!validateInput(text, setStatus, newStatus)) {
            return;
        }

        setStatus(newStatus({ loading: true }));

        try {
            const result = await sentimentAPI.query(text);
            if (result) {
                setStatus(newStatus({ result: result.label }));
            } else {
                setStatus(newStatus({ error: "Sentiment analysis failed." }));
            }
        } catch {
            setStatus(newStatus({ error: "An error occurred during sentiment analysis." }));
        }
    };

    const closePopup = () => {
        setStatus(newStatus({ ...initialStatus }));
    };

    return (
        <>
            <SentimentView inputRef={inputRef} status={status} analyzeSentiment={analyzeSentiment} />
            {status.result && <Popup result={status.result} onClose={closePopup} />}
        </>
    );
};




export default Sentiment;
