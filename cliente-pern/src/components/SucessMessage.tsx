import { PropsWithChildren } from 'react'

export default function SucessMessage({ children }: PropsWithChildren) {
    return (
        <>
            <div className='text-center my-4 bg-green-600 text-white font-bold p-3 uppercase rounded'>
                {children}
            </div>
        </>
    )
}
