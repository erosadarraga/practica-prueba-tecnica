import { ChangeEvent, useState } from 'react';


export const useForm = <T>(initState: T) => {

    const [formData, setFormData] = useState(initState);

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    const resetForm = () => {
        setFormData({ ...initState })
    }


    const validateCapital = (password: string) => {
        const re = /[A-Z]/
        return re.test(password)
    }

    const validateNumber = (password: string) => {
        const re = /[0-9]/
        return re.test(password)
    }

    const validateCaracter = (password: string) => {
        const re = /[@$?¡\-_]/
        return re.test(password)
    }


    return {
        ...formData,

        // properties
        formData,

        // Methods
        validateCaracter,
        validateCapital,
        validateNumber,
        onChange,
        resetForm,
    }
}