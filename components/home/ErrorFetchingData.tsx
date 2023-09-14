type Props = {
    message: string;
}

const ErrorFetchingData = ({ message }: Props) => {
    return (
        <div className='mt-16 flex justify-center items-center flex-col gap-2'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            <p>{message}</p>
        </div>
    )
}

export default ErrorFetchingData