import { Link } from "react-router-dom"

function RegisterPage() {
    return (
        <main className='flex pt-20 items-center justify-center'>
            <div className='max-w-xl w-full'>
                <h2 className='text-center mb-10 text-2xl font-semibold '>Register</h2>
                <form className='flex flex-col w-full'>
                    <input className='p-2 rounded-xl border-2 border-black mb-3' type="text" id="username" name="username" placeholder='Username' required />
                    <input className='p-2 rounded-xl border-2 border-black mb-3' type="email" id="email" name="email" placeholder='Email' required />
                    <input className='p-2 rounded-xl border-2 border-black mb-3' type="password" id="password" name="password" placeholder='Password' required />
                    <button className='bg-black text-white p-3 rounded-xl mt-5 font-semibold'>Register</button>
                </form>
                <Link to="/login"><p className='text-center pr-5 py-5'>Already have an account!!</p></Link>
            </div>
        </main>
    )
}

export default RegisterPage
