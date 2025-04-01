import { SignIn } from '@clerk/nextjs'


export default function SingInPage(){
    return (
       <section className="py-14">
            <div className="container mx-auto px-4">
                <div className='flex justify-center'>
                    <SignIn signUpUrl='/sing-up'/>
                </div>
            </div>
       </section> 
    )
}