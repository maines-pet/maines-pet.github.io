import React from 'react';

function SearchResults(props) {
    return (
        <div className='mt-3 ml-3'>
            <form>
                <input type="text" className='bg-slate-700 border rounded-md w-1/4 pl-2 text-white font-sans' placeholder='Search' />
            </form>
            <div>Searching for Adele</div>
            <div>
                <div>Artists</div>
                <div className='grid grid-flow-col justify-start gap-x-2'>
                    <div className='box-border p-2 w-48 h-64 bg-black text-white border-0 rounded-md'>
                        <div className='w-44 h-44 border-0 rounded-full overflow-hidden'>
                            <img src="https://i.scdn.co/image/8128a8fc52288607eb2e4667a4c172432b3e03e1" className='h-full object-cover object-center' alt="" />
                        </div>
                        <div className='text-center mt-5'>Adele 1</div>
                    </div>
                    <div className='box-border p-2 w-48 h-64 bg-black text-white border-0 rounded-md'>
                        <div className='w-44 h-44 border-0 rounded-full overflow-hidden'>
                            <img src="https://i.scdn.co/image/8128a8fc52288607eb2e4667a4c172432b3e03e1" className='h-full object-cover object-center' alt="" />
                        </div>
                        <div className='text-center mt-5'>Adele 1</div>
                    </div>
                    <div className='box-border p-2 w-48 h-64 bg-black text-white border-0 rounded-md'>
                        <div className='w-44 h-44 border-0 rounded-full overflow-hidden'>
                            <img src="https://i.scdn.co/image/8128a8fc52288607eb2e4667a4c172432b3e03e1" className='h-full object-cover object-center' alt="" />
                        </div>
                        <div className='text-center mt-5'>Adele 1</div>
                    </div>
                </div>
            </div>
            <div>
                <div>Tracks</div>
                <div className='grid grid-flow-col justify-start gap-x-2'>
                    <div className='box-border p-2 w-48 h-64 bg-black text-white border-0 rounded-md'>
                        <div className='w-44 h-44 border-0 rounded-full overflow-hidden'>
                            <img src="https://i.scdn.co/image/8128a8fc52288607eb2e4667a4c172432b3e03e1" className='h-full object-cover object-center' alt="" />
                        </div>
                        <div className='text-center mt-5'>Adele 1</div>
                    </div>
                    <div className='box-border p-2 w-48 h-64 bg-black text-white border-0 rounded-md'>
                        <div className='w-44 h-44 border-0 rounded-full overflow-hidden'>
                            <img src="https://i.scdn.co/image/8128a8fc52288607eb2e4667a4c172432b3e03e1" className='h-full object-cover object-center' alt="" />
                        </div>
                        <div className='text-center mt-5'>Adele 1</div>
                    </div>
                    <div className='box-border p-2 w-48 h-64 bg-black text-white border-0 rounded-md'>
                        <div className='w-44 h-44 border-0 rounded-full overflow-hidden'>
                            <img src="https://i.scdn.co/image/8128a8fc52288607eb2e4667a4c172432b3e03e1" className='h-full object-cover object-center' alt="" />
                        </div>
                        <div className='text-center mt-5'>Adele 1</div>
                    </div>
                </div>
            </div>
            <div>
                <div>Albums</div>
                <div className='grid grid-flow-col justify-start gap-x-2'>
                    <div className='box-border p-2 w-48 h-64 bg-black text-white border-0 rounded-md'>
                        <div className='w-44 h-44 border-0 rounded-full overflow-hidden'>
                            <img src="https://i.scdn.co/image/8128a8fc52288607eb2e4667a4c172432b3e03e1" className='h-full object-cover object-center' alt="" />
                        </div>
                        <div className='text-center mt-5'>Adele 1</div>
                    </div>
                    <div className='box-border p-2 w-48 h-64 bg-black text-white border-0 rounded-md'>
                        <div className='w-44 h-44 border-0 rounded-full overflow-hidden'>
                            <img src="https://i.scdn.co/image/8128a8fc52288607eb2e4667a4c172432b3e03e1" className='h-full object-cover object-center' alt="" />
                        </div>
                        <div className='text-center mt-5'>Adele 1</div>
                    </div>
                    <div className='box-border p-2 w-48 h-64 bg-black text-white border-0 rounded-md'>
                        <div className='w-44 h-44 border-0 rounded-full overflow-hidden'>
                            <img src="https://i.scdn.co/image/8128a8fc52288607eb2e4667a4c172432b3e03e1" className='h-full object-cover object-center' alt="" />
                        </div>
                        <div className='text-center mt-5'>Adele 1</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchResults;